
export default function HowItWorks() {
  return (
    <div 
      className="px-4 rounded-lg"
      style={{
        padding: '65px',
        paddingBottom: '0 !important',
        backgroundImage: 'linear-gradient(180deg, #ffeded, rgba(242, 240, 254, 0))',
        borderRadius: '10px'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4">
                HOW WE WORKS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                How It Works
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-500 rounded-full text-lg font-bold">
                    01
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Request a quote for the images you need edited — we'll get back to you within 45 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 rounded-full text-lg font-bold">
                    02
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Request a quote for the images you need edited — we'll get back to you within 45 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full text-lg font-bold">
                    03
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Request a quote for the images you need edited — we'll get back to you within 45 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-thumb.2b600b01.png&w=1920&q=75"
                alt="Photo editing workspace"
                className="w-full h-auto rounded-lg "
              />
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}