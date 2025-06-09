import Myimg from '../assets/images/my.jpg';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={Myimg}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-xl animate-bounce-gentle"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20"></div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Anjula Paranagama
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate <span className="font-semibold text-primary-600">DevOps Enthusiast</span> Bridging the gap between development and operations while ensuring robust security practices. Specializing in cloud infrastructure and automated security solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="/projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="View my projects" >
                View My Work
              </a>
              
              <a href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105"
                aria-label="Get in touch with me">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;