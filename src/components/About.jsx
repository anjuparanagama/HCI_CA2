const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
    { category: 'Database', items: ['MongoDB', 'MySQL'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Kubernates', 'Figma'] }
  ];

  const education = [
    {
      Education: 'National Diploma in Information Technology',
      school: 'University of Moratuwa - NDT',
      year: '2022 '
    },
    {
      Education: 'Advanced Level & Ordinary Level',
      school: 'D.S.Senanayake National School - Ampara',
      year: '2012-2021'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about my background, skills, and what drives my passion for software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
              I am a passionate and hardworking student who is interested in technology and software development. 
              I enjoy building web and mobile applications, working with IoT devices, and learning new things every day. 
              I have experience in frontend and backend development, and I love creating useful systems that solve real-world problems.
              </p>
              <p>
              I always try to improve my skills and explore new technologies like DevOps, AI, and cybersecurity. 
              I enjoy working in a team and believe in sharing knowledge and helping others.
              </p>
            </div>
          </div>

          {/* Skills and Education */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.Education}</h4>
                    <p className="text-primary-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-600 mb-3">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;