'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
export default function ProPlan() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-800/30 to-transparent opacity-50 backdrop-blur-[2px]"></div>

      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto mt-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-full px-4 py-3 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
          Najma Host
        </h1>
        <div className="flex space-x-4 items-center">
          <Link href="https://najma.cloud" className="modern-button group">
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </Link>

          <div className="relative">
            <button
              className="modern-button group flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="relative z-10">Contact Us</span>
              <ChevronDown className="ml-2 relative z-10" size={16} />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="https://discord.gg/njma" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Discord
                  </Link>
                  <Link href="https://discord.gg/njma" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Instagram
                  </Link>
                  <Link href="https://discord.gg/njma" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    X - Twitter
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="z-10 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 max-w-5xl mx-auto bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 my-20">
{/* Image Section */}
<div className="w-full md:w-1/2 flex items-center justify-center">
  <img
    src="/NJ1.png"
    alt="Najma Logo"
    width="300"
    height="300"
    className="rounded-lg shadow-md"
  />
</div>


        {/* Info Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Enterprise Plan Details</h2>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li>As many GiB RAM You want</li>
            <li>As Many CPU Cores You Want</li>
            <li>As Many 20 GiB Storage You Want</li>
            <li>24/7 Support</li>
          </ul>


          {/* Button */}
          <Link href="https://discord.gg/njma" passHref>
            <button className="modern-button mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-gray-600/50 to-gray-800/50 text-white hover:bg-gray-700 transition duration-300">
              Contact Us To Make a Deal
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 bg-opacity-50 backdrop-blur-md py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
          <img src="/Servers.png" alt="Najma Logo" width="100" height="100" />
            <span className="text-gray-200 font-bold text-lg">Najma</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Buying Agreement
            </a>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://discord.gg/njma" aria-label="Discord" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaDiscord size={24} />
              </a>
              <a href="https://discord.gg/njma" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://discord.gg/njma" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

        :root {
          --font-inter: 'Inter', sans-serif;
        }

        .modern-button {
          position: relative;
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 500;
          color: #e0e0e0;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          border-radius: 30px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
        }

        .modern-button:hover {
          transform: translateY(-2px);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}
