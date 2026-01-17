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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center justify-center p-6 glass rounded-2xl border border-white/20 shadow-lg shadow-primary/5 hover:shadow-primary/20 transition-all duration-300"
    >
      <div className="text-4xl text-foreground mb-3">
        {icon}
      </div>
      <span className="font-semibold text-foreground/80">{name}</span>
    </motion.div>
  );
}
