'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Info, X as CloseIcon, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { FaDiscord, FaInstagram, FaTwitter, FaPalette, FaRocket, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useTranslations } from './translations';

export default function Component() {
  const [showMessage, setShowMessage] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [language, setLanguage] = useState('en');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const router = useRouter();
  const t = useTranslations(language);

  useEffect(() => {
    const timer = setTimeout(() => {
      const title = document.querySelector('.coming-soon');
      if (title) {
        title.classList.add('animate');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setShowLanguagePopup(false);
    localStorage.setItem('preferredLanguage', lang);
  };
  
  const faqData = [
    {
      question: "What services does Najma offer?",
      answer: "Najma offers a wide range of digital services including Discord Hosting , Web hosting , web design, app development, UI/UX design, and digital marketing solutions."
    },
    {
      question: "How long does it take to setup my server? 🚀",
      answer: "it take from 1-5 minutes to setup your server 🚀"
    },
    {
      question: "Do you offer ongoing support ?",
      answer: "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch."
    },
    {
      question: "What makes Najma different from other digital agencies?",
      answer: "Najma combines cutting-edge technology with creative design to deliver unique, high-performance digital solutions. Our focus on innovation and client collaboration sets us apart in the industry."
    }
  ];

  const handleSelectPlan = (plan: string) => {
    router.push(`/plans/${plan}`);
  };
  

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-800/30 to-transparent opacity-50 backdrop-blur-[2px]"></div>

      {/* Rounded Top Bar */}
      <nav className="w-full max-w-7xl mx-auto mt-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-full px-4 py-3 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">Najma</h1>
        <div className="flex space-x-4 items-center">
          <Link href="https://panel.najma.cloud" className="modern-button group">
            <span className="relative z-10">{t.home}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </Link>
          <Link href="https://buy.najma.cloud" className="modern-button group">
            <span className="relative z-10">{t.about}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </Link>
          <div className="relative">
            <button 
              className="modern-button group flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="relative z-10">{t.services}</span>
              <ChevronDown className="ml-2 relative z-10" size={16} />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="https://discord.gg/njma" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">{t.service1}</Link>
                  <Link href="https://discord.gg/njma" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">{t.service2}</Link>
                  <Link href="https://discord.gg/njma" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">{t.service3}</Link>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button 
              className="modern-button group"
              onClick={() => setShowLanguagePopup(!showLanguagePopup)}
            >
              <Globe size={20} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
            </button>
            {showLanguagePopup && (
              <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    role="menuitem"
                    onClick={() => handleLanguageChange('en')}
                  >
                    <Image src="/Flag_of_the_United_Kingdom.png" alt="English" width={24} height={24} className="mr-2" />
                    English
                  </button>
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    role="menuitem"
                    onClick={() => handleLanguageChange('ar')}
                  >
                    <Image src="/Flag_of_Saudi_Arabia.svg.png" alt="Arabic" width={24} height={24} className="mr-2" />
                    العربية
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      <main className="z-10 flex flex-col items-center space-y-12 px-4 sm:px-0 my-20">
        {/* Coming Soon Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-4 sm:px-0">
          {/* Logo */}
          <div className="logo-container">
            <Image src="/NJ1.png" alt="Najma Logo" width={150} height={150} />
          </div>

          {/* Login Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <h2 className="coming-soon text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 text-4xl sm:text-5xl font-light tracking-[0.2em] uppercase mb-4">
            Najma Host
            </h2>
            <p className="text-xl text-gray-400 mb-6">
            Najma: The future of digital innovation. We're crafting cutting-edge solutions to transform your digital experience. Get ready for a new era of technology.
            </p>
            <button className="modern-button group" >
              <span className="relative z-10">{t.loginDiscord}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
            </button>
          </div>
        </div>
      
        {/* Why Choose Us Section */}
        <section className="w-full max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">{t.whyChooseUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
   { icon: <FaPalette />, title: t.creativeDesigns, description: "Innovative and modern design solutions to make your brand stand out." },
   { icon: <FaRocket />, title: t.fastDelivery, description: "We ensure timely delivery of all projects with the highest quality." },
   { icon: <FaLightbulb />, title: t.innovativeIdeas, description: "Bringing fresh and unique ideas to help your business grow." },
   { icon: <FaUserFriends />, title: t.clientCollaboration, description: "Working closely with clients to bring their vision to life." },
 ].map((feature, index) => (
   <div key={index} className="flex items-center p-6 bg-gray-800 bg-opacity-50 rounded-xl backdrop-blur-md">
     <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full mr-4">
       {feature.icon} {/* Fixed icon usage */}
     </div>
     <div>
       <h3 className="text-xl font-semibold text-gray-200">{feature.title}</h3>
       <p className="text-gray-400">{feature.description}</p>
     </div>
   </div>
 ))}

          </div>
        </section>

        {/* Plans Section with Individual Plan Pages */}
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">{t.ourPlans}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: t.basicPlan, key: 'basic' },
              { name: t.proPlan, key: 'pro' },
              { name: t.enterprisePlan, key: 'enterprise' }
            ].map((plan, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">{plan.name}</h3>
                <ul className="text-gray-400 mb-6 text-left">
                  <li>• 4096 GiB RAM </li>
                  <li>• 8 CPU Cores </li>
                  <li>• 80 GiB Storage</li>
                  <li>• 24/7 Hour Support </li>
                </ul>
                <button className="modern-button group w-full" onClick={() => handleSelectPlan(plan.key)}>
                  <span className="relative z-10">{t.selectPlan} {plan.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="w-full max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">{t.faq}</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-xl font-semibold text-gray-200">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="p-6 pt-0 text-gray-400 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 bg-opacity-50 backdrop-blur-md py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
          <Image src="/NJ1.png" alt="Najma Logo" width={50} height={50} />
          <span className="text-gray-200 font-bold text-lg">Najma</span>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t.privacyPolicy}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{t.buyingAgreement}</a>
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

      {/* Info Button */}
      <button
        onClick={() => setShowMessage(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gray-700 bg-opacity-50 rounded-full flex items-center justify-center text-gray-300 hover:bg-opacity-75 transition-all duration-300 z-20"
        aria-label="Show more information"
      >
        <Info size={24} />
      </button>

      {/* Info Modal */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-30 p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setShowMessage(false)}></div>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl max-w-md w-full relative z-40 message-box">
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors duration-300"
              aria-label="Close information"
            >
              <CloseIcon size={24} />
            </button>
            <h2 className="text-gray-200 text-3xl mb-6 font-light">{t.welcomeToNajma}</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t.welcomeMessage1}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t.welcomeMessage2}
            </p>
          </div>
        </div>
      )}

      {/* Styles remain unchanged */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

        :root {
          --font-inter: 'Inter', sans-serif;
        }

        .logo-container {
          font-family: var(--font-inter);
          position: relative;
          display: inline-block;
        }

        .coming-soon {
          font-family: var(--font-inter);
          opacity: 0;
          animation: fadeIn 2s forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modern-button {
          position: relative;
          padding: 12px 24px;
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

        .message-box {
          font-family: var(--font-inter);
          animation: fadeIn 0.3s ease-out;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        @media (max-width: 640px) {
          .modern-button {
            font-size: 14px;
            padding: 10px 20px;
          }

          .message-box {
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}