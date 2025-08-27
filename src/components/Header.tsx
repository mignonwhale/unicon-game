"use client";

import Link from "next/link";

export default function Header() {
  const menu = [
    {path: '/', screen: '홈'},
    {path: '/', screen: '행사개요'},
    {path: '/', screen: '전시회'},
    {path: '/participants', screen: '참가업체'},
    {path: '/', screen: '문의'}]

  return (
      <header className="bg-[#2d2e5f] border-b border-[#3d3e6f] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full">
              <img
                  src={'/images/logo.png'}
                  alt="게임전시회 로고"
              />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-black uppercase tracking-wide">GAME EXPO 2025</h1>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider">게임의 새로운 세계</p>
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            {menu.map((item, index) => {
                if(item.screen !== '홈' && item.screen !== '참가업체') {
                  return (
                    <button 
                      key={index}
                      onClick={() => alert('준비중입니다.')}
                      className="text-white hover:text-gold cursor-pointer"
                    >
                      {item.screen}
                    </button>
                  );
                }
                return (
                  <Link 
                    key={index}
                    href={item.path}
                    className="text-white hover:text-gold"
                  >
                    {item.screen}
                  </Link>
                )
            })}
          </nav>
        </div>

      </header>
  );
}