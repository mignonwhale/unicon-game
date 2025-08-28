'use client'

import {useState} from "react";
import {motion} from "motion/react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Calendar, Clock, MapPin, Mic, Trophy, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import boothList from "../../../public/data/boothList"
import stageScheduleList from "../../../public/data/stageScheduleList";
import programList from "../../../public/data/programList";


export default function Exhibition() {
  const [selectedBooth, setSelectedBooth] = useState<string | null>(null);

  const getBoothColor = (type: string) => {
    const colors = {
      'VR': 'bg-purple-600',
      'Indie': 'bg-green-600',
      'Mobile': 'bg-blue-600',
      'Console': 'bg-red-600',
      'E-Sports': 'bg-orange-600',
      'Dev': 'bg-cyan-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-600';
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      'ceremony': 'bg-yellow-500',
      'talk': 'bg-blue-500',
      'workshop': 'bg-green-500',
      'seminar': 'bg-purple-500',
      'competition': 'bg-red-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'bg-green-500',
      'Intermediate': 'bg-yellow-500',
      'Advanced': 'bg-red-500'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 py-8 space-y-8"
    >
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          전시회 정보
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          부스 배치도, 무대 일정, 프로그램 안내
        </motion.p>
      </div>

      {/* 탭 컨테이너 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Tabs defaultValue="floorplan" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#2a2b4a] border border-[#3d3e6f]">
            <TabsTrigger
              value="floorplan"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
            >
              부스 배치도
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
            >
              무대 일정표
            </TabsTrigger>
            <TabsTrigger
              value="programs"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
            >
              프로그램 안내
            </TabsTrigger>
          </TabsList>

          {/* 부스 배치도 탭 */}
          <TabsContent value="floorplan" className="space-y-6">
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-400">
                  <MapPin className="w-5 h-5" />
                  <span>전시장 부스 배치도</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* 부스 맵 */}
                  <div className="lg:col-span-2">
                    <div className="relative bg-gray-800 rounded-lg p-4 h-96 border border-gray-600">
                      <div className="absolute inset-4 bg-gray-700 rounded border-2 border-dashed border-gray-500">
                        <div className="text-center text-gray-400 text-sm mt-2">전시장 A홀</div>

                        {/* 부스 위치 표시 */}
                        {boothList.map((booth) => (
                          <motion.div
                            key={booth.id}
                            className={`absolute w-12 h-12 ${getBoothColor(booth.type)} rounded cursor-pointer flex items-center justify-center text-white text-xs font-medium transition-all duration-200 hover:scale-110 ${
                              selectedBooth === booth.id ? 'ring-2 ring-yellow-400 scale-110' : ''
                            }`}
                            style={{
                              left: `${booth.position.x}%`,
                              top: `${booth.position.y}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                            onClick={() => setSelectedBooth(selectedBooth === booth.id ? null : booth.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {booth.id.split('-')[1]}
                          </motion.div>
                        ))}

                        {/* 입구 표시 */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                          <div className="bg-green-600 px-4 py-2 rounded text-white text-sm font-medium">
                            입구
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 부스 정보 */}
                  <div className="space-y-4">
                    <h4 className="text-white font-medium">부스 정보</h4>
                    <div className="space-y-2">
                      {boothList.map((booth) => (
                        <motion.div
                          key={booth.id}
                          className={`p-3 rounded border transition-all duration-200 cursor-pointer ${
                            selectedBooth === booth.id
                              ? 'bg-blue-600/20 border-blue-500'
                              : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                          }`}
                          onClick={() => setSelectedBooth(selectedBooth === booth.id ? null : booth.id)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium text-sm">{booth.id}</div>
                              <div className="text-gray-300 text-xs">{booth.name}</div>
                            </div>
                            <Badge className={`${getBoothColor(booth.type)} text-white text-xs`}>
                              {booth.type}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* 범례 */}
                    <div className="mt-6">
                      <h5 className="text-white font-medium mb-3">부스 유형</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {['VR', 'Indie', 'Mobile', 'Console', 'E-Sports', 'Dev'].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <div className={`w-3 h-3 ${getBoothColor(type)} rounded`}></div>
                            <span className="text-gray-300">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 무대 일정표 탭 */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-400">
                  <Calendar className="w-5 h-5" />
                  <span>메인 무대 일정 - 3월 15일</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stageScheduleList.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                            {event.time}
                          </div>
                          <Badge className={`${getEventTypeColor(event.type)} text-white text-xs`}>
                            {event.duration}분
                          </Badge>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-gray-500 text-gray-300 text-xs"
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <h4 className="text-white font-medium mb-2">{event.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{event.speaker}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 프로그램 안내 탭 */}
          <TabsContent value="programs" className="space-y-6">
            {/* 워크샵 섹션 */}
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-purple-400">
                  <Trophy className="w-5 h-5" />
                  <span>워크샵</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {programList.workshops.map((workshop, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${getLevelColor(workshop.level)} text-white text-xs`}>
                          {workshop.level}
                        </Badge>
                        <Badge variant="outline" className="border-gray-500 text-gray-300 text-xs">
                          {workshop.capacity}명
                        </Badge>
                      </div>
                      <h4 className="text-white font-medium mb-2">{workshop.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{workshop.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-400">{workshop.instructor}</span>
                        </div>
                        <div className="text-gray-400">{workshop.company}</div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">{workshop.time}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                        size="sm"
                      >
                        신청하기
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 연사 소개 섹션 */}
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-yellow-400">
                  <Mic className="w-5 h-5" />
                  <span>주요 연사</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programList.speakers.map((speaker, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-700 rounded-lg p-6 border border-gray-600 text-center hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{speaker.image}</div>
                      <h4 className="text-white font-medium text-lg mb-1">{speaker.name}</h4>
                      <div className="text-blue-400 text-sm mb-1">{speaker.role}</div>
                      <div className="text-gray-400 text-sm mb-4">{speaker.company}</div>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{speaker.bio}</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {speaker.topics.map((topic, topicIndex) => (
                          <Badge
                            key={topicIndex}
                            variant="outline"
                            className="border-yellow-500 text-yellow-400 text-xs"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}