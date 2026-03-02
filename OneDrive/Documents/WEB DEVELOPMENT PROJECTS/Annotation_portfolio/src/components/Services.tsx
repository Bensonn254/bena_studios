import { Tag, Box, Users, Image, Target, Layers } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Tag,
      title: 'Image Classification',
      description: 'Accurate categorization of images into predefined classes for training classification models.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Box,
      title: 'Object Detection',
      description: 'Precise bounding box annotations for identifying and localizing objects within images.',
      color: 'bg-cyan-100 text-cyan-700',
    },
    {
      icon: Layers,
      title: 'Semantic Segmentation',
      description: 'Pixel-level annotations for detailed understanding of image composition and object boundaries.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Users,
      title: 'Polygon Annotation',
      description: 'Complex shape annotations for irregular objects requiring precise boundary definitions.',
      color: 'bg-cyan-100 text-cyan-700',
    },
    {
      icon: Target,
      title: 'Keypoint Detection',
      description: 'Landmark and keypoint marking for pose estimation and facial recognition applications.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Image,
      title: 'QA Checks',
      description: 'Comprehensive quality assurance and validation processes ensuring annotation accuracy, consistency, and adherence to project specifications.',
      color: 'bg-cyan-100 text-cyan-700',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-6 rounded-full text-7xl font-bold mb-6">
            Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">What I Can Handle</h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive annotation services tailored to your machine learning needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-2xl text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Strengths Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-4xl text-gray-900 mb-6 text-center">Why Choose My Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <div className="text-2xl text-gray-900 mb-1">Precision-Driven</div>
                <div className="text-xl text-gray-600">99%+ accuracy on all annotations</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <div className="text-2xl text-gray-900 mb-1">Fast Turnaround</div>
                <div className="text-xl text-gray-600">24-72 hour delivery available</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <div className="text-2xl text-gray-900 mb-1">Tool Expertise</div>
                <div className="text-xl text-gray-600">CVAT, YOLO, Label Studio certified</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <div className="text-2xl text-gray-900 mb-1">Flexible Formats</div>
                <div className="text-xl text-gray-600">COCO, YOLO, Pascal VOC supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
