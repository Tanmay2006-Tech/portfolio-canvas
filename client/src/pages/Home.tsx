import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Code2, 
  Palette, 
  Terminal, 
  Layout, 
  Server, 
  GitBranch 
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";

import profileImg from "@assets/image_1768722240404.png";
import shadowFoxImg from "@assets/image_1768676583407.png";
import gdgImg from "@assets/image_1768676615316.png";

import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ContactForm } from "@/components/ContactForm";
import { AchievementModal } from "@/components/AchievementModal";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30 scroll-smooth">
      <Navigation />
      
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen dark:mix-blend-soft-light"
          />
          <motion.div 
            animate={{ 
              x: [0, -40, 0],
              y: [0, 60, 0],
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[140px] mix-blend-screen dark:mix-blend-soft-light"
          />
        </div>
        <div className="text-center z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/30 dark:bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-primary mb-6">
              Hello, I'm
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tight mb-6">
              <span className="text-gradient drop-shadow-[0_0_25px_rgba(var(--primary),0.5)]">Anandi</span>
              <br className="md:hidden" /> Mahajan
            </h1>
            
            <div className="text-xl md:text-3xl text-muted-foreground font-light mb-8 h-20 md:h-12">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Creative Coder',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-foreground rounded-full font-semibold hover:bg-white/90 transition-all"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-white/30 dark:bg-black/20 backdrop-blur-sm">
        <SectionHeader title="About Me" center />
        <div className="glass p-8 md:p-12 rounded-3xl max-w-4xl mx-auto border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
             {/* Profile Image */}
            <div className="aspect-square rounded-2xl flex items-center justify-center overflow-hidden relative group">
                <img 
                  src={profileImg} 
                  alt="Anandi Mahajan" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold font-display text-foreground">
                Passionate Frontend Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate frontend developer who loves creating beautiful UI experiences. 
                My journey involves turning creative ideas into functional, responsive, and 
                interactive web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a strong interest in startups, communities, and design. I believe in 
                the power of clean code and pixel-perfect design to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionHeader title="My Skills" subtitle="Technologies I love working with" center />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <SkillBadge icon={<FaHtml5 className="text-orange-500" />} name="HTML" index={0} />
          <SkillBadge icon={<FaCss3Alt className="text-blue-500" />} name="CSS" index={1} />
          <SkillBadge icon={<FaJs className="text-yellow-400" />} name="JavaScript" index={2} />
          <SkillBadge icon={<FaReact className="text-cyan-400" />} name="React" index={3} />
          <SkillBadge icon={<SiTailwindcss className="text-cyan-500" />} name="Tailwind" index={4} />
          <SkillBadge icon={<SiGithub className="text-foreground" />} name="Git & GitHub" index={5} />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-primary/5">
        <SectionHeader title="Featured Projects" subtitle="Some of my recent work" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="ShadowFox Portfolio"
            description="My internship portfolio showcasing various projects developed during my time at ShadowFox."
            link="https://github.com/ghost33218/ShadowFox-Intern-Portfolio"
            tech={["HTML", "CSS", "JS"]}
            index={0}
          />
          <ProjectCard 
            title="Rock Paper Scissors"
            description="An interactive Rock Paper Scissors game with score tracking and animations."
            link="https://github.com/ghost33218/ROCK-PAPER-SCISSOR"
            tech={["JavaScript", "DOM Manipulation"]}
            index={1}
          />
          <ProjectCard 
            title="Creavo Startup Website"
            description="A modern, responsive landing page for a startup with clean aesthetics."
            link="https://github.com/ghost33218/creavo-Startup--"
            tech={["HTML", "CSS", "Responsive Design"]}
            index={2}
          />
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements">
        <SectionHeader title="Achievements" center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AchievementModal 
            title="GDG Letter"
            imageUrl={gdgImg}
          />
          <AchievementModal 
            title="ShadowFox Certificate"
            imageUrl={shadowFoxImg}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gradient-to-b from-transparent to-primary/10">
        <SectionHeader title="Get In Touch" subtitle="Let's build something amazing together" center />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-display">Contact Info</h3>
            <p className="text-muted-foreground text-lg">
              Feel free to reach out for collaborations, freelance work, or just a friendly chat about tech!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:anandimahajan60@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="p-4 rounded-full bg-white shadow-md group-hover:shadow-primary/30 transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg">anandimahajan60@gmail.com</span>
              </a>
              
              <a href="https://github.com/ghost33218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="p-4 rounded-full bg-white shadow-md group-hover:shadow-primary/30 transition-all">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg">github.com/ghost33218</span>
              </a>
              
              <a href="https://www.linkedin.com/in/anandi-mahajan-432a5412b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="p-4 rounded-full bg-white shadow-md group-hover:shadow-primary/30 transition-all">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center bg-white/50 dark:bg-black/50 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground font-medium">
            Designed with <span className="text-primary animate-pulse">💜</span> by Tanmay
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} Anandi Mahajan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
