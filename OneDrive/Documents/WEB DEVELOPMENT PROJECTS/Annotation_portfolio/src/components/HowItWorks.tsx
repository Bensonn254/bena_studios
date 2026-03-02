import { Upload, Settings, CheckCircle, Send } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Submit Your Data',
      description: 'Upload your images and provide annotation requirements. Specify the format and guidelines needed.',
      duration: '5 minutes',
    },
    {
      number: 2,
      icon: Settings,
      title: 'Review & Planning',
      description: 'I analyze your requirements and create a detailed annotation plan with timeline and pricing.',
      duration: '2-4 hours',
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Annotation Process',
      description: 'Professional annotation using industry-standard tools. Quality checks performed at every step.',
      duration: '1-3 days',
    },
    {
      number: 4,
      icon: Send,
      title: 'Delivery & Support',
      description: 'Receive annotated data in your preferred format. Revisions and support included.',
      duration: '1 hour',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-6 rounded-full text-7xl font-bold mb-6">
            Process
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">How I Work</h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            A streamlined 4-step process from project start to delivery
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl">{step.number}</span>
                      </div>
                    </div>

                    <div className="mt-8 mb-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-blue-700" />
                      </div>
                      <h3 className="text-3xl text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-2xl text-gray-600 leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center space-x-2 text-xl text-cyan-600">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-4xl text-gray-900 mb-6 text-center">Typical Turnaround Times</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="text-4xl mb-2">24h</div>
              <div className="text-2xl text-gray-900 mb-2">Small Projects</div>
              <div className="text-xl text-gray-600">Up to 100 images</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border border-blue-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-3 py-1 rounded-full text-xs">
                Most Popular
              </div>
              <div className="text-4xl mb-2">48h</div>
              <div className="text-2xl text-gray-900 mb-2">Medium Projects</div>
              <div className="text-xl text-gray-600">100-500 images</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="text-4xl mb-2">72h</div>
              <div className="text-2xl text-gray-900 mb-2">Large Projects</div>
              <div className="text-xl text-gray-600">500+ images</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
