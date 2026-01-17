import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold font-display mb-4"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <div className={`h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mt-6 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
