import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { MatchedMenu } from "../types/quiz";
import { X, ExternalLink, Clock } from "lucide-react";
import { Badge } from "./ui/badge";

interface CompareModalProps {
  menus: MatchedMenu[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (menuId: string) => void;
}

export function CompareModal({
  menus,
  isOpen,
  onClose,
  onRemove,
}: CompareModalProps) {
  const handleBooking = (menu: MatchedMenu) => {
    const url = `${menu.hotpepper_url}?utm_source=lp&utm_medium=compare&utm_campaign=peace`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>メニュー比較</DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-stone-50">
                <th className="p-4 text-left text-sm text-stone-600 border-b border-stone-200">
                  項目
                </th>
                {menus.map((menu) => (
                  <th
                    key={menu.id}
                    className="p-4 text-left border-b border-stone-200 min-w-[250px]"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <p className="text-sm text-stone-900">{menu.title}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onRemove(menu.id)}
                        className="h-6 w-6 p-0 hover:bg-stone-100"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {menu.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Price */}
              <tr>
                <td className="p-4 border-b border-stone-200 text-sm text-stone-600">
                  予算
                </td>
                {menus.map((menu) => (
                  <td
                    key={menu.id}
                    className="p-4 border-b border-stone-200 text-olive-700"
                  >
                    {menu.price_display}
                  </td>
                ))}
              </tr>

              {/* Duration */}
              <tr>
                <td className="p-4 border-b border-stone-200 text-sm text-stone-600">
                  所要時間
                </td>
                {menus.map((menu) => (
                  <td
                    key={menu.id}
                    className="p-4 border-b border-stone-200"
                  >
                    <div className="flex items-center gap-1 text-stone-700">
                      <Clock className="w-4 h-4" />
                      <span>{menu.duration_min_est}〜{menu.duration_max_est}分</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Audience */}
              <tr>
                <td className="p-4 border-b border-stone-200 text-sm text-stone-600">
                  対象
                </td>
                {menus.map((menu) => (
                  <td
                    key={menu.id}
                    className="p-4 border-b border-stone-200 text-sm text-stone-700"
                  >
                    {menu.audience}
                  </td>
                ))}
              </tr>

              {/* Effects */}
              <tr>
                <td className="p-4 border-b border-stone-200 text-sm text-stone-600">
                  主な効果
                </td>
                {menus.map((menu) => (
                  <td
                    key={menu.id}
                    className="p-4 border-b border-stone-200"
                  >
                    <ul className="space-y-1">
                      {menu.effects.map((effect) => (
                        <li key={effect} className="text-sm text-stone-700 flex items-start gap-2">
                          <span className="text-olive-600 mt-0.5">•</span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Best for */}
              <tr>
                <td className="p-4 border-b border-stone-200 text-sm text-stone-600">
                  こんな方に
                </td>
                {menus.map((menu) => (
                  <td
                    key={menu.id}
                    className="p-4 border-b border-stone-200"
                  >
                    <ul className="space-y-1">
                      {menu.best_for.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm text-stone-700 flex items-start gap-2">
                          <span className="text-olive-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* CTA */}
              <tr>
                <td className="p-4 text-sm text-stone-600">予約</td>
                {menus.map((menu) => (
                  <td key={menu.id} className="p-4">
                    <Button
                      onClick={() => handleBooking(menu)}
                      className="w-full bg-olive-600 hover:bg-olive-700 text-white rounded-full"
                      size="sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      予約する
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
