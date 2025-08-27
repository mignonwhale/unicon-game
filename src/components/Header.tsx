"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menu = [
    {path: '/', screen: '홈'},
    {path: '/', screen: '행사개요'},
    {path: '/', screen: '전시회'},
    {path: '/participants', screen: '참가업체'},
    {path: '/', screen: '문의'}]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="bg-[#2d2e5f] border-b border-[#3d3e6f] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full">
              <Link href="/">
                <img
                    src={'/images/logo.png'}
                    alt="게임전시회 로고"
                />
              </Link>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-black uppercase tracking-wide">GAME EXPO 2025</h1>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider">게임의 새로운 세계</p>
            </div>
          </div>

          {/* 데스크톱 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            {menu.map((item, index) => {
                if(item.screen !== '홈' && item.screen !== '참가업체') {
                  return (
                    <button 
                      key={index}
                      onClick={() => alert('준비중입니다.')}
                      className="text-white hover:text-gold cursor-pointer transition-colors duration-200"
                    >
                      {item.screen}
                    </button>
                  );
                }
                return (
                  <Link 
                    key={index}
                    href={item.path}
                    className="text-white hover:text-gold transition-colors duration-200"
                  >
                    {item.screen}
                  </Link>
                )
            })}
          </nav>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold transition-colors duration-200"
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#242550] border-t border-[#3d3e6f]">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {menu.map((item, index) => {
                  if(item.screen !== '홈' && item.screen !== '참가업체') {
                    return (
                      <button 
                        key={index}
                        onClick={() => {
                          alert('준비중입니다.');
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left text-white hover:text-gold cursor-pointer transition-colors duration-200 py-2"
                      >
                        {item.screen}
                      </button>
                    );
                  }
                  return (
                    <Link 
                      key={index}
                      href={item.path}
                      className="block text-white hover:text-gold transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.screen}
                    </Link>
                  )
              })}
            </nav>
          </div>
        )}

      </header>
  );
}