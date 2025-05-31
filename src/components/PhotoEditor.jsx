import { ArrowRight, ArrowUp, Clock, Image, Play } from 'lucide-react';

const PhotoEditorComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
     

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-20">
          
          <div className="flex-1 relative">
            <div className="relative max-w-lg mx-auto">
         
              <div className="ml-auto mt-20">
                <div className=" rounded-2xl p-4 border border-white/20">
                 
                  <img 
                    src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbefore.bf1cca4a.png&w=828&q=75" 
                    alt="After editing"
                    className="w-[385px] h-[385px] object-cover rounded-xl brightness-110 contrast-110"
                  />
                </div>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                <div className="relative">
                  <img 
                    src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb.08d62061.png&w=1080&q=75" 
                    alt="Video thumbnail"
                    className="w-64 h-64 object-cover rounded-full border-4 border-white/20"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          <div className="flex-1 text-white">
            <div className="max-w-xl">
              
              <div className="mb-8">
                <div className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4">
                  WHY CHOOSE US
                </div>
                <h2 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Why We Are Special
                </h2>
              </div>

              <div className="space-y-6 mb-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automatic & Quick Results</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Clipping Path Could Be A Process By Which Photo Editor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                    <ArrowUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Increase Resolution</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Clipping Path Could Be A Process By Which Photo Editor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Retain Details</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Clipping Path Could Be A Process By Which Photo Editor
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button className="group flex items-center gap-3 text-white font-semibold hover:text-gray-200 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  START FREE TRIAL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default PhotoEditorComponent;