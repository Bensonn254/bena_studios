import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react';

interface SampleImage {
  original: string;
  annotated: string;
}

interface Sample {
  id: string;
  title: string;
  type: 'detection' | 'classification' | 'qa' | 'segmentation';
  description: string;
  format: string;
  images: number;
  tags: string[];
  gallery: SampleImage[];
  qaChecks?: string[];
  annotationType?: string;
  classes?: string;
  tool?: string;
  exportFormat?: string;
  qa?: string;
  link?: string;
}

export function Samples() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{original: string, annotated: string}[]>([]);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [showAnnotated, setShowAnnotated] = useState(false);
  const [sampleImageIndexes, setSampleImageIndexes] = useState<{[key: string]: number}>({});

  const samples: Sample[] = [
    {
      id: 'sample1',
      title: 'Object Detection - Vehicle & Pedestrian Dataset',
      type: 'detection',
      description: 'Bounding boxes around people and vehicles using consistent label definitions. Annotations follow tight box placement rules with proper class labeling.',
      format: 'YOLO',
      images: 250,
      tags: ['CVAT', 'YOLO', 'Quality Check'],
      gallery: [
        {
          original: '/images/samples/street_scene_cars 1.jpg',
          annotated: '/images/samples/street_scene_cars 1_well labelled.jpg'
        },
        {
          original: '/images/samples/street_scene_cars 2.jpg',
          annotated: '/images/samples/street_scene_cars 2_well labelled 2.jpg'
        },
        {
          original: '/images/samples/street-person.jpg',
          annotated: '/images/samples/street-person-labelled.jpg'
        },
        {
          original: '/images/samples/sample1-original-2.jpg',
          annotated: '/images/samples/sample1-annotated-2.jpg'
        }
      ],
      link: 'https://drive.google.com/file/d/1vArJKs50Ws5xyLon8OXx_a_Ykak0NZpg/view?usp=drive_link'
    },
    {
      id: 'sample2',
      title: 'Image Classification - Grocery Products',
      type: 'classification',
      description: 'Grocery images classified into predefined product categories using consistent labeling rules. Each image assigned to specific classes based on content analysis.',
      format: 'CSV',
      images: 520,
      tags: ['CSV', 'Label Studio', 'Multi-class'],
      gallery: [
        {
          original: '/images/samples/fruits_004.jpg',
          annotated: '/images/samples/fruits_004_labelled.png'
        },
        {
          original: '/images/samples/fruits_001.jpg',
          annotated: '/images/samples/fruits_001_labelled.jpg'
        },
        {
          original: '/images/samples/eggs_002.jpg',
          annotated: '/images/samples/eggs_002_labelled.jpg'
        },
        {
          original: '/images/samples/fruits_005.jpg',
          annotated: '/images/samples/fruits_005_labelled.png'
        },
        {
          original: '/images/samples/vege07.png',
          annotated: '/images/samples/vege07_labelled.jpg'
        }
      ],
      link: 'https://drive.google.com/file/d/1ErGgkq7u5AiSgxWR4vB0poHM4lsx1jSu/view?usp=drive_link'
    },
    {
      id: 'sample3',
      title: 'Annotation QA - Quality Assurance Review',
      type: 'qa',
      description: 'Reviewed annotations for missing labels, inconsistent classes, and box placement issues. Corrected errors and documented edge cases for consistency.',
      format: 'YOLO',
      images: 180,
      tags: ['Quality Assurance', 'Error Detection', 'Documentation'],
      qaChecks: ['Missing annotations', 'Duplicate boxes', 'Box tightness & overlap', 'Class consistency', 'Edge cases'],
      gallery: [
        {
          original: '/images/samples/street_scene_cars 1_mislabelled.jpg',
          annotated: '/images/samples/street_scene_cars 1_well labelled.jpg'
        },
        {
          original: '/images/samples/street_scene_cars 2_mislabelled.jpg',
          annotated: '/images/samples/street_scene_cars 2_well labelled 2.jpg'
        },
        {
          original: '/images/samples/sample3-before.jpg',
          annotated: '/images/samples/sample3-after.jpg'
        }
      ],
      link: 'https://drive.google.com/file/d/1ErGgkq7u5AiSgxWR4vB0poHM4lsx1jSu/view?usp=drive_link'
    },
    {
      id: 'sample4',
      title: 'Semantic Segmentation - Road Scene Analysis',
      type: 'segmentation',
      description: 'Pixel-level semantic segmentation performed to accurately separate foreground objects from background. Focused on clean boundaries, consistent class application, and guideline-driven labeling for computer vision training.',
      format: 'COCO',
      images: 150,
      tags: ['CVAT', 'Roboflow', 'PNG Masks'],
      annotationType: 'Semantic segmentation',
      classes: 'Road, Vehicle, Background',
      tool: 'CVAT / Roboflow',
      exportFormat: 'COCO / PNG masks',
      qa: 'Boundary review, class consistency',
      gallery: [
        {
          original: '/images/samples/segmentation-original-1.jpg',
          annotated: '/images/samples/segmentation-annotated-1.png'
        },
        {
          original: '/images/samples/segmentation-original-2.jpg',
          annotated: '/images/samples/segmentation-annotated-2.png'
        },
        {
          original: '/images/samples/segmentation-original-3.jpg',
          annotated: '/images/samples/segmentation-annotated-3.png'
        }
      ],
      link: 'https://drive.google.com/file/d/1semantic-segmentation-sample/view?usp=drive_link'
    }
  ];

  const lightboxRef = useRef<HTMLDivElement>(null);

  // Initialize sample image indexes
  useEffect(() => {
    const initialIndexes: {[key: string]: number} = {};
    samples.forEach(sample => {
      initialIndexes[sample.id] = 0;
    });
    setSampleImageIndexes(initialIndexes);
  }, []);

  const updateSampleImageIndex = (sampleId: string, direction: 'prev' | 'next') => {
    setSampleImageIndexes(prev => {
      const sample = samples.find(s => s.id === sampleId);
      if (!sample) return prev;
      
      const currentIndex = prev[sampleId] || 0;
      const newIndex = direction === 'next' 
        ? (currentIndex + 1) % sample.gallery.length
        : (currentIndex - 1 + sample.gallery.length) % sample.gallery.length;
      
      return {
        ...prev,
        [sampleId]: newIndex
      };
    });
  };

  const openLightbox = (sample: Sample) => {
    setLightboxImages(sample.gallery);
    setCurrentLightboxIndex(0);
    setShowAnnotated(false);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentLightboxIndex(0);
    setShowAnnotated(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          prevLightboxImage();
          break;
        case 'ArrowRight':
          nextLightboxImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, showAnnotated, currentLightboxIndex, lightboxImages.length]);

  const nextLightboxImage = () => {
    if (showAnnotated) {
      // Move to next image with wraparound
      setCurrentLightboxIndex((currentLightboxIndex + 1) % lightboxImages.length);
      setShowAnnotated(false);
    } else {
      setShowAnnotated(true);
    }
  };

  const prevLightboxImage = () => {
    if (!showAnnotated) {
      // Move to previous image with wraparound
      setCurrentLightboxIndex((currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length);
      setShowAnnotated(true);
    } else {
      setShowAnnotated(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % samples.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + samples.length) % samples.length);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.cursor = 'zoom-out';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.cursor = 'default';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.cursor = 'default';
    };
  }, [lightboxOpen]);

  const currentSample = samples[currentSlide];

  return (
    <section id="samples" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-6 rounded-full text-7xl font-bold mb-6">
            Sample Annotation Work
          </div>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Before and after examples of annotation projects
          </p>
        </div>

        {/* Sample Sections */}
        <div className="space-y-16">
          {samples.map((sample, index) => (
            <div key={sample.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 relative">
              {/* Sample Header */}
              <div className="text-center mb-8">
                <h3 className="text-4xl text-gray-900 mb-4">{sample.title}</h3>
                <p className="text-2xl text-gray-600 max-w-2xl mx-auto">{sample.description}</p>
              </div>

              {/* Before/After Images */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Before Image */}
                <div className="relative group cursor-pointer" onClick={() => openLightbox(sample)}>
                  <div className="absolute -top-3 left-4 bg-gray-700 text-white px-3 py-1 rounded-lg text-2xl z-10">
                    Before
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={sample.gallery[sampleImageIndexes[sample.id] || 0]?.original}
                      alt="Before annotation"
                      className="w-full h-200 object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                        <span className="text-white text-sm font-medium">Zoom</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative group cursor-pointer" onClick={() => openLightbox(sample)}>
                  {/* Slide Counter */}
                  <div className="absolute -top-20 right-0 bg-gray-800 text-white px-7 py-4 rounded-lg flex items-center space-x-2 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateSampleImageIndex(sample.id, 'prev');
                      }}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <ChevronLeft className="w-9 h-9" />
                    </button>
                    <span className="text-2xl font-medium">
                      {(sampleImageIndexes[sample.id] || 0) + 1}/{sample.gallery.length}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateSampleImageIndex(sample.id, 'next');
                      }}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <ChevronRight className="w-9 h-9" />
                    </button>
                  </div>
                  
                  <div className="absolute -top-3 left-4 bg-amber-500 text-white px-3 py-1 rounded-lg text-2xl z-10">
                    After
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={sample.gallery[sampleImageIndexes[sample.id] || 0]?.annotated}
                      alt="After annotation"
                      className="w-full h-200 object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-700/10 border-2 border-amber-500/50"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                        <span className="text-white text-sm font-medium">Zoom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Details */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-2xl">
                    <span className="text-gray-500">Format:</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-2xl">{sample.format}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-2xl">
                    <span className="text-gray-500">Images:</span>
                    <span className="text-gray-900 text-2xl">{sample.images}</span>
                  </div>
                  {sample.annotationType && (
                    <div className="flex items-center space-x-2 text-2xl">
                      <span className="text-gray-500">Type:</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-2xl">{sample.annotationType}</span>
                    </div>
                  )}
                </div>

                {/* Additional details for segmentation */}
                {sample.type === 'segmentation' && (
                  <div className="grid md:grid-cols-2 gap-4 mb-4 text-2xl">
                    {sample.classes && (
                      <div>
                        <span className="text-gray-500">Classes:</span>
                        <span className="text-gray-900 ml-2">{sample.classes}</span>
                      </div>
                    )}
                    {sample.tool && (
                      <div>
                        <span className="text-gray-500">Tool:</span>
                        <span className="text-gray-900 ml-2">{sample.tool}</span>
                      </div>
                    )}
                    {sample.exportFormat && (
                      <div>
                        <span className="text-gray-500">Export:</span>
                        <span className="text-gray-900 ml-2">{sample.exportFormat}</span>
                      </div>
                    )}
                    {sample.qa && (
                      <div>
                        <span className="text-gray-500">QA:</span>
                        <span className="text-gray-900 ml-2">{sample.qa}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {sample.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-cyan-50 text-cyan-700 border border-cyan-200 px-3 py-1 rounded-full text-2xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Google Drive Link */}
                <div className="mt-6 text-center">
                  <a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-2xl">View Full Dataset on Google Drive</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full" ref={lightboxRef} onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg text-xl z-10">
                {currentLightboxIndex + 1} / {lightboxImages.length}
              </div>

              <img
                src={showAnnotated ? lightboxImages[currentLightboxIndex]?.annotated : lightboxImages[currentLightboxIndex]?.original}
                alt={showAnnotated ? "After annotation" : "Before annotation"}
                className="max-w-full max-h-[80vh] object-contain rounded-lg cursor-zoom-out"
                onClick={closeLightbox}
              />
              
              <div className="absolute top-4 left-4">
                <div className={`px-4 py-2 rounded-lg text-xl font-bold ${
                  showAnnotated ? 'bg-amber-500 text-white' : 'bg-gray-700 text-white'
                }`}>
                  {showAnnotated ? 'After' : 'Before'}
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <div className="text-xl mb-2">
                  Image {currentLightboxIndex + 1} of {lightboxImages.length} - {showAnnotated ? 'Annotated' : 'Original'}
                </div>
              </div>
            </div>
            
            {/* Bottom Navigation Bar */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-white text-xl">
                {currentSample.title}
              </div>
              <button
                onClick={closeLightbox}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors text-xl"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
