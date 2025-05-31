import { Send } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-200 rounded-full opacity-60"></div>
        
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 bg-yellow-300 rounded-lg rotate-12 shadow-lg">
          <div className="w-2 h-2 bg-gray-800 rounded-full absolute top-2 left-2"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full absolute top-2 right-2"></div>
        </div>
        
        <div className="absolute top-1/4 right-8 w-32 h-32 bg-red-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-1/4 right-16 w-24 h-24 bg-red-500 rounded-full opacity-70"></div>
        
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-6">
            GET PIXEL PERFECT IMAGE EDITING SERVICES
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Photo Editing & Graphic Design
            <br />
            <span className="text-gray-800">Made For Everyone</span>
          </h1>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-b-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img 
                src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb.26725d53.png&w=1920&q=75"
                alt="Image"
                loading="lazy"
                width="920"
                height="516"
                decoding="async"
                className="w-full h-auto"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
          
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
              FREE TRAIL NOW
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
    
      <div className="absolute bottom-16 left-16 w-16 h-16 bg-pink-300 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-32 w-8 h-8 bg-purple-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-32 right-8 w-12 h-12 bg-yellow-400 rotate-45 opacity-60"></div>
    </div>
  );
};

export default HeroSection;