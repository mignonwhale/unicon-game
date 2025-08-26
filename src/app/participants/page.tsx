import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronDown} from "lucide-react";
import {GameCard} from "@/components/GameCard";
import gameList from "../../../public/data/gameList";

export default function Participants() {
  return (
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="flex gap-2">
          <Input type="text" placeholder="검색어" className="max-w-sm w-lg" />
          <Button type="submit" variant="outline">
            Search
          </Button>
        </div>
        <div className="flex gap-2 py-4">
          <Input
              placeholder="Filter emails..."
              // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
              // onChange={(event) =>
              //     table.getColumn("email")?.setFilterValue(event.target.value)
              // }
              className="max-w-sm w-lg"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                필터 <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem>장르</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>플랫폼</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>팀</DropdownMenuCheckboxItem>
              {/*{table*/}
              {/*    .getAllColumns()*/}
              {/*    .filter((column) => column.getCanHide())*/}
              {/*    .map((column) => {*/}
              {/*      return (*/}
              {/*          <DropdownMenuCheckboxItem*/}
              {/*              key={column.id}*/}
              {/*              className="capitalize"*/}
              {/*              checked={column.getIsVisible()}*/}
              {/*              onCheckedChange={(value) =>*/}
              {/*                  column.toggleVisibility(!!value)*/}
              {/*              }*/}
              {/*          >*/}
              {/*            {column.id}*/}
              {/*          </DropdownMenuCheckboxItem>*/}
              {/*      )*/}
              {/*    })}*/}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>통계영역</div>
        <div>카드리스트</div>
        
        {/* 반응형 게임 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4">
          {gameList.map((game, index) => (
            <GameCard key={index} data={game} />
          ))}
        </div>
      </section>
  )
}