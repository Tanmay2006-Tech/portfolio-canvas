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

import profileImg from "@assets/Screenshot_2026-01-17_213726_1768676541072.png";
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
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
      <Navigation />
      
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-glow"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-md text-xs font-bold text-primary uppercase mb-8 tracking-[0.2em]"
            >
              Building the future of web
            </motion.span>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold font-display tracking-tight mb-8 leading-[0.9]">
              <span className="text-gradient relative inline-block">
                Anandi
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1.2, ease: "circOut" }}
                  className="absolute bottom-4 left-0 h-1 md:h-2 bg-primary/20 rounded-full -z-10"
                />
              </span>
              <br className="md:hidden" /> <span className="text-foreground">Mahajan</span>
            </h1>
            
            <div className="text-xl md:text-3xl text-muted-foreground font-light mb-12 h-20 md:h-12 tracking-tight opacity-80">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2500,
                  'UI/UX Enthusiast',
                  2500,
                  'Creative Coder',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="px-10 py-5 bg-primary text-white rounded-full font-bold shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:shadow-[0_30px_60px_-15px_rgba(var(--primary),0.5)] transition-all flex items-center gap-3 group"
              >
                Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-10 py-5 glass text-foreground rounded-full font-bold hover:bg-white/10 dark:hover:bg-black/30 transition-all border-white/20 shadow-xl"
              >
                Say Hello
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
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
