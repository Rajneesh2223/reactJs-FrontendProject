import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency",
      author: "Delores Olivo",
      position: "Senior Technology Editor",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      text: "Amazing service and incredible results! Our online presence improved dramatically after working with this team. Highly recommend their expertise.",
      author: "John Smith",
      position: "Marketing Director",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      text: "Professional, efficient, and creative. They transformed our vision into reality and exceeded all our expectations. Outstanding work quality.",
      author: "Sarah Johnson",
      position: "CEO & Founder",
      bgColor: "bg-purple-500"
    },
    {
      id: 4,
      text: "The team delivered exceptional results within our timeline and budget. Their attention to detail and customer service is unmatched.",
      author: "Michael Chen",
      position: "Product Manager",
      bgColor: "bg-red-500"
    },
    {
      id: 5,
      text: "Working with them was a game-changer for our business. Their innovative approach and technical expertise helped us achieve our goals.",
      author: "Emma Davis",
      position: "Operations Director",
      bgColor: "bg-indigo-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className={`min-h-screen transition-all duration-500 ${currentTestimonial.bgColor}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between h-screen">
          <div className="w-1/2 text-white pr-12">
            <div className="mb-8">
              <p className="text-sm font-medium tracking-wider mb-4 opacity-90">
                CUSTOMER TESTIMONIAL
              </p>
              <h1 className="text-5xl font-bold leading-tight mb-8">
                They Love Us. You Will Too.
              </h1>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Because A Quick Product Shoot Can Easily Turn Into A Week Or More Of Editing And Formatting Your Images. Let Us Look After The Edits,
              </p>
            </div>

            <div className="flex gap-4 mb-12">
              <button
                onClick={prevSlide}
                className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="relative">
              <img
                src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmc.5a8699f6.png&w=640&q=75"
                alt="Headphones"
                className="w-64 h-auto"
              />
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-2xl h-[500px]">
              <div className="relative w-full h-full flex items-center">
                {testimonials.map((testimonial, index) => {
                  let position = index - currentSlide;
                  let translateX = position * 350; // Card width + gap
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 0;

                  if (position === 0) {
                    // Current card - front and center
                    scale = 1;
                    opacity = 1;
                    zIndex = 30;
                  } else if (position === 1) {
                    // Next card - partially visible on right
                    scale = 0.9;
                    opacity = 0.7;
                    zIndex = 20;
                    translateX = position * 320;
                  } else if (position === -1) {
                    // Previous card - partially visible on left
                    scale = 0.9;
                    opacity = 0.5;
                    zIndex = 10;
                    translateX = position * 350;
                  } else {
                    // Other cards - hidden
                    scale = 0.8;
                    opacity = 0;
                    zIndex = 0;
                  }

                  return (
                    <div
                      key={testimonial.id}
                      className="absolute bg-white rounded-2xl p-8 shadow-2xl w-80 h-96 transition-all duration-500 ease-in-out"
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                    >
                      <div className="mb-6">
                        <svg className="w-10 h-10 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                        <p className="text-gray-700 text-base leading-relaxed line-clamp-4">
                          "{testimonial.text}"
                        </p>
                      </div>

                      <div className="flex items-center mt-auto">
                        <img
                          src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor-three.c8d0b207.png&w=256&q=75"
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-base">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;