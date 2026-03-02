import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const phoneNumber = '+254743052401';
  const message = encodeURIComponent(
    "Hi! I'm interested in your data annotation services. I found your website and would like to discuss a project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-14 h-14" />
      <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with me on WhatsApp
      </div>
    </a>
  );
}
