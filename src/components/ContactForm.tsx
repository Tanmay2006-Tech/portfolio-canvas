import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const mutation = useCreateMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="glass p-8 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    className="bg-white/50 dark:bg-black/20 border-white/30 dark:border-white/10 focus:border-primary/50 backdrop-blur-sm transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your.email@example.com" 
                    {...field} 
                    className="bg-white/50 dark:bg-black/20 border-white/30 dark:border-white/10 focus:border-primary/50 backdrop-blur-sm transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="What would you like to discuss?" 
                    className="min-h-[150px] bg-white/50 dark:bg-black/20 border-white/30 dark:border-white/10 focus:border-primary/50 backdrop-blur-sm transition-all resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold py-6 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
