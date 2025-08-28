'use client'

import {motion} from 'motion/react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Calendar, Gamepad2, MapPin, Trophy, Users} from "lucide-react";
import React from "react";

export default function Overview() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      className="max-w-7xl mx-auto py-8 space-y-8"
    >
      {/* 메인 타이틀 섹션 */}
      <div className="text-center py-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          animate={{
            textShadow: [
              "0 0 10px rgba(255, 215, 0, 0.5)",
              "0 0 20px rgba(255, 215, 0, 0.8)",
              "0 0 10px rgba(255, 215, 0, 0.5)"
            ]
          }}
          transition={{duration: 3, ease: "easeInOut", repeat: Infinity}}
        >
          GAME EXPO 2025
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5}}
        >
          대한민국 최대 규모의 프리미엄 게임 전시회
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.8}}
        >
          <div className="bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
            <span className="text-yellow-400 font-medium">2025년 9월 15일 - 17일</span>
          </div>
          <div className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
            <span className="text-blue-400 font-medium">코엑스 전시장</span>
          </div>
        </motion.div>
      </div>

      {/* 행사 정보 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.2}}
        >
          <Card
            className="bg-[#2a2b4a] border-[#3d3e6f] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-400">
                <Calendar className="w-5 h-5"/>
                <span>행사 일정</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">전시 기간</span>
                <span className="text-white font-medium">9월 15일 - 17일</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">운영 시간</span>
                <span className="text-white font-medium">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">마지막 날</span>
                <span className="text-white font-medium">10:00 - 17:00</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.4}}
        >
          <Card
            className="bg-[#2a2b4a] border-[#3d3e6f] hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-400">
                <MapPin className="w-5 h-5"/>
                <span>행사 장소</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">장소</span>
                <span className="text-white font-medium">코엑스 전시장</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">주소</span>
                <span className="text-white font-medium text-sm">서울시 강남구</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">홀</span>
                <span className="text-white font-medium">A, B, C홀</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.6}}
        >
          <Card
            className="bg-[#2a2b4a] border-[#3d3e6f] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-purple-400">
                <Users className="w-5 h-5"/>
                <span>참가 정보</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">참가업체</span>
                <span className="text-white font-medium">200+ 업체</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">전시 게임</span>
                <span className="text-white font-medium">500+ 게임</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">예상 관람객</span>
                <span className="text-white font-medium">50,000명</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* 특별 프로그램 섹션 */}
      <motion.div
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.8}}
      >
        <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-yellow-400 text-xl">
              <Trophy className="w-6 h-6"/>
              <span>특별 프로그램</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-3">게임 대회</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>인디 게임 개발자 대상</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>최우수 게임 선정 대회</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>VR 체험 경진대회</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-3">특별 이벤트</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>업계 전문가 세미나</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>네트워킹 파티</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>신작 게임 발표회</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 참가 안내 */}
      <motion.div
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1.0}}
        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 text-center"
      >
        <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-yellow-400"/>
        <h3 className="text-2xl font-bold text-white mb-4">참가 신청 안내</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          게임 개발사, 퍼블리셔, 관련 업체의 참가 신청을 받고 있습니다.
          자세한 참가 안내 및 신청은 문의 페이지를 통해 확인하실 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-blue-600/20 px-6 py-3 rounded-lg border border-blue-600/30">
            <div className="text-blue-400 font-medium">전시업체 신청</div>
            <div className="text-sm text-gray-300">2025년 8월 28일 마감</div>
          </div>
          <div className="bg-green-600/20 px-6 py-3 rounded-lg border border-green-600/30">
            <div className="text-green-400 font-medium">관람객 사전등록</div>
            <div className="text-sm text-gray-300">2025년 9월 10일 마감</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}