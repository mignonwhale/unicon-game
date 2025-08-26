import {Card, CardContent, CardTitle,} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge";

interface GameCardProps {
  data?: Game
}

export function GameCard({data}: GameCardProps) {
  return (
      <Card className="p-0 w-full max-w-sm dark">
        <CardContent className="px-4">
          {/* 게임 이미지 섹션 */}
          <div className="relative overflow-hidden h-48 w-full">
            <img
                src={data?.image}
                alt="Double Boot 게임 스크린샷"
                className="w-full h-full object-cover"
            />
            {/* 플랫폼 태그 */}
            <div className="absolute top-2 left-2 flex gap-1">
              {data?.platform.map((item, index) => (
                <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardContent className="p-0 flex flex-col h-full">
          {/* 게임 정보 섹션 */}
          <div className="p-4 text-white">
            <div className="space-y-3">
              {/* 게임 제목 */}
              <h1 className="text-lg font-bold text-cyan-400">
                {data?.title}
              </h1>

              {/* 장르 */}
              <div className="flex w-full flex-wrap gap-2">
                {data?.genre.slice(0, 3).map((item, index) => (
                  <Badge 
                    key={index}
                    variant={
                      index === 0 ? "default" : 
                      index === 1 ? "secondary" : 
                      "destructive"
                    }
                  >
                    {item}
                  </Badge>
                ))}
              </div>

              {/* 게임 설명 */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {data?.description}
              </p>

              {/* 다운로드 url */}
              <div className="text-xs text-gray-500 mt-2">
                {data?.downloadUrl}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}
