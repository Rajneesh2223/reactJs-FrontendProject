import { useState } from 'react';

const ClippingPathSlider = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Basic Clipping Path",
      image: "https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75",
      bgColor: "bg-sky-400",
      description: "Simple product isolation"
    },
    {
      id: 2,
      title: "Complex Clipping Path",
      image: "https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75",
      bgColor: "bg-blue-600",
      description: "Detailed edge cutting"
    },
    {
      id: 3,
      title: "Multi Clipping Path",
      image: "https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75",
      bgColor: "bg-orange-500",
      description: "Multiple object isolation"
    },
    {
      id: 4,
      title: "Hair Clipping Path",
      image: "https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75",
      bgColor: "bg-yellow-400",
      description: "Precise hair cutting"
    },
    {
      id: 5,
      title: "Shadow Creation",
      image: "https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75",
      bgColor: "bg-red-400",
      description: "Natural shadow effects"
    },
    {
      id: 6,
      title: "Background Removal",
      image: "https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75",
      bgColor: "bg-purple-500",
      description: "Clean background removal"
    }
  ];

  // Duplicate the services array to create seamless infinite scroll
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="">
        <div className=" mb-16">
          <div className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4">
            PHOTODIT'S SERVICE
          </div>
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight">
            Clipping Path Services For<br />
            Professional Images
          </h1>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-80 mx-4"
                onMouseEnter={() => setHoveredCard(`${service.id}-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative h-96 rounded-3xl overflow-hidden cursor-pointer
                  transform transition-all duration-500 ease-out
                  ${service.bgColor}
                  ${hoveredCard === `${service.id}-${index}` ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'}
                `}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border border-white"></div>
                  </div>

                  <div className="relative h-full p-8 flex flex-col justify-center items-center">
                   
                    <div className={`
                      absolute top-8 left-0 right-0 text-center
                      transform transition-all duration-300 ease-out
                      ${hoveredCard === `${service.id}-${index}` 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4'}
                    `}>
                      <h3 className="text-white text-2xl font-bold">
                        Clipping Path Services
                      </h3>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <img 
                          src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslide-four.e46838d7.png&w=384&q=75" 
                          alt={service.title}
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>

                    <div className={`
                      absolute bottom-20 left-0 right-0 text-center
                      transform transition-all duration-300 ease-out
                      ${hoveredCard === `${service.id}-${index}` 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'}
                    `}>
                      <h4 className="text-white text-xl font-semibold mb-2">
                        {service.title}
                      </h4>
                    </div>



                    <div className={`
                      absolute bottom-4 left-1/2 transform -translate-x-1/2
                      transition-all duration-300 ease-out
                      ${hoveredCard === `${service.id}-${index}` 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'}
                    `}>
                      <div className="bg-black px-4 py-2 rounded-lg">
                        <p className="text-white text-sm">
                          STARTING AT <span className="text-red-500 font-bold">$0.39 ONLY</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClippingPathSlider;