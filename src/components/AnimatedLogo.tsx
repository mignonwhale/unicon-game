import React from 'react';
import { motion } from 'motion/react';

const AnimatedLogo: React.FC = () => {
  return (
      <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 황금색 기하학적 도형 - 360도 회전 */}
        <motion.div
            className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* 외부 육각형 프레임 */}
          <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="30%" stopColor="#FFA500" />
                  <stop offset="60%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
                <linearGradient id="goldGradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE55C" />
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#DAA520" />
                </linearGradient>
              </defs>

              {/* 외부 육각형 */}
              <polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="url(#goldGradient)"
                  stroke="#FFD700"
                  strokeWidth="2"
                  opacity="0.9"
              />

              {/* 내부 기하학적 패턴 */}
              <polygon
                  points="50,15 75,30 75,70 50,85 25,70 25,30"
                  fill="url(#goldGradientInner)"
                  stroke="#FFD700"
                  strokeWidth="1"
                  opacity="0.8"
              />

              {/* 중앙 다이아몬드 */}
              <polygon
                  points="50,35 65,50 50,65 35,50"
                  fill="#FFE55C"
                  stroke="#FFD700"
                  strokeWidth="1"
              />

              {/* 내부 선들 */}
              <g stroke="#B8860B" strokeWidth="1" opacity="0.6">
                <line x1="50" y1="15" x2="50" y2="35" />
                <line x1="50" y1="65" x2="50" y2="85" />
                <line x1="25" y1="30" x2="35" y2="50" />
                <line x1="65" y1="50" x2="75" y2="70" />
                <line x1="75" y1="30" x2="65" y2="50" />
                <line x1="35" y1="50" x2="25" y2="70" />
              </g>
            </svg>
          </motion.div>

          {/* 글로우 효과 */}
          <motion.div
              className="absolute inset-0 -z-10 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 15px rgba(255, 215, 0, 0.4)",
                  "0 0 30px rgba(255, 215, 0, 0.7)",
                  "0 0 15px rgba(255, 215, 0, 0.4)"
                ]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity
              }}
          />
        </motion.div>

        {/* 텍스트 부분 */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
              className="text-white font-bold tracking-wide text-xl md:text-2xl lg:text-3xl"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '2px'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
                animate={{
                  opacity: [1, 0.9, 1],
                  textShadow: [
                    "0 0 5px rgba(255, 255, 255, 0.3)",
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                    "0 0 5px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              GAME EXPO
            </motion.span>
          </motion.h1>

          <motion.p
              className="text-gray-300 text-xs md:text-sm tracking-wider mt-1"
              style={{
                letterSpacing: '1px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
                animate={{
                  color: ["#d1d5db", "#fbbf24", "#d1d5db"],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              PREMIUM, GAME EXHIBITION
            </motion.span>
          </motion.p>
        </motion.div>

        {/* 추가 장식 요소 */}
        <motion.div
            className="hidden lg:flex items-center space-x-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[...Array(3)].map((_, i) => (
              <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.3, 0.8],
                    backgroundColor: [
                      "rgb(250, 204, 21)",
                      "rgb(255, 215, 0)",
                      "rgb(250, 204, 21)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
              />
          ))}
        </motion.div>
      </motion.div>
  );
};

export default AnimatedLogo;