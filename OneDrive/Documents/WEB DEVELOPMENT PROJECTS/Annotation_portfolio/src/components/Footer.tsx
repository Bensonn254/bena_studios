import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { FiverrIcon } from './FiverrIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images/hero/annotations_logo.png" 
                  alt="Benson Data Annotation Services" 
                  className="w-17 h-8 object-cover rounded-lg"
                />
              </button>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xl hover:text-blue-400 transition-colors"
              >
                
              </button>
            </div>
            <p className="text-gray-400 mb-4 max-w-md py-2 text-xl">
              Professional data annotation and image labeling services for machine learning projects. 
              Delivering precision, quality, and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.fiverr.com/bigbenod?public_mode=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <FiverrIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:bensonannotations@gmail.com" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-xl">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('samples')} className="text-gray-400 hover:text-white transition-colors text-xl">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors text-xl">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors text-xl">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-xl">
              <li>Image Classification</li>
              <li>Object Detection</li>
              <li>Semantic Segmentation</li>
              <li>Polygon Annotation</li>
              <li>Keypoint Detection</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-gray-400 text-xl">
              © {currentYear} Benson Data Annotation Services. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
