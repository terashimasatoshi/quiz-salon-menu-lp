import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Info, ExternalLink, Plus } from "lucide-react";
import { MatchedMenu } from "../types/quiz";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";

interface MenuCardProps {
  menu: MatchedMenu;
  onAddToCompare: (menu: MatchedMenu) => void;
  isInComparison: boolean;
}

export function MenuCard({ menu, onAddToCompare, isInComparison }: MenuCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBooking = () => {
    const url = `${menu.hotpepper_url}?utm_source=lp&utm_medium=quiz&utm_campaign=peace`;
    window.open(url, "_blank", "noopener,noreferrer");
    
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("click_book_now", {
          detail: { menuId: menu.id }
        })
      );
    }
  };

  const getTagColor = (tag: string) => {
    if (tag.includes("人気No.1")) return "bg-amber-100 text-amber-800 border-amber-200";
    if (tag.includes("人気No.2")) return "bg-orange-100 text-orange-800 border-orange-200";
    if (tag.includes("人気No.3")) return "bg-rose-100 text-rose-800 border-rose-200";
    if (tag.includes("ご新規")) return "bg-blue-100 text-blue-800 border-blue-200";
    if (tag.includes("メンズ")) return "bg-indigo-100 text-indigo-800 border-indigo-200";
    return "bg-stone-100 text-stone-800 border-stone-200";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden border-2 border-stone-200 hover:border-olive-300 transition-all hover:shadow-xl">
        <CardHeader className="bg-gradient-to-br from-stone-50 to-white pb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {menu.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={getTagColor(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-stone-900">{menu.title}</h3>
        </CardHeader>

        <CardContent className="pt-6 space-y-4">
          {/* Pricing & Time */}
          <div className="grid sm:grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl">
            <div>
              <p className="text-xs text-stone-500 mb-1">予算の目安</p>
              <p className="text-olive-700">{menu.price_display}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <p className="text-xs text-stone-500">所要時間（目安）</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-stone-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>目安時間。髪の状態で前後します</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-1 text-stone-700">
                <Clock className="w-4 h-4" />
                <span>{menu.duration_min_est}〜{menu.duration_max_est}分</span>
              </div>
            </div>
          </div>

          {/* Recommendation reason */}
          <div className="p-4 bg-olive-50 rounded-xl border border-olive-100">
            <p className="text-xs text-olive-600 mb-1">あなたへのおすすめ理由</p>
            <p className="text-sm text-olive-900">{menu.reason}</p>
          </div>

          {/* Effects */}
          <div>
            <p className="text-xs text-stone-500 mb-2">主な効果</p>
            <div className="flex flex-wrap gap-2">
              {menu.effects.map((effect) => (
                <span
                  key={effect}
                  className="text-xs px-3 py-1 bg-white border border-stone-200 rounded-full text-stone-700"
                >
                  {effect}
                </span>
              ))}
            </div>
          </div>

          {/* Collapsible details */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full text-stone-600 hover:text-stone-900">
                {isOpen ? "詳細を閉じる" : "詳細を見る"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-3">
              <div>
                <p className="text-xs text-stone-500 mb-2">こんな方におすすめ</p>
                <ul className="space-y-1">
                  {menu.best_for.map((item) => (
                    <li key={item} className="text-sm text-stone-700 flex items-start gap-2">
                      <span className="text-olive-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 bg-stone-50 border-t border-stone-100">
          <Button
            onClick={handleBooking}
            className="w-full bg-olive-600 hover:bg-olive-700 text-white rounded-full"
            data-event="click_book_now"
            data-menu-id={menu.id}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Hot Pepper Beautyで予約する
          </Button>
          
          <Button
            variant="outline"
            onClick={() => onAddToCompare(menu)}
            disabled={isInComparison}
            className="w-full rounded-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            {isInComparison ? "比較に追加済み" : "比較に追加"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
