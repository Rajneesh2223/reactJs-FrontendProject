import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export default function PhotoditFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-white font-semibold text-lg">Photodit</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              We Isolate Images From Their Backgrounds Using Deep Vision Masks. We Do It 100% Hand-Made. Clipping Factory Isolates Images From Their Backgrounds.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  Clipping Path
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  Background Remove
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  Image Masking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  Image Retouch
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Meet With Photodit</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Vietnam Office: #5 Nguyentrai Street,</p>
                  <p>Vinh City, Vietnam</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:Company.Info@Mail.Com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Company.Info@Mail.Com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+17327980976" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +1 (732) 798-0976
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-500 to-green-500"></div>

      <div className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-1 text-xs text-gray-500">
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">›</span>
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">›</span>
                Terms & Conditions
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">›</span>
                Free Trial
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">›</span>
                Payment
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1">›</span>
                Contact Us
              </a>
            </div>

            <div className="text-xs text-gray-500">
              Copyright © Photodit All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}