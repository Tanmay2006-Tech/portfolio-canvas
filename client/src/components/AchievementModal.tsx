import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Award, ZoomIn } from "lucide-react";

interface AchievementModalProps {
  title: string;
  imageUrl: string;
}

export function AchievementModal({ title, imageUrl }: AchievementModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer group relative overflow-hidden rounded-2xl aspect-video bg-muted"
        >
          {/* Descriptive HTML comment for fallback */}
          {/* Achievement certificate image for {title} */}
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
            <Award className="text-white w-8 h-8" />
            <span className="text-white font-semibold">{title}</span>
            <div className="flex items-center text-white/80 text-sm mt-2">
              <ZoomIn className="w-4 h-4 mr-1" /> Click to view
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg" 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
