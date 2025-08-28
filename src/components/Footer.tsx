'use client'
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Footer() {
  return (
      <footer className="bg-[#0f1129] border-t border-[#2d2e5f] py-8 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 로고 및 회사 정보 */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <AnimatedLogo />
              {/*  <div className="w-10 h-10 rounded-full">*/}
              {/*    <img*/}
              {/*        src={'/images/logo.jpg'}*/}
              {/*        alt="게임전시회 로고"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*  <div>*/}
              {/*    <h3 className="text-xl font-black uppercase tracking-wide">GAME EXPO 2025</h3>*/}
              {/*    <p className="text-gold text-sm font-semibold uppercase tracking-wider">게임의 새로운 세계</p>*/}
              {/*  </div>*/}
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                대한민국 최대 규모의 게임 전시회로, 최첨단 게임 기술과
                혁신적인 콘텐츠를 선보이는 글로벌 게임 축제입니다.
              </p>
            </div>

            {/* 연락처 정보 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">연락처</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@gameexpo2025.com</p>
                <p>📞 02-1234-5678</p>
                <p>📍 서울시 강남구 코엑스</p>
                <p>🕒 평일 09:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          {/* 저작권 표시 */}
          <div className="mt-12 pt-8 border-t border-[#2d2e5f]">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>©MIGNONWHALE 2025. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Powered by Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
  );
}