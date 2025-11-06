import { motion } from "motion/react";
import { Award, Heart, Sparkles, Leaf } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imageUrls } from "../config/images";

export function BrandSection() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "METEO髪質改善",
      description: "自然なストレートとツヤを実現する最新技術"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "超高濃度水素トリートメント",
      description: "エイジングケアとダメージ補修を同時に"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "白髪ぼかしハイライト",
      description: "頻度を減らせる立体感のあるデザイン"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "8年連続受賞",
      description: "Hot Pepper Beauty Award 2018-2025"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-stone-900 mb-6">
            髪と頭皮にやさしい<br />
            オーガニック志向のサロン
          </h2>
          <p className="text-stone-600 leading-relaxed">
            HAIR&MAKE peaceは、信頼できる商材のみを使用し、お客様一人ひとりに合わせた完全カスタマイズの施術を提供します。
            METEO髪質改善、水素トリートメント、白髪ぼかしデザインなど、髪と頭皮の健康を第一に考えた技術で、美しい髪を実現します。
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-stone-100 hover:border-olive-200 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4 text-olive-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image + Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <ImageWithFallback
              src={imageUrls.brand.treatment}
              alt="Organic beauty treatment"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-stone-900 mb-4">代表メッセージ</h3>
            <div className="space-y-4 text-stone-600">
              <p>
                お客様の髪と頭皮の健康を第一に考え、信頼できる商材のみを厳選して使用しています。
              </p>
              <p>
                完全カスタマイズの施術と、ご自宅でのホームケア提案により、持続的な美髪をサポートします。
              </p>
              <p>
                頭皮にやさしいカラー剤を使用し、リラックスできる空間で、あなたらしい美しさを引き出します。
              </p>
            </div>

            <div className="mt-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <p className="text-sm text-stone-600">
                <span className="text-olive-700">来店頻度の目安：</span>
                1.5〜2ヶ月に1回が効果的です。髪質や施術内容によって異なりますので、お気軽にご相談ください。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-stone-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-stone-900 mb-2">店舗情報</h3>
            <p className="text-stone-600">3つの店舗でお待ちしております</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "HAIR&MAKE peace 高柳店", type: "総合サロン" },
              { name: "HAIR&MAKE peace 花堂店", type: "総合サロン" },
              { name: "森の日々", type: "ヘッドスパ専門" }
            ].map((location, index) => (
              <Card key={location.name} className="border-2 border-stone-100">
                <CardContent className="p-6 text-center">
                  <p className="text-stone-900 mb-1">{location.name}</p>
                  <p className="text-sm text-stone-500">{location.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
