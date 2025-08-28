"use client"

import { motion } from 'motion/react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Clock, Mail, MapPin, MessageSquare, Phone, Send, User} from "lucide-react";
import {Input} from "@/components/ui/input";
import { SelectItem } from '@radix-ui/react-select';
import {Select, SelectContent, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현시 API 호출 로직
    console.log('문의 제출:', formData);
    alert('문의가 성공적으로 제출되었습니다. 빠른 시일 내에 답변드리겠습니다.');
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
          문의하기
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          GAME EXPO 2025에 대한 문의사항을 남겨주세요
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 연락처 정보 */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-400">
                  <Mail className="w-5 h-5" />
                  <span>연락처 정보</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 text-sm">이메일</div>
                    <div className="text-white font-medium">info@gameexpo2025.co.kr</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 text-sm">전화번호</div>
                    <div className="text-white font-medium">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 text-sm">주소</div>
                    <div className="text-white font-medium">서울시 강남구 영동대로 513</div>
                    <div className="text-gray-400 text-sm">코엑스 전시장</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 text-sm">운영시간</div>
                    <div className="text-white font-medium">평일 09:00 - 18:00</div>
                    <div className="text-gray-400 text-sm">주말 및 공휴일 휴무</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 자주 묻는 질문 */}
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-yellow-400">
                  <MessageSquare className="w-5 h-5" />
                  <span>자주 묻는 질문</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="text-white font-medium text-sm">참가 신청 방법은?</div>
                  <div className="text-gray-400 text-xs mt-1">
                    문의 양식을 통해 신청하시면 담당자가 연락드립니다.
                  </div>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <div className="text-white font-medium text-sm">부스 임대 비용은?</div>
                  <div className="text-gray-400 text-xs mt-1">
                    부스 크기와 위치에 따라 다르며, 별도 문의 바랍니다.
                  </div>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <div className="text-white font-medium text-sm">관람객 입장료는?</div>
                  <div className="text-gray-400 text-xs mt-1">
                    일반 관람객은 무료이며, 사전 등록을 권장합니다.
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 문의 양식 */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-[#2a2b4a] border-[#3d3e6f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Send className="w-5 h-5" />
                  <span>문의 양식</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        이름 *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="이름을 입력하세요"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        이메일 *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="이메일을 입력하세요"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        전화번호
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="전화번호를 입력하세요"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        회사/단체명
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="회사 또는 단체명을 입력하세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      문의 유형 *
                    </label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="문의 유형을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="exhibition" className="text-white hover:bg-gray-600">전시 참가 문의</SelectItem>
                        <SelectItem value="sponsorship" className="text-white hover:bg-gray-600">후원 문의</SelectItem>
                        <SelectItem value="media" className="text-white hover:bg-gray-600">미디어 문의</SelectItem>
                        <SelectItem value="visitor" className="text-white hover:bg-gray-600">관람객 문의</SelectItem>
                        <SelectItem value="partnership" className="text-white hover:bg-gray-600">파트너십 문의</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-gray-600">기타 문의</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      문의 내용 *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 min-h-32"
                      placeholder="문의하실 내용을 자세히 작성해주세요..."
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: '',
                        message: ''
                      })}
                    >
                      초기화
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      문의 제출
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* 추가 안내 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-4">빠른 응답을 위한 안내</h3>
        <p className="text-gray-300 mb-4">
          문의 유형을 정확히 선택하시고, 구체적인 내용을 작성해주시면 더욱 빠르고 정확한 답변을 받으실 수 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-600/20 px-4 py-3 rounded-lg border border-blue-600/30">
            <div className="text-blue-400 font-medium">일반 문의</div>
            <div className="text-gray-300">24시간 내 답변</div>
          </div>
          <div className="bg-green-600/20 px-4 py-3 rounded-lg border border-green-600/30">
            <div className="text-green-400 font-medium">참가 신청</div>
            <div className="text-gray-300">12시간 내 답변</div>
          </div>
          <div className="bg-purple-600/20 px-4 py-3 rounded-lg border border-purple-600/30">
            <div className="text-purple-400 font-medium">급한 문의</div>
            <div className="text-gray-300">전화 문의 권장</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}