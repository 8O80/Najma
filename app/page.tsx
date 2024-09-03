'use client'

import React, { useState, useEffect } from 'react'
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
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([])
  const [showMessage, setShowMessage] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [showLanguages, setShowLanguages] = useState(false)

  useEffect(() => {
    const createStar = () => {
      return {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random()
      }
    }

    const interval = setInterval(() => {
      setStars(prevStars => {
        const newStars = prevStars.filter(() => Math.random() > 0.1).map(star => ({
          ...star,
          x: star.x + (Math.random() - 0.5) * 0.1,
          y: star.y + (Math.random() - 0.5) * 0.1,
          opacity: Math.max(0, Math.min(1, star.opacity + (Math.random() - 0.5) * 0.1))
        }))
        while (newStars.length < 100) {
          newStars.push(createStar())
        }
        return newStars
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setShowLanguages(false)
  }

  return (
    <div className="h-screen w-full overflow-hidden relative flex flex-col items-center justify-center bg-black">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
      <div className="loading-container z-10 mb-4">
        <div className="loading-text text-white text-7xl md:text-8xl font-mono">
          <span className="bracket">&lt;</span>
          <span className="slash">/</span>
          <span className="bracket">&gt;</span>
        </div>
      </div>
      <div className="coming-soon text-white text-2xl md:text-3xl font-light tracking-[0.3em] uppercase z-10 mb-8">
        Coming Soon
      </div>
      <div className="button-container flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 z-10 w-full px-4 md:px-0">
        <a href="https://buy.najma.cloud" target="_blank" rel="noopener noreferrer" className="modern-button">
          <span>Billing</span>
          <CreditCard className="ml-2" size={18} />
          <div className="star-background"></div>
        </a>
        <a href="https://panel.najma.cloud.com" target="_blank" rel="noopener noreferrer" className="modern-button">
          <span>Panel</span>
          <LayoutDashboard className="ml-2" size={18} />
          <div className="star-background"></div>
        </a>
        <a href="https://discord.gg/njma" target="_blank" rel="noopener noreferrer" className="modern-button">
          <span>Discord</span>
          <MessageCircle className="ml-2" size={18} />
          <div className="star-background"></div>
        </a>
        <a href="https://github.com/NajmaCloud" target="_blank" rel="noopener noreferrer" className="modern-button">
          <span>Github</span>
          <Github className="ml-2" size={18} />
          <div className="star-background"></div>
        </a>
      </div>

      <button
        onClick={() => setShowMessage(true)}
        className="absolute bottom-6 right-6 w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 z-20"
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
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Close information"
            >
              <X size={24} />
            </button>
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="absolute top-4 right-14 text-white hover:text-gray-300 transition-colors duration-300"
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
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-white rounded-md transition-colors duration-200"
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            )}
         <h2 className="text-white text-3xl mb-6 font-mono">
  {messages[currentLanguage].title}
</h2>
<p className="text-white mb-4 leading-relaxed">
  {messages[currentLanguage].content1}
</p>
<p className="text-white leading-relaxed">
  {messages[currentLanguage].content2}
</p>


          </div>
        </div>
      )}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

        .loading-container {
          position: relative;
        }

        .loading-text {
          display: inline-block;
          font-family: 'Space Mono', monospace;
        }

        .bracket {
          display: inline-block;
          animation: pulse 3s infinite;
        }

        .slash {
          display: inline-block;
          animation: glow 3s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff;
            transform: translateY(0);
          }
          50% {
            text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff;
            transform: translateY(-5px);
          }
        }

        .coming-soon {
          font-family: 'Space Mono', monospace;
          opacity: 0;
          animation: fade 3s infinite alternate;
        }

        @keyframes fade {
          0% {
            opacity: 0;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        .modern-button {
          position: relative;
          padding: 12px 24px;
          font-family: 'Space Mono', monospace;
          font-size: 16px;
          color: white;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 30px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 250px;
        }

        .modern-button span {
          position: relative;
          z-index: 1;
        }

        .modern-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .modern-button:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        .star-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .modern-button:hover .star-background {
          opacity: 1;
          animation: movingStars 20s linear infinite;
        }

        @keyframes movingStars {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 400px 400px;
          }
        }

        .message-box {
          animation: fadeIn 0.3s ease-out;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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

        @media (max-width: 768px) {
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
