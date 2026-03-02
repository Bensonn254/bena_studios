import { Check, Zap } from 'lucide-react';

export function Pricing() {
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

  const plans = [
    {
      name: 'Starter',
      price: '$10',
      unit: 'per 100 images',
      description: 'Perfect for small datasets and testing',
      features: [
        'Up to 100 images',
        'Basic annotation types',
        'YOLO or COCO format',
        '72-hour delivery',
        'Email support',
        '1 revision included',
      ],
      popular: false,
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      buttonStyle: 'bg-blue-700 hover:bg-blue-800 text-white',
    },
    {
      name: 'Professional',
      price: '$150',
      unit: 'per 500 images',
      description: 'Most popular for ML projects',
      features: [
        'Up to 500 images',
        'All annotation types',
        'Any format (COCO, YOLO, VOC)',
        '48-hour delivery',
        'Priority support',
        '3 revisions included',
        'Quality assurance report',
        'Custom guidelines support',
      ],
      popular: true,
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-amber-400',
      buttonStyle: 'bg-amber-500 hover:bg-amber-600 text-white',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      unit: 'per project',
      description: 'For large-scale annotation needs',
      features: [
        '500+ images',
        'All annotation types',
        'Any format + custom formats',
        'Flexible delivery timeline',
        '24/7 dedicated support',
        'Unlimited revisions',
        'Detailed QA reports',
        'NDA available',
        'Ongoing partnership rates',
      ],
      popular: false,
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      buttonStyle: 'bg-blue-700 hover:bg-blue-800 text-white',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-5 rounded-full text-7xl font-bold mb-4">
            Pricing
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing plans to suit projects of any size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${plan.color} rounded-2xl p-8 border-2 ${plan.borderColor} relative hover:shadow-xl transition-all ${
                plan.popular ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-5 py-1 rounded-full text-2xl flex items-center leading-none space-x-3 shadow-lg">
                    <Zap className="w-6 h-6" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-4xl text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-xl mb-4">{plan.description}</p>
                <div className="text-4xl text-gray-900 mb-1">{plan.price}</div>
                <div className="text-lg text-gray-600">{plan.unit}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full ${plan.buttonStyle} text-3xl px-6 py-3 rounded-lg transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-screen-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-4xl text-gray-900 mb-6 text-center">What's Included in All Plans</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <div className="text-2xl text-gray-900 mb-1">Quality Guarantee</div>
                <div className="text-xl text-gray-600">99%+ accuracy or free rework</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <div className="text-2xl text-gray-900 mb-1">Secure File Transfer</div>
                <div className="text-xl text-gray-600">Encrypted data handling</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <div className="text-2xl text-gray-900 mb-1">Direct Communication</div>
                <div className="text-xl text-gray-600">Work directly with the annotator</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <div className="text-2xl text-gray-900 mb-1">Sample Validation</div>
                <div className="text-xl text-gray-600">Review samples before full commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
