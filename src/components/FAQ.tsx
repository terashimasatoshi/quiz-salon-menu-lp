import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "所要時間はどのくらいですか？",
      answer: "メニューによって異なりますが、カット+カラーで90〜150分、髪質改善を含む場合は150〜180分程度です。お急ぎの場合は、時短メニューもご用意しております。"
    },
    {
      question: "カラーの色持ちはどのくらいですか？",
      answer: "髪質改善カラーの場合、通常のカラーよりも色持ちが良く、1.5〜2ヶ月程度が目安です。ホームケアアイテムを使用することで、さらに長持ちさせることができます。"
    },
    {
      question: "頭皮への刺激は気になりますか？",
      answer: "当サロンでは、頭皮にやさしいオーガニックカラー剤を使用しています。刺激が気になる方には、さらに低刺激な商材や、頭皮保護トリートメントをご提案いたします。"
    },
    {
      question: "来店頻度の目安は？",
      answer: "髪質改善メニューは1.5〜2ヶ月に1回が効果的です。白髪ぼかしハイライトは、通常のカラーより頻度を減らせるため、2〜3ヶ月に1回が目安です。"
    },
    {
      question: "初めての来店でも大丈夫ですか？",
      answer: "もちろんです。ご新規様限定のお得なメニューもご用意しております。カウンセリングでお悩みをしっかりお伺いし、最適な施術をご提案いたします。"
    },
    {
      question: "メンズメニューはありますか？",
      answer: "はい、メンズ専用のカット+スパメニューをご用意しております。頭皮ケアと清潔感を重視した施術で、リラックスしていただけます。"
    },
    {
      question: "予約の変更やキャンセルはできますか？",
      answer: "Hot Pepper Beautyのマイページから、24時間いつでも変更・キャンセルが可能です。当日キャンセルの場合は、お電話でご連絡ください。"
    },
    {
      question: "支払い方法は何がありますか？",
      answer: "現金、各種クレジットカード、電子マネー、QRコード決済に対応しております。詳細は店舗にお問い合わせください。"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-stone-900 mb-4">よくある質問</h2>
          <p className="text-stone-600">
            お客様からよくいただくご質問をまとめました
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-stone-200 rounded-xl px-6 data-[state=open]:border-olive-300"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-stone-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
