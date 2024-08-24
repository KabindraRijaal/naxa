import { Menu } from "lucide-react";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Top Banner */}
      <div className="bg-yellow-400 py-2 px-4 text-center text-sm underline">
        We Have Been Working On Several Initiatives During The Jajarkot-Rukum
        Earthquake Response 2023. Check Them Out
      </div>

      {/* Navigation */}
      <nav className=" bg-gray-50">
        <div className="max-w-[1070px] mx-auto flex items-center justify-between mt-2">
          <a href="/" className="text-2xl font-bold flex items-center">
            <img src="/logo.png" alt="naxa" width={70} />
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Portfolio
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Company
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              GeoAI
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Events & Media
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Blogs
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded">
              Let's talk
            </button>
            <Menu
              className="w-6 h-6 md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Services
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Portfolio
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Company
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              GeoAI
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Events & Media
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Blogs
            </a>
          </div>
        )}
      </nav>      
    </div>
  );
}

export default Header;
