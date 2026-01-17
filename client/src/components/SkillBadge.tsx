import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillBadgeProps {
  icon: ReactNode;
  name: string;
  index: number;
}

export function SkillBadge({ icon, name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        borderColor: "rgba(168, 85, 247, 0.4)",
        boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1)"
      }}
      className="flex flex-col items-center justify-center p-6 glass rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="text-4xl text-foreground mb-3">
        {icon}
      </div>
      <span className="font-semibold text-foreground/80">{name}</span>
    </motion.div>
  );
}
