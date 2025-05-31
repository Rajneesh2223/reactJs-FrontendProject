import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); 

  const slides = [
    {
      id: 1,
      date: '21 JAN',
      title: 'Easy Tips On Creating An Online New Year\'s Vision Board',
      category: 'Shadow',
      image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
    },
    {
      id: 2,
      date: '21 JAN',
      title: 'Personal Touch That\'s Way More Heartfelt Than A Gift Shop',
      category: 'Shadow',
      image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
    },
    {
      id: 3,
      date: '21 JAN',
      title: 'Ower Of A Great Photo Backdrop — In Just A Few Steps',
      category: 'Shadow',
      image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
    }, 
     {
        id: 4,
        date: '21 JAN',
        title: 'Easy Tips On Creating An Online New Year\'s Vision Board',
        category: 'Shadow',
        image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
      },
      {
        id: 5,
        date: '21 JAN',
        title: 'Easy Tips On Creating An Online New Year\'s Vision Board',
        category: 'Shadow',
        image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
      },
      {
        id: 6,
        date: '21 JAN',
        title: 'Easy Tips On Creating An Online New Year\'s Vision Board',
        category: 'Shadow',
        image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
      },
      {
        id: 7,
        date: '21 JAN',
        title: 'Easy Tips On Creating An Online New Year\'s Vision Board',
        category: 'Shadow',
        image: 'https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.da8f8995.png&w=1080&q=75'
      },

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-red-500 text-sm font-medium mb-2">LATEST NEWS</p>
          <h1 className="text-4xl font-bold text-gray-900">News Form Photodit</h1>
        </div>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-1/3 flex-shrink-0 px-3">
              <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                index === currentSlide ? 'transform scale-105' : ''
              }`}>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-white rounded-lg px-3 py-2 text-center shadow-lg">
                    <div className={`text-2xl font-bold transition-colors duration-300 ${
                      index === currentSlide ? 'text-blue-500' : 'text-gray-900'
                    }`}>
                      {slide.date.split(' ')[0]}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${
                      index === currentSlide ? 'text-blue-500' : 'text-gray-600'
                    }`}>
                      {slide.date.split(' ')[1]}
                    </div>
                  </div>
                </div>

                <div className="aspect-[4/3] bg-gray-100">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {slide.category}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-4 leading-tight transition-colors duration-300 ${
                    index === currentSlide ? 'text-blue-900' : 'text-gray-900'
                  }`}>
                    {slide.title}
                  </h3>

                  <button className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;