import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-32 md:py-48 relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% " }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 }
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
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
