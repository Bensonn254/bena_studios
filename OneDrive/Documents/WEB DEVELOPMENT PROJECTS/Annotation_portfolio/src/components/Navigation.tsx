import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'services', 'how-it-works', 'samples', 'about', 'testimonials', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'samples', label: 'Samples' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-white/60 backdrop-blur-xl border-b border-white/30'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-24">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group"
          >
            <div className="group-hover:opacity-80 transition-opacity">
              <img 
                src="/images/hero/annotations_logo.png" 
                alt="Benson Data Annotation Services" 
                className="w-17 h-12 object-cover rounded-lg"
              />
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-2xl text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-700' 
                    : 'hover:underline underline-offset-4 decoration-2 decoration-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-6xl p-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute right-4 top-24 bg-white shadow-lg  rounded-lg p-4 min-w-fit">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-xl text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-700' 
                  : 'hover:underline underline-offset-4 decoration-2 decoration-blue-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
