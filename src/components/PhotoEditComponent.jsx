
export default function PhotoditComponent() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute top-6 -left-20 w-44 h-44 bg-red-500 rounded-full flex items-center justify-center p-5 z-10">
                <div className="text-center text-white">
                  <p className="text-lg font-semibold leading-tight">
                    Starting at<br />
                    25¢ <span className="text-sm font-normal">/ per image</span>
                  </p>
                </div>
              </div>
              
              <img 
                src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-thumb.7b0621e0.png&w=1920&q=75"
                alt="Photo editing interface on mobile"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-red-500 text-sm font-medium tracking-wide uppercase mb-4">
                ABOUT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Edit Your Photo In Seconds With Photodit
              </h2>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Image Editing Services For Ecommerce Businesses And Pros. From Product 
                Photographers To Amazon Sellers To Global Brands.
              </p>
              
              <p className="text-lg leading-relaxed">
                Because A Quick Product Shoot Can Easily Turn Into A Week Or More Of Editing 
                And Formatting Your Images. Let Us Look After The Edits, So You Can Get Back To 
                The Work That Needs You.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                KNOW MORE
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}