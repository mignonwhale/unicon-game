import Link from "next/link";

export default function Header() {
  const menu = ['홈', '행사개요', '전시회','참가업체', '문의']

  return (
      <header className="bg-navy shadow-lg sticky top-0 z-50">
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
            {menu.map((item, index) => (
              <Link href="/" className="text-white hover:text-gold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-purple/20" key={index}>{item}</Link>
            ))}
          </nav>
        </div>

      </header>
  );
}