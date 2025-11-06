import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MenuCard } from "./MenuCard";
import { CompareModal } from "./CompareModal";
import { MatchedMenu } from "../types/quiz";
import { RotateCcw, Scale } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ResultsProps {
  results: MatchedMenu[];
  onRetry: () => void;
  onBackToTop: () => void;
}

export function Results({ results, onRetry, onBackToTop }: ResultsProps) {
  const [compareList, setCompareList] = useState<MatchedMenu[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const handleAddToCompare = (menu: MatchedMenu) => {
    if (compareList.length >= 3) {
      toast.error("比較は最大3件までです");
      return;
    }
    
    if (compareList.find((m) => m.id === menu.id)) {
      toast.info("すでに比較リストに追加されています");
      return;
    }

    setCompareList([...compareList, menu]);
    toast.success(`${menu.title.split(":")[0]}を比較に追加しました`);
  };

  const handleRemoveFromCompare = (menuId: string) => {
    setCompareList(compareList.filter((m) => m.id !== menuId));
    toast.success("比較から削除しました");
  };

  const handleOpenCompare = () => {
    if (compareList.length < 2) {
      toast.error("比較するには2件以上選択してください");
      return;
    }
    setShowCompareModal(true);
  };

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-stone-900 mb-4">
            あなたにぴったりの<br />おすすめはこちら
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            診断結果に基づいて、最適なメニューを選びました。価格と所要時間を確認して、Hot Pepper Beautyで予約しましょう。
          </p>
        </motion.div>

        {/* Results */}
        {results.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {results.map((menu, index) => (
                <MenuCard
                  key={menu.id}
                  menu={menu}
                  onAddToCompare={handleAddToCompare}
                  isInComparison={compareList.some((m) => m.id === menu.id)}
                />
              ))}
            </div>

            {/* Compare button */}
            {compareList.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mb-8"
              >
                <Button
                  onClick={handleOpenCompare}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2"
                >
                  <Scale className="w-4 h-4 mr-2" />
                  選択したメニューを比較 ({compareList.length})
                </Button>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤔</span>
              </div>
              <h3 className="text-stone-900 mb-2">
                条件に合うメニューが見つかりませんでした
              </h3>
              <p className="text-stone-600 mb-6">
                条件を調整して、もう一度お試しください
              </p>
            </div>
            <Button
              onClick={onRetry}
              variant="outline"
              className="rounded-full"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              条件を調整する
            </Button>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 pt-8 border-t border-stone-200">
          <Button
            onClick={onRetry}
            variant="outline"
            className="rounded-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            もう一度診断する
          </Button>
          <Button
            onClick={onBackToTop}
            variant="ghost"
            className="rounded-full"
          >
            トップに戻る
          </Button>
        </div>
      </div>

      {/* Compare Modal */}
      <CompareModal
        menus={compareList}
        isOpen={showCompareModal}
        onClose={() => setShowCompareModal(false)}
        onRemove={handleRemoveFromCompare}
      />
    </section>
  );
}
