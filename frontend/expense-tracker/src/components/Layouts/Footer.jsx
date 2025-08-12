import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 FinancePal. Built by Abeih Hamani
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SuperAbeih99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abeih-hamani-809530336/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
