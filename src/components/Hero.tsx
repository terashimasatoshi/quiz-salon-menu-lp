import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Award, Clock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imageUrls } from "../config/images";

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                <Award className="w-3 h-3 mr-1" />
                8年連続受賞
              </Badge>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <TrendingUp className="w-3 h-3 mr-1" />
                オーガニック志向
              </Badge>
            </div>

            <h1 className="text-stone-900 mb-4">
              3分で"いまの髪悩み"に<br />
              ベストな解決メニュー診断
            </h1>

            <p className="text-stone-600 mb-8 max-w-xl">
              価格と所要時間もその場でわかる。頭皮にやさしい施術で、ツヤのある髪へ。Hot Pepper Beautyでそのまま予約OK。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={onStartQuiz}
                className="bg-olive-600 hover:bg-olive-700 text-white rounded-full px-8"
                data-event="quiz_start"
              >
                診断をはじめる
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>初来店 {"\u00A5"}10,000〜</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>2回目以降 {"\u00A5"}9,000〜</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src={imageUrls.hero.main}
                alt="Hair salon interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
