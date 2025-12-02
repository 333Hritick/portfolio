import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI-Based Solar Monitoring System & Solar Installation Enquiry Website",
    description:
      "This project is a complete solar energy monitoring system powered by AI-based predictions and a dynamic web dashboard. It provides real-time updates on solar power production, consumption, and surplus/deficit energy, while also predicting future energy trends. The website also includes a Solar Installation Enquiry Form for users to request installation services.",
    technologies: [
      "React.js",
      "Django REST API",
      "PostgreSQL",
      "WebSockets",
      "Python",
      "Machine Learning"
    ],
    liveDemo: "https://solarfrontend.onrender.com",
    github: "https://github.com/your-repo-here",
    gradient: "from-blue-500 to-cyan-500"
  },

  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application built using Socket.IO, allowing multiple users to communicate instantly with live message broadcasting and responsive UI.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Socket.IO"],
    liveDemo: "https://chat-app-uixa.onrender.com",
    github: "https://github.com/your-chat-repo",
    gradient: "from-emerald-500 to-teal-500",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern and responsive portfolio website showcasing projects, skills, and professional experience.",
    technologies: ["React", "TypeScript", "Vite", "Django"],
    liveDemo: "https://your-portfolio-link.com",
    github: "https://github.com/your-portfolio-repo",
    gradient: "from-orange-500 to-red-500",
  },

  {
    title: "COVID-19 India Map Tracker",
    description:
      "A Mapbox-powered visualization showing affected regions in India using dynamic markers and color-coded severity zones.",
    technologies: ["HTML", "CSS", "JavaScript", "Mapbox", "REST APIs"],
    liveDemo: "https://coronamap-i6jb.onrender.com",
    github: "https://github.com/your-covid-map-repo",
    gradient: "from-violet-500 to-purple-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
            in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
