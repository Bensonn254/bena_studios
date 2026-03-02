import { useState } from 'react';
import { Send, Mail, MessageSquare, User, Paperclip, Copy, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null as File | null,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    setShowSuccess(true);
    // Reset form
    setFormData({ name: '', email: '', message: '', file: null });
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const templateMessage = `Hi! I'm interested in your data annotation services.

Project Details:
- Number of images: 
- Annotation type: 
- Preferred format: 
- Timeline: 

Please let me know your availability and pricing.

Thanks!`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(templateMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-6 rounded-full text-7xl font-bold mb-6">
            Contact
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your annotation project? Get in touch today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-screen-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-4xl text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xl text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xl text-gray-700 mb-2">
                  Project Details
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your annotation project..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="file" className="block text-xl text-gray-700 mb-2">
                  Attach Sample Images (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.zip,.rar"
                    multiple
                  />
                  <label
                    htmlFor="file"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <Paperclip className="w-5 h-5 text-gray-400" />
                    <span className="text-2xl text-gray-600">
                      {formData.file ? formData.file.name : 'Click to upload files'}
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="text-2xl">Send Message</span>
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-2xl text-green-900">Message sent successfully!</div>
                  <div className="text-xl text-green-700">I'll get back to you within 24 hours.</div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info & Template */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-700 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-4xl mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl text-blue-100 mb-1">Email</div>
                    <a href="mailto:bensonannotations@gmail.com" className="hover:text-amber-300 transition-colors">
                      bensonannotations@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl text-blue-100 mb-1">Response Time</div>
                    <div>Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-xl text-blue-100 mb-2">Average Response Time</div>
                <div className="text-4xl mb-1">2 hours</div>
                <div className="text-xl text-blue-100">During business hours</div>
              </div>
            </div>

            {/* Message Template */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl text-gray-900">Message Template</h3>
                <button
                  onClick={copyTemplate}
                  className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors text-xl"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>
              
              <pre className="bg-gray-50 rounded-lg p-4 text-xl text-gray-700 whitespace-pre-wrap border border-gray-200 leading-relaxed">
                {templateMessage}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
