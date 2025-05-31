import { useState } from 'react';

const BackgroundRemovalShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('People');
  const [sliderPosition, setSliderPosition] = useState(50);

  const categories = [
    { name: 'People', icon: '👥' },
    { name: 'Products', icon: '📦' },
    { name: 'Animals', icon: '🐾' },
    { name: 'Cars', icon: '🚗' },
    { name: 'Graphics', icon: '🎨' }
  ];

  const images = {
    People: {
      before: 'https://photodit-react.vercel.app/images/after/one-after.png',
      after: 'https://photodit-react.vercel.app/images/after/one-after.png'
    },
    Products: {
      before: 'https://photodit-react.vercel.app/images/after/one-after.png',
      after: 'https://photodit-react.vercel.app/images/after/one-after.png'
    },
    Animals: {
      before: 'https://photodit-react.vercel.app/images/after/two-after.png',
      after: 'https://photodit-react.vercel.app/images/after/two-after.png'
    },
    Cars: {
      before: 'https://photodit-react.vercel.app/images/after/one-after.png',
      after: 'https://photodit-react.vercel.app/images/after/one-after.png'
    },
    Graphics: {
      before: 'https://photodit-react.vercel.app/images/after/two-after.png',
      after: 'https://photodit-react.vercel.app/images/after/two-after.png'
    }
  };

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSliderPosition(50); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-red-500 text-sm font-medium uppercase tracking-wide mb-2">
            STUNNING QUALITY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            We've Removed These Tricky Backgrounds
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.name
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative w-full h-96 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={images[activeCategory].before}
                alt="Before background removal"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
                Before
              </div>
            </div>

            <div 
              className="absolute inset-0 transition-all duration-200 ease-out"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img
                src={images[activeCategory].after}
                alt="After background removal"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
                After
              </div>
            </div>

            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 transition-all duration-200 ease-out"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-blue-500 flex items-center justify-center cursor-grab active:cursor-grabbing">
                <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing z-20"
            />
          </div>

       
        </div>

       
      </div>
    </div>
  );
};

export default BackgroundRemovalShowcase;