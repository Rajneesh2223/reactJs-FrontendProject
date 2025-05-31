import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesDropdown = [
    'Web Design',
    'Photo Editing',
    'Graphic Design',
    'Digital Marketing',
    'Branding'
  ];

  const pagesDropdown = [
    'Portfolio',
    'Team',
    'Testimonials',
    'FAQ',
    'Privacy Policy'
  ];

  const blogDropdown = [
    'Recent Posts',
    'Categories',
    'Archives',
    'Featured'
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">#</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Photodit</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                HOME
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              ABOUT US
            </a>

            <div className="relative group">
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                SERVICES
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {servicesDropdown.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                PAGES
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {pagesDropdown.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                BLOG
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {blogDropdown.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              CONTACT
            </a>

            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              GET A PROPOSAL
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              HOME
            </a>

            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              ABOUT US
            </a>

            <div className="relative">
              <a href="#" className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50">
                SERVICES
              </a>
              <div className="pl-4">
                {servicesDropdown.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                PAGES
              </a>
              <div className="pl-4">
                {pagesDropdown.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                BLOG
              </a>
              <div className="pl-4">
                {blogDropdown.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              CONTACT
            </a>

            <div className="px-3 py-2">
              <a
                href="#"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                GET A PROPOSAL
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;