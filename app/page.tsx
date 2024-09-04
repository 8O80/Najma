'use client'

import React, { useState } from 'react'
import { X, Globe, CreditCard, LayoutDashboard, MessageCircle, Github, Info } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'mx', name: 'Español (México)', flag: '🇲🇽' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
]

const messages = {
  en: {
    title: 'Welcome to Our Universe',
    content1: "We're crafting something extraordinary for you. Our team of cosmic developers is working tirelessly to bring you an out-of-this-world experience.",
    content2: 'Stay tuned and prepare for launch. The countdown has begun!',
  },
  ar: {
    title: 'مرحبًا بكم في عالمنا',
    content1: 'نحن نصنع شيئًا استثنائيًا من أجلك. يعمل فريقنا من المطورين الكونيين بلا كلل لتقديم تجربة خارج هذا العالم لك.',
    content2: 'ترقبوا وتأهبوا للإطلاق. لقد بدأ العد التنازلي!',
  },
  es: {
    title: 'Bienvenido a Nuestro Universo',
    content1: 'Estamos creando algo extraordinario para ti. Nuestro equipo de desarrolladores cósmicos está trabajando incansablemente para brindarte una experiencia fuera de este mundo.',
    content2: '¡Mantente atento y prepárate para el lanzamiento. La cuenta regresiva ha comenzado!',
  },
  mx: {
    title: 'Bienvenido a Nuestro Universo',
    content1: 'Estamos creando algo extraordinario para ti. Nuestro equipo de desarrolladores cósmicos está trabajando sin descanso para brindarte una experiencia fuera de este mundo.',
    content2: '¡Mantente atento y prepárate para el lanzamiento. La cuenta regresiva ha comenzado!',
  },
  pt: {
    title: 'Bem-vindo ao Nosso Universo',
    content1: 'Estamos a criar algo extraordinário para si. A nossa equipa de desenvolvedores cósmicos está a trabalhar incansavelmente para lhe proporcionar uma experiência fora deste mundo.',
    content2: 'Fique atento e prepare-se para o lançamento. A contagem regressiva começou!',
  },
  it: {
    title: 'Benvenuto nel Nostro Universo',
    content1: 'Stiamo creando qualcosa di straordinario per te. Il nostro team di sviluppatori cosmici sta lavorando instancabilmente per offrirti un\'esperienza fuori da questo mondo.',
    content2: 'Resta sintonizzato e preparati al lancio. Il conto alla rovescia è iniziato!',
  },
}

export default function Component() {
  const [showMessage, setShowMessage] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [showLanguages, setShowLanguages] = useState(false)

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setShowLanguages(false)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-800/30 to-transparent opacity-50 backdrop-blur-[2px]"></div>

      <div className="z-10 flex flex-col items-center space-y-12 px-4 sm:px-0">
        <div className="logo-container relative">
          <div className="text-9xl sm:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
            <span className="relative z-10">&lt;/&gt;</span>
          </div>
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-gray-400/20 via-gray-600/20 to-gray-800/20 rounded-full"></div>
        </div>
        <div className="coming-soon text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 text-4xl sm:text-5xl font-light tracking-[0.2em] uppercase">
          Coming Soon
        </div>
        <div className="button-container grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
          <a href="https://buy.najma.cloud" target="_blank" rel="noopener noreferrer" className="modern-button group">
            <span className="relative z-10">Billing</span>
            <CreditCard className="ml-2 relative z-10" size={18} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </a>
          <a href="https://panel.najma.cloud" target="_blank" rel="noopener noreferrer" className="modern-button group">
            <span className="relative z-10">Panel</span>
            <LayoutDashboard className="ml-2 relative z-10" size={18} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </a>
          <a href="https://discord.gg/njma" target="_blank" rel="noopener noreferrer" className="modern-button group">
            <span className="relative z-10">Discord</span>
            <MessageCircle className="ml-2 relative z-10" size={18} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </a>
          <a href="https://github.com/NajmaCloud" target="_blank" rel="noopener noreferrer" className="modern-button group">
            <span className="relative z-10">Github</span>
            <Github className="ml-2 relative z-10" size={18} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-full blur-md transition-all duration-300 group-hover:opacity-75"></div>
          </a>
        </div>
      </div>

      <button
        onClick={() => setShowMessage(true)}
        className="absolute bottom-6 right-6 w-14 h-14 bg-gray-700 bg-opacity-50 rounded-full flex items-center justify-center text-gray-300 hover:bg-opacity-75 transition-all duration-300 z-20"
        aria-label="Show more information"
      >
        <Info size={24} />
      </button>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setShowMessage(false)}></div>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl max-w-md w-full relative z-40 message-box">
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors duration-300"
              aria-label="Close information"
            >
              <X size={24} />
            </button>
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="absolute top-4 right-14 text-gray-400 hover:text-gray-200 transition-colors duration-300"
              aria-label="Change language"
            >
              <Globe size={24} />
            </button>
            {showLanguages && (
              <div className="absolute top-14 right-4 bg-gray-800 rounded-lg p-2 language-selector">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-gray-300 rounded-md transition-colors duration-200"
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            )}
            <h2 className="text-gray-200 text-3xl mb-6 font-light">
              {messages[currentLanguage as keyof typeof messages].title}
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {messages[currentLanguage as keyof typeof messages].content1}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {messages[currentLanguage as keyof typeof messages].content2}
            </p>
          </div>
        </div>
      )}
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
          width: 100%;
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

        .language-selector {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .button-container {
            width: 100%;
            max-width: 300px;
          }

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
      `}</style>
    </div>
  )
}
