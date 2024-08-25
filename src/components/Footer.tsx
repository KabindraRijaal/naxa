import {
  Facebook,
  FacebookIcon,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
import Banner from "./Banner";

function Footer() {
  return (
    <div className="bg-gray-100">
      <footer className="py-10 ">
        <div className="mt-32 container mx-auto max-w-[1070px] px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 flex-1 md:max-w-[50%]">
            <img src="logo.png" alt="Naxa Logo" className="h-10 mb-4" />
            <p className="text-gray-700">Naxa Pvt Ltd.</p>
            <p className="text-gray-700">
              Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal
            </p>
            <p className="text-gray-700">14516543</p>
            <a href="mailto:info@naxa.com.np" className="text-blue-500">
              info@naxa.com.np
            </a>
          </div>
          <div className="flex-1 md:max-w-[25%]">
            <h3 className="text-gray-900 font-semibold">Services</h3>
            <h3 className="text-gray-900 font-semibold mt-4">Portfolio</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-700">
                  General
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700">
                  International
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 md:max-w-[25%]">
            <div>
              <h3 className="text-gray-900 font-semibold">Company</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-700">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Work with us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Awards & Achievements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Media Kit
                  </a>
                </li>
              </ul>
              <h3 className="text-gray-900 font-semibold mt-4">
                Events & Media
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-700">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Publications
                  </a>
                </li>
              </ul>
              <h3 className="text-gray-900 font-semibold mt-4">Blog</h3>
              <h3 className="text-gray-900 font-semibold mt-4">Contact</h3>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1070px] flex flex-row justify-between items-center">
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-yellow-500">
              <FacebookIcon />
            </a>
            <a href="#" className="text-yellow-500">
              <Twitter />
            </a>
            <a href="#" className="text-yellow-500">
              <Linkedin />
            </a>
            <a href="#" className="text-yellow-500">
              <Instagram />
            </a>
          </div>
          <div className="text-right text-gray-500">
            © NAXA 2023. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
