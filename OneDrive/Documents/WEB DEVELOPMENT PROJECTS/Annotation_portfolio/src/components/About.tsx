import { Award, Clock, Target, Zap } from 'lucide-react';

export function About() {
  const tools = [
    { name: 'CVAT', level: 95 },
    { name: 'Label Studio', level: 90 },
    { name: 'YOLO', level: 88 },
    { name: 'Labelbox', level: 85 },
    { name: 'VGG Image Annotator', level: 92 },
    { name: 'Roboflow', level: 87 },
  ];

  const expertise = [
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Certified in multiple annotation tools and frameworks',
    },
    {
      icon: Clock,
      title: '1+ Years Experience',
      description: 'Extensive experience in computer vision projects',
    },
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Meticulous attention to annotation accuracy',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-6 rounded-full text-7xl font-bold mb-6">
            About
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Professional data annotator with proven track record in delivering high-quality labeled datasets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tools & Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-4xl text-gray-900 mb-6">Annotation Tools Proficiency</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xl text-gray-900">{tool.name}</span>
                    <span className="text-blue-700">{tool.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-700 to-cyan-600 rounded-full transition-all duration-1000"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-4xl text-gray-900 mb-4">Output Formats</h4>
              <div className="flex flex-wrap gap-2">
                {['COCO JSON', 'YOLO TXT', 'Pascal VOC XML', 'CSV', 'Custom JSON', 'TFRecord'].map((format, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200 px-4 py-2 rounded-lg text-2xl"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-xl text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
              <h3 className="text-3xl text-gray-900 mb-4">What Sets Me Apart</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-xl text-gray-700">Direct communication - No intermediaries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-xl text-gray-700">Flexible working hours for urgent projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-xl text-gray-700">Free revisions within scope</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-xl text-gray-700">NDA and confidentiality agreements available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
