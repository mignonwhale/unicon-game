"use client";

import Link from "next/link";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    {path: '/', screen: '홈'},
    {path: '/overview', screen: '행사개요'},
    {path: '/exibition', screen: '전시회'},
    {path: '/participants', screen: '참가업체'},
    {path: '/contact', screen: '문의'}]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#2d2e5f] border-b border-[#3d3e6f] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <AnimatedLogo/>

        {/* 데스크톱 네비게이션 메뉴 */}
        <nav className="hidden md:flex space-x-8">
          {menu.map((item, index) => {
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
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#242550] border-t border-[#3d3e6f]">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {menu.map((item, index) => {
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