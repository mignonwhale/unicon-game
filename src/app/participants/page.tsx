'use client'

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {GameCard} from "@/components/GameCard";
import gameList from "../../../public/data/gameList";
import {useMemo, useState} from "react";
import {Badge} from "@/components/ui/badge";
import {ArrowUpDown, RotateCcw, Search} from "lucide-react";

export default function Participants() {
  const [keyword, setKeyword] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("");

  // 필터 옵션 추출
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    gameList.forEach(game => {
      game.genre.forEach(g => genres.add(g));
    });
    return Array.from(genres).sort();
  }, []);

  const allPlatforms = useMemo(() => {
    const platforms = new Set<string>();
    gameList.forEach(game => {
      game.platform.forEach(p => platforms.add(p));
    });
    return Array.from(platforms).sort();
  }, []);

  const allTeams = useMemo(() => {
    const categories = new Set<string>();
    gameList.forEach(game => {
      categories.add(game.team);
    });
    return Array.from(categories).sort();
  }, []);

  // 필터링된 게임 리스트
  const filteredGames = useMemo(() => {
    return gameList.filter(game => {
      // 키워드 검색
      const matchesKeyword = keyword === "" ||
          game.title.toLowerCase().includes(keyword.toLowerCase()) ||
          game.description.toLowerCase().includes(keyword.toLowerCase()) ||
          game.members.some(member => member.toLowerCase().includes(keyword.toLowerCase()));

      // 장르 필터
      const matchesGenre = selectedGenres.length === 0 ||
          selectedGenres.some(genre => game.genre.includes(genre));

      // 플랫폼 필터
      const matchesPlatform = selectedPlatforms.length === 0 ||
          selectedPlatforms.some(platform => game.platform.includes(platform));

      // 팀구분 필터
      const matchesCategory = selectedTeams.length === 0 ||
          selectedTeams.includes(game.team);

      return matchesKeyword && matchesGenre && matchesPlatform && matchesCategory;
    });
  }, [keyword, selectedGenres, selectedPlatforms, selectedTeams]);

  // 정렬된 게임 리스트
  const sortedGames = useMemo(() => {
    const sorted = [...filteredGames];
    switch (sortBy) {
      case "최신순":
        return sorted; // 기본 순서 유지
      case "이름순":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "부스번호순":
        return sorted.sort((a, b) => a.boothNo.localeCompare(b.boothNo));
      default:
        return sorted;
    }
  }, [filteredGames, sortBy]);

  const toggleSelection = (item: string, selectedItems: string[], setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleReset = () => {
    setKeyword("");
    setSelectedGenres([]);
    setSelectedPlatforms([]);
    setSelectedTeams([]);
    setSortBy("");
  };

  const hasActiveFilters = selectedPlatforms.length > 0 || selectedGenres.length > 0 || selectedTeams.length > 0 || keyword.length > 0;

  return (
      <div className="relative min-h-screen overflow-hidden py-20 flex flex-col">
        {/* 필터 섹션 */}
        <section className="bg-[#242550] border-b border-[#3d3e6f] py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-6">
              {/* 플랫폼 */}
              <div>
                <h3 className="text-pink-400 text-sm font-medium mb-3">플랫폼</h3>
                <div className="flex flex-wrap gap-2">
                  {allPlatforms.map((platform) => (
                      <Badge
                          key={platform}
                          variant={selectedPlatforms.includes(platform) ? "default" : "secondary"}
                          className={`cursor-pointer transition-all hover:scale-105 ${
                              selectedPlatforms.includes(platform)
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                          }`}
                          onClick={() => toggleSelection(platform, selectedPlatforms, setSelectedPlatforms)}
                      >
                        {platform}
                      </Badge>
                  ))}
                </div>
              </div>

              {/* 게임 장르 */}
              <div>
                <h3 className="text-pink-400 text-sm font-medium mb-3">장르</h3>
                <div className="flex flex-wrap gap-2">
                  {allGenres.map((genre) => (
                      <Badge
                          key={genre}
                          variant={selectedGenres.includes(genre) ? "default" : "secondary"}
                          className={`cursor-pointer transition-all hover:scale-105 ${
                              selectedGenres.includes(genre)
                                  ? 'bg-green-600 hover:bg-green-700 text-white'
                                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                          }`}
                          onClick={() => toggleSelection(genre, selectedGenres, setSelectedGenres)}
                      >
                        {genre}
                      </Badge>
                  ))}
                </div>
              </div>

              {/* 팀 구분 */}
              <div>
                <h3 className="text-pink-400 text-sm font-medium mb-3">팀구분</h3>
                <div className="flex flex-wrap gap-2">
                  {allTeams.map((team) => (
                      <Badge
                          key={team}
                          variant={selectedTeams.includes(team) ? "default" : "secondary"}
                          className={`cursor-pointer transition-all hover:scale-105 ${
                              selectedTeams.includes(team)
                                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                          }`}
                          onClick={() => toggleSelection(team, selectedTeams, setSelectedTeams)}
                      >
                        {team}
                      </Badge>
                  ))}
                </div>
              </div>

              {/* 통합검색 */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                <div className="flex-1">
                  <h3 className="text-pink-400 text-sm font-medium mb-3">통합검색</h3>
                  <div className="flex gap-3 max-w-md">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"/>
                      <Input
                          placeholder="검색어 입력"
                          value={keyword}
                          onChange={(event) => setKeyword(event.target.value)}
                          className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                {hasActiveFilters && (
                    <div className="flex flex-col">
                      <div className="h-6 md:block hidden"></div>
                      {/* 라벨 높이 맞춤용 스페이서 */}
                      <Button
                          variant="outline"
                          onClick={handleReset}
                          className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4"/>
                        초기화
                      </Button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sort Section */}
        <section className="bg-[#1e1f42] border-b border-[#3d3e6f] py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-300 text-sm">
                  총 <span className="text-white font-medium">{sortedGames.length}</span>개의 게임
                </span>
                {hasActiveFilters && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">필터 적용됨:</span>
                    {selectedPlatforms.length > 0 && (
                      <Badge className="bg-blue-600/20 text-blue-300 text-xs">
                        플랫폼 {selectedPlatforms.length}개
                      </Badge>
                    )}
                    {selectedGenres.length > 0 && (
                      <Badge className="bg-green-600/20 text-green-300 text-xs">
                        장르 {selectedGenres.length}개
                      </Badge>
                    )}
                    {selectedTeams.length > 0 && (
                      <Badge className="bg-purple-600/20 text-purple-300 text-xs">
                        팀 {selectedTeams.length}개
                      </Badge>
                    )}
                    {keyword && (
                      <Badge className="bg-orange-600/20 text-orange-300 text-xs">
                        검색: &#34;{keyword}&#34;
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-400"/>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                  <SelectTrigger className="w-32 bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="정렬"/>
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="최신순" className="text-white hover:bg-gray-600">최신순</SelectItem>
                    <SelectItem value="이름순" className="text-white hover:bg-gray-600">이름순</SelectItem>
                    <SelectItem value="부스번호순" className="text-white hover:bg-gray-600">부스번호순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <main className="bg-[#1a1b3a] py-8">
          <div className="max-w-7xl mx-auto px-4">
            {sortedGames.length === 0 ? (
              <div className="text-center py-12">
                <div
                    className="w-20 h-20 mx-auto mb-4 border-2 border-gray-600 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-500"/>
                </div>
                <h3 className="text-white text-lg mb-2">검색 결과가 없습니다</h3>
                <p className="text-gray-400 text-sm mb-4">다른 검색어나 필터 조건을 시도해보세요.</p>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    모든 필터 초기화
                  </Button>
              )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sortedGames.map((game, index) => (
                  <GameCard key={game.id} data={game}/>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
  )
}