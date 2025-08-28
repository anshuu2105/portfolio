'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cpu, Award, Calendar, GraduationCap, Briefcase, User, ChevronRight, Download, Star, GitBranch, Zap, Globe, Terminal, FileText } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = {
    languages: ['JavaScript', 'Python', 'C/C++', 'TypeScript', 'Java', 'HTML', 'CSS'],
    frameworks: ['React', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'Linux', 'Windows', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI']
  };

  const projects = [
    {
      title: 'ExcelAnalytics',
      description: 'Web-based analytics platform with Excel-like functionality for data visualization',
      tech: ['React.js', 'Bootstrap', 'MongoDB'],
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Multi-Object Tracking AI',
      description: 'Real-time tracking system with 98% accuracy using YOLOv5 and Deep SORT',
      tech: ['YOLOv5', 'TensorFlow.js', 'TypeScript'],
      icon: <Cpu className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Spera - Social Platform',
      description: 'Social networking platform serving 5,000+ users with advanced filtering',
      tech: ['MERN Stack'],
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const experience = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Zidio Development',
      period: 'June 2025 – Sept 2025',
      description: 'Worked on MERN stack development, REST APIs, and performance optimization',
      icon: <Code className="w-5 h-5" />
    },
    {
      role: 'Frontend Developer Intern',
      company: 'PRODESKIT',
      period: 'June 2025 – July 2025',
      description: 'Developed React.js components and responsive web interfaces',
      icon: <Terminal className="w-5 h-5" />
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  const SkillCard = ({ category, items, icon }) => (
    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-white capitalize">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
            {project.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
          <span className="text-sm font-medium">View Project</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full rounded-full bg-white"></div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AS
            </div>
            <div className="flex gap-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 relative group ${activeSection === item.id ? 'text-white' : ''
                    }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-4xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  {/* Image Upload Area */}
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center relative group cursor-pointer">
                    <img
                      src="mine.jpg"
                      alt="Anshika Sagar"
                      className="w-full h-full object-cover rounded-full"
                    />

                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Anshika Sagar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">Full Stack Developer</p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions with modern web technologies.
              Specialized in React, Node.js, and AI integration.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:anshikasagar00@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Get In Touch</span>
            </a>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:border-gray-500 transition-colors duration-300">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/anshuu2105" className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors duration-300 group">
              <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com/in/anshika-sagar-343999251" className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors duration-300 group">
              <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="tel:+919084755990" className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors duration-300 group">
              <Phone className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student at COER University with a strong foundation in
                full-stack development and AI technologies. With hands-on experience in building scalable
                applications and a track record of successful internships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">Education</span>
                  </div>
                  <p className="text-gray-400">BTech CSE, COER University</p>
                  <p className="text-sm text-gray-500">GPA: 8.7/10.0</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Achievements</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Runner-up, Internal Hackathon 2.0
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    IBM Python Data Science Certification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              category="languages"
              items={skills.languages}
              icon={<Code className="w-6 h-6 text-blue-400" />}
            />
            <SkillCard
              category="frameworks"
              items={skills.frameworks}
              icon={<Zap className="w-6 h-6 text-green-400" />}
            />
            <SkillCard
              category="databases"
              items={skills.databases}
              icon={<Database className="w-6 h-6 text-purple-400" />}
            />
            <SkillCard
              category="tools"
              items={skills.tools}
              icon={<GitBranch className="w-6 h-6 text-orange-400" />}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-blue-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Ready to collaborate on exciting projects? Let's build something amazing together!</p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:anshikasagar00@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium text-lg">anshikasagar00@gmail.com</span>
            </a>
            <a
              href="tel:+919084755990"
              className="flex items-center gap-3 px-8 py-4 border border-gray-700 rounded-full hover:border-gray-500 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
              <span className="font-medium text-lg">+91 9084755990</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Anshika Sagar. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/anshuu2105" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/anshika-sagar-343999251" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;