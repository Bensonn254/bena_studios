import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah',
      title: 'ML Engineer',
      company: 'Telus International',
      image: '/images/testimonials/sarah-m.jpg',
      quote: 'Outstanding work! The annotations were incredibly precise and delivered ahead of schedule. The quality of bounding boxes exceeded our expectations for our autonomous vehicle project.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      title: 'Data Scientist',
      company: 'MedTech Solutions',
      image: '/images/testimonials/michael-chen.jpg',
      quote: 'Professional, reliable, and detail-oriented. The segmentation work on our medical imaging dataset was flawless. Great communication throughout the project.',
      rating: 5,
    },
    {
      name: 'Emily',
      title: 'Product Manager',
      company: 'Appen',
      image: '/images/testimonials/emily.jpg',
      quote: 'We needed 500+ product images classified quickly for our ML model. The turnaround was impressive and the accuracy rate was perfect. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-7xl font-bold mb-4">
            Testimonials
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Trusted by data scientists and ML engineers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 text-2xl lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-blue-700" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-x1 text-gray-600">{testimonial.title}</div>
                  <div className="text-xl text-blue-700">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl mb-2">100%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl mb-2">3+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
