import {Card, CardContent,} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge";

interface GameCardProps {
  data?: Game
}

export function GameCard({data}: GameCardProps) {
  return (
      <Card className="bg-[#2a2b4a] border-[#3d3e6f] overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group">
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
            <img src={data?.image} alt={data?.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-2 left-2 flex gap-1">
            {data?.platform.map((item, index) => (
              <Badge key={index} className="bg-blue-600 text-white text-xs">
                {item}
              </Badge>
              ))}
          </div>
        </div>
        <CardContent className="p-4">
          {/* 하늘색 타이틀 부분 - 좌우 여백 동일하게 조정 */}
          <div className="bg-cyan-500 text-white px-3 py-2 rounded-md mb-3 -mx-1">
            <h3 className="font-medium text-sm leading-tight">{data?.title}</h3>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed mb-3 line-clamp-4">
            {data?.description}
          </p>
          <div className="flex items-center gap-1">
            {data?.genre.slice(0, 3).map((item, index) => (
              <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
  )
}
