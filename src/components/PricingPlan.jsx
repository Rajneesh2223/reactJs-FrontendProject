
const PricingPlan = () => {
  const services = [
    {
      id: 1,
      title: "Clipping Path",
      description: "Carefully hand-drawn clipping paths for crisp, clean photo",
      discount: "50% OFF",
      price: "$0.39",
   
    },
    {
      id: 2,
      title: "Background Removal",
      description: "Carefully hand-drawn clipping paths for crisp, clean photo",
      discount: "50% OFF",
      price: "$0.39",
      
    },
    {
      id: 3,
      title: "Image Masking",
      description: "Carefully hand-drawn clipping paths for crisp, clean photo",
      discount: "50% OFF",
      price: "$0.39",
      
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6  min-h-screen">
      <div className="text-center mb-12">
        <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-4">
          ATTRACTIVE PRICING PLAN
        </p>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Stress Less With Simple Pricing And Pixel<br />
          Perfect Photo Edits
        </h1>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:bg-blue-600 ${service.bgColor} bg-gray-200/40`}
          >
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-6">
                <div className="relative ">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <img
                      src="https://photodit-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.7fe6f623.png&w=256&q=75"
                      alt={service.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-black/90 text-base group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="relative">
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {service.discount}
                    <div className="text-xs text-gray-300 mt-1">On Bulk Order</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-white/80 text-sm mb-1 group-hover:text-white/80 transition-colors duration-300">
                    Starting At
                  </div>
                  <div className="text-white text-2xl font-bold group-hover:text-white transition-colors duration-300">
                    {service.price} <span className="text-lg font-normal">Only</span>
                  </div>
                  <div className="text-white/80 text-sm group-hover:text-white/80 transition-colors duration-300">
                    Per Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;