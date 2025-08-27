'use client'

import {Button} from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import {useRouter} from "next/navigation";

export default function HeroSection() {

  const navigate = useRouter();

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/heroBackground-dragon.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-black/20 to-navy/90" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent uppercase tracking-wider">
            GAME EXPO 2025
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-gold font-extrabold uppercase tracking-wide">
            게임의 새로운 세계가 펼쳐집니다
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            최첨단 게임 기술과 혁신적인 콘텐츠가 만나는 특별한 공간에서ㅜ
            미래의 게임 산업을 미리 체험해보세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
                variant="default"
                size="lg"
                className="border-3 border-gold bg-gold hover:bg-gold/90 text-navy px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-110 uppercase tracking-wide"
                onClick={() => navigate.push('/participants')}
            >
              참가업체 게임 둘러보기
            </Button>
          </div>

          <CountdownTimer targetDate="2025-09-15T00:00:00" />
        </div>
      </section>
  );
}