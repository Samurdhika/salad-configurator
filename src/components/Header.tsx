import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fresseLogo from '../assets/fresse-logo.png';
import LoginModal from './LoginModal';
import { useAuthStore } from "../store/useAuthStore";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  
  const userName = useAuthStore((state) => state.userName);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="relative w-full h-32">

      <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
        <div className="bg-zinc-800 absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 flex items-center justify-between h-full px-8 text-white">
        
        <div className="flex items-start pt-4">
          <Link to="/" className="w-24 h-24 flex items-center justify-center -mt-2 overflow-hidden">
            <img 
              src={fresseLogo} 
              alt="Fresse Logo" 
              className="w-full h-full object-contain" 
            />
          </Link>
        </div>

        <h1 className="text-3xl font-black tracking-widest mt-6">
          BOWL-LASKURI
        </h1>
 
        <div className="relative">
          {!isMenuOpen && (
            <button onClick={() => setIsMenuOpen(true)} className="p-2">
              <div className="space-y-1.5 border border-zinc-500 p-2 rounded-md">
                <div className="w-7 h-1 bg-white"></div>
                <div className="w-7 h-1 bg-white"></div>
                <div className="w-7 h-1 bg-white"></div>
              </div>
            </button>
          )}

          {isMenuOpen && (
            <div className="bg-[#A2D135] text-black rounded-[3rem] pt-6 pb-12 px-6 flex flex-col items-center gap-8 min-w-[240px] shadow-2xl absolute -top-4 -right-4 z-50">
              
              <button onClick={() => setIsMenuOpen(false)} className="flex flex-row gap-1 mb-2">
                <div className="w-1 h-8 bg-white rounded-full"></div>
                <div className="w-1 h-8 bg-white rounded-full"></div>
                <div className="w-1 h-8 bg-white rounded-full"></div>
              </button>

              <div className="flex flex-col gap-8 w-full px-4">
                
               
                {userName ? (
                  <>
                    <div className="flex items-center gap-5 font-semibold text-s">
                      <UserIcon /> Hello, {userName}
                    </div>

                    <button
                      onClick={() => {
                        logout(); 
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-5 font-semibold text-s hover:opacity-70 transition-opacity"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-5 font-semibold text-s hover:opacity-70 transition-opacity"
                  >
                    <UserIcon /> Kirjaudu sisään
                  </button>
                )}

                <button className="flex items-center gap-5 font-semibold text-s hover:opacity-70 transition-opacity">
                  <BookmarkIcon /> <Link to="/community">Tallennetut reseptit</Link>
                </button>

                <button className="flex items-center gap-5 font-semibold text-s hover:opacity-70 transition-opacity">
                  <HelpIcon /> Ohjeet ja tuki
                </button>

              </div>
            </div>
          )}
        </div>
      </div>

      
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

    </header>
  );
}

const UserIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>
);

const HelpIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15.7 3 .08 4.03-.8 1.32-2.22 2.2-2-2.81 3.48-.19.42-.41.99-.41 1.98h-3.03c.01-1.26.15-1.63.47-2.05zM13 19h-3.03v-3h3v3z" />
  </svg>
);