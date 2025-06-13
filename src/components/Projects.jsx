import Weather from '../assets/images/weather.png';
import Conference from '../assets/images/irc.png';
import EcoVibe from '../assets/images/ecovibe.png';
import QRCode from '../assets/images/qr.png';
import Lms from '../assets/images/lms.png';
import Lmshtml from '../assets/images/lmshtml.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Meteo Earth',
      description: 'A weather forecasting web application that fetches real-time weather data using the OpenWeather API. It displays temperature, humidity, wind speed, and weather conditions in an interactive and visually appealing format.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      github: 'https://github.com/anjuparanagama/Meteo_Earth',
      demo: '',
      image: Weather,
      featured: true
    },
    {
      id: 2,
      title: 'Conference Day Management System',
      description: 'A web-based system that streamlines conference management by handling participant registrations, schedules, and email notifications. It includes an admin panel for event organizers and an automated email system using PHPMailer.',
      technologies: ['HTML', 'CSS', 'php', 'mySQL', 'phpMailer'],
      github: 'https://github.com/anjuparanagama/Conference_Day_Management_System',
      demo: '',
      image: Conference,
      featured: true
    },
    {
      id: 3,
      title: 'Eco Vibe',
      description: 'A modern and eco-friendly website built using React, designed to promote sustainability and environmental awareness. It features interactive UI components, responsive design, and smooth navigation.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/anjuparanagama/EcoVibe',
      demo: '',
      image: EcoVibe,
      featured: false
    },
    {
      id: 4,
      title: 'Simple Library Management System',
      description: 'A basic library management system built in Java to help manage book records, issue tracking, and user management. It provides a simple interface for adding, searching, and issuing books.',
      technologies: ['Html', 'Css'],
      github: 'https://github.com/anjuparanagama/Library_management_system',
      demo: '',
      image: Lmshtml ,
      featured: false
    },
    {
      id: 5,
      title: 'Simple Library Management System',
      description: 'A basic A Python-based library management system designed to handle book inventory, user accounts, and book transactions efficiently. It supports basic CRUD operations and a user-friendly interface.',
      technologies: ['Python'],
      github: 'https://github.com/anjuparanagama/Simple_Library_management_system_using_python',
      demo: '',
      image: Lms,
      featured: false
    },
    {
      id: 6,
      title: 'QR Code Generator',
      description: 'A A simple web application that generates QR codes for URLs, text, and other data. Users can customize the size and style of the QR codes and download them for use.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/anjuparanagama/QR-Code-Generator',
      demo: '',
      image: QRCode,
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development 
            and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"/>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105"
                    aria-label={`View live demo of ${project.title}`} >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-primary-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
                    aria-label={`View source code for ${project.title} on GitHub`}>
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;