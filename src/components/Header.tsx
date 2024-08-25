import { ArrowRight, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Top Banner */}
      <div className="flex justify-center items-center bg-yellow-300 py-2 px-4 text-center group relative cursor-pointer">
        <span className="font-medium underline transition-all duration-300 group-hover:text-blue-600 inline-block">
          We Have Been Working On Several Initiatives During The Jajarkot-Rukum
          Earthquake Response 2023. Check Them Out
        </span>
        <span className="inline-block transition-all duration-200 w-0 overflow-hidden group-hover:w-6 align-middle text-blue-600">
          <span
            className=" transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 inline-block align-middle"
            style={{ textDecoration: "none" }}
          >
            <ArrowRight size={20} strokeWidth={3} />
          </span>
        </span>
      </div>

      {/* Navigation */}
      <nav className=" bg-gray-50">
        <div className="lg:w-[1070px] xl:w-[1270px] max-lg:w-4/5 mx-auto flex items-center justify-between mt-2">
          <a href="/" className="text-2xl font-bold flex items-center">
            <img src="/logo.png" alt="naxa" width={70} />
          </a>
          {/* <div className="flex w-3/5 justify-between"> */}
            <div className="hidden md:flex items-center justify-around lg:w-[721.662px]  md:h-[55.200px]  space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Services
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  Portfolio
                  <ChevronDown className="ml-1 group-hover:hidden w-3 h-3" />
                  <ChevronUp className="ml-1 hidden group-hover:block w-3 h-3" />
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 z-10">
                  <div className="absolute top-0 h-2 left-0 right-0 -translate-y-full"></div>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-sm text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    General
                  </a>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-sm text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    International
                  </a>
                </div>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  Company
                  <ChevronDown className="ml-1 group-hover:hidden w-3 h-3" />
                  <ChevronUp className="ml-1 hidden group-hover:block w-3 h-3" />
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 z-10">
                  <div className="absolute top-0 h-2 left-0 right-0 -translate-y-full"></div>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img
                      src="/about.svg"
                      alt="About Us"
                      className="w-8 h-8 mr-3"
                    />
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img src="/team.svg" alt="Team" className="w-8 h-8 mr-3" />
                    Team
                  </a>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img
                      src="/work.png"
                      alt="Work with Us"
                      className="w-8 h-8 mr-3"
                    />
                    Work with Us
                  </a>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img
                      src="/award.svg"
                      alt="Awards and Achievements"
                      className="w-8 h-8 mr-3"
                    />
                    Awards and Achievements
                  </a>
                </div>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                GeoAI
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  Events & Media
                  <ChevronDown className="ml-1 group-hover:hidden w-3 h-3" />
                  <ChevronUp className="ml-1 hidden group-hover:block w-3 h-3" />
                </a>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 z-10">
                  <div className="absolute top-0 h-2 left-0 right-0 -translate-y-full"></div>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img
                      src="/Event.svg"
                      alt="Events"
                      className="w-8 h-8 mr-3"
                    />
                    Events
                  </a>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img
                      src="/media.svg"
                      alt="Media"
                      className="w-8 h-8 mr-3"
                    />
                    Media
                  </a>
                  <a
                    href="#"
                    className="block px-[24px] py-[10px] text-[1rem] font-[400] text-gray-700 hover:bg-yellow-500 lg:w-[335px] lg:h-[47px] lg:flex lg:items-center"
                  >
                    <img
                      src="/publication.svg"
                      alt="Publication"
                      className="w-8 h-8 mr-3"
                    />
                    Publication
                  </a>
                </div>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Blogs
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex justify-center items-center bg-yellow-400 w-40 h-10 text-black px-6 py-2 group relative cursor-pointer hover:bg-yellow-500">
                <span className="font-medium transition-all duration-300 group-hover:text-blue-600 inline-block">
                  Let's talk
                </span>
                <span className="inline-block transition-all duration-200 w-0 overflow-hidden group-hover:w-6 align-middle text-blue-600">
                  <span
                    className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 inline-block align-middle"
                    style={{ textDecoration: "none" }}
                  >
                    <ArrowRight size={20} strokeWidth={3} />
                  </span>
                </span>
              </div>
              <Menu
                className="w-6 h-6 md:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          {/* </div> */}
        </div>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-3/5 h-full z-50 overflow-hidden transform transition-transform duration-500 ease-in-out translate-x-0 animate-slide-in-right bg-gradient-to-b from-yellow-500 to-yellow-200">
            <div className="flex justify-between items-center p-6 border-b border-yellow-400">
              <img src="/logo.png" alt="naxa" className="w-24" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-blue-600"
              >
                <X size={32} strokeWidth={3} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-full">
              <a
                href="#"
                className="block py-4 text-2xl font-medium text-black"
              >
                Services
              </a>
              <div className="py-4 border-t border-yellow-400">
                <button 
                  className="flex justify-between items-center w-full text-2xl font-medium text-black"
                  onClick={(e) => {
                    const currentDropdown = e.currentTarget.nextElementSibling;
                    const allDropdowns = document.querySelectorAll('.dropdown-content');
                    allDropdowns.forEach(dropdown => {
                      if (dropdown !== currentDropdown) {
                        dropdown.classList.add('hidden');
                        dropdown.previousElementSibling?.querySelector('svg')?.classList.remove('rotate-180');
                      }
                    });
                    currentDropdown?.classList.toggle('hidden');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}
                >
                  Portfolio
                  <ChevronDown
                    size={28}
                    className="text-blue-600 transition-transform duration-300"
                    strokeWidth={3}
                  />
                </button>
                <div className="hidden dropdown-content bg-white shadow-md mt-2 z-10 w-full">
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/Event.svg" alt="General" className="w-8 h-8 mr-3" />
                    General
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/media.svg" alt="International" className="w-8 h-8 mr-3" />
                    International
                  </a>
                </div>
              </div>
              <div className="py-4 border-t border-yellow-400">
                <button 
                  className="flex justify-between items-center w-full text-2xl font-medium text-black"
                  onClick={(e) => {
                    const currentDropdown = e.currentTarget.nextElementSibling;
                    const allDropdowns = document.querySelectorAll('.dropdown-content');
                    allDropdowns.forEach(dropdown => {
                      if (dropdown !== currentDropdown) {
                        dropdown.classList.add('hidden');
                        dropdown.previousElementSibling?.querySelector('svg')?.classList.remove('rotate-180');
                      }
                    });
                    currentDropdown?.classList.toggle('hidden');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}
                >
                  Company
                  <ChevronDown
                    size={28}
                    className="text-blue-600 transition-transform duration-300"
                    strokeWidth={3}
                  />
                </button>
                <div className="hidden dropdown-content bg-white shadow-md mt-2 z-10 w-full">
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/about.svg" alt="About Us" className="w-8 h-8 mr-3" />
                    About Us
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/team.svg" alt="Team" className="w-8 h-8 mr-3" />
                    Team
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/work.png" alt="Work with Us" className="w-8 h-8 mr-3" />
                    Work with Us
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/award.svg" alt="Awards and Achievements" className="w-8 h-8 mr-3" />
                    Awards and Achievements
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="block py-4 text-2xl font-medium text-black border-t border-yellow-400"
              >
                GeoAI
              </a>
              <div className="py-4 border-t border-yellow-400">
                <button 
                  className="flex justify-between items-center w-full text-2xl font-medium text-black"
                  onClick={(e) => {
                    const currentDropdown = e.currentTarget.nextElementSibling;
                    const allDropdowns = document.querySelectorAll('.dropdown-content');
                    allDropdowns.forEach(dropdown => {
                      if (dropdown !== currentDropdown) {
                        dropdown.classList.add('hidden');
                        dropdown.previousElementSibling?.querySelector('svg')?.classList.remove('rotate-180');
                      }
                    });
                    currentDropdown?.classList.toggle('hidden');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}
                >
                  Events & Media
                  <ChevronDown
                    size={28}
                    className="text-blue-600 transition-transform duration-300"
                    strokeWidth={3}
                  />
                </button>
                <div className="hidden dropdown-content bg-white shadow-md mt-2 z-10 w-full">
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/Event.svg" alt="Events" className="w-8 h-8 mr-3" />
                    Events
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img src="/media.svg" alt="Media" className="w-8 h-8 mr-3" />
                    Media
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 text-lg font-normal text-gray-700 hover:bg-yellow-500 flex items-center"
                  >
                    <img
                      src="/publication.svg"
                      alt="Publication"
                      className="w-8 h-8 mr-3"
                    />
                    Publication
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="block py-4 text-2xl font-medium text-black border-t border-yellow-400"
              >
                Blogs
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
