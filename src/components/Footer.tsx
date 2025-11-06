import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface FooterProps {
  onStartQuiz: () => void;
}

export function Footer({ onStartQuiz }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-12 pb-12 border-b border-stone-700">
          <h3 className="text-white mb-4">
            まだ迷っていますか？
          </h3>
          <p className="text-stone-400 mb-6 max-w-2xl mx-auto">
            3分の診断で、あなたにぴったりのメニューが見つかります
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onStartQuiz}
              className="bg-olive-600 hover:bg-olive-700 text-white rounded-full px-8"
            >
              診断をはじめる
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://beauty.hotpepper.jp/slnH000281422/", "_blank")}
              className="border-stone-600 text-white hover:bg-stone-800 rounded-full px-8"
            >
              直接予約ページへ
            </Button>
          </div>
        </div>

        {/* Brand Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-olive-400" />
              <span className="font-medium">HAIR&MAKE peace</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              髪と頭皮にやさしいオーガニック志向のサロン。8年連続Hot Pepper Beauty Award受賞。
            </p>
          </div>

          <div>
            <h4 className="text-sm text-stone-400 mb-3">店舗</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>HAIR&MAKE peace 高柳店</li>
              <li>HAIR&MAKE peace 花堂店</li>
              <li>森の日々（ヘッドスパ専門）</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-stone-400 mb-3">主な技術</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>METEO髪質改善</li>
              <li>超高濃度水素トリートメント</li>
              <li>白髪ぼかしハイライト</li>
              <li>オーガニックカラー</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-stone-700">
          <p className="text-xs text-stone-500 text-center">
            ※価格・所要時間は目安です。髪の状態により変動する場合があります。<br />
            ※このページはHAIR&MAKE peaceの予約誘導を目的としたランディングページです。実際の予約はHot Pepper Beautyで行われます。
          </p>
        </div>
      </div>
    </footer>
  );
}
