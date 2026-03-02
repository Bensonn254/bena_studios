import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 overflow-hidden relative min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-0 items-center min-h-screen">
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-5 h-5 text-cyan-300" />
              <span className="text-xl text-cyan-100">Trusted by AI Companies Worldwide</span>
            </div>
            
            <h1 className="text-7xl font-bold lg:text-7xl mb-6">
              Professional Data Annotation Services
            </h1>
            
            <p className="text-3xl text-blue-100 mb-8">
              High-quality image labeling and data annotation for your machine learning projects. 
              Precise, fast, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-all duration-300 flex text-3xl items-center justify-center space-x-2 group animate-pulse shadow-lg shadow-amber-500/30"
              >
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6  group-hover:translate-x-1 transition-transform"/>
              </button>
              <button
                onClick={() => scrollToSection('samples')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-3xl rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                View Samples
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-2">300+</div>
                <div className="text-blue-200 text-xl">Images Annotated</div>
              </div>
              <div>
                <div className="text-5xl mb-2">3+</div>
                <div className="text-blue-200 text-xl">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl mb-2">99%</div>
                <div className="text-blue-200 text-xl">Accuracy Rate</div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-screen animate-float group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-blue-800/30 z-10"></div>
            <img
              src="/images/hero/profile.jpg"
              alt="Professional Data Annotator"
              className="w-full h-full object-cover object-center brightness-110 contrast-105 saturate-110 group-hover:scale-110 transition-transform duration-700 ease-in-out shadow-2xl shadow-blue-500/40"
              style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
