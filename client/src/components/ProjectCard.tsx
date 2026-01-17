import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tech?: string[];
  index: number;
}

export function ProjectCard({ title, description, link, tech, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-2xl opacity-0 group-hover:opacity-40 blur transition-all duration-500" />
      <div className="relative h-full glass p-8 border border-white/10 flex flex-col justify-between hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/10">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          {tech && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {t}
                </span>
              ))}
            </div>
          )}
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
          >
            View Project
            <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
