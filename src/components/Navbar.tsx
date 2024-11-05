import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold">Go For Gold</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-500">Home</a>
            <a href="#coaches" className="text-gray-700 hover:text-yellow-500">Coaches</a>
            <a href="#schedule" className="text-gray-700 hover:text-yellow-500">Schedule</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500">Contact</a>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
              Register Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">Home</a>
            <a href="#coaches" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">Coaches</a>
            <a href="#schedule" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">Schedule</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">Contact</a>
            <button className="w-full text-center bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}