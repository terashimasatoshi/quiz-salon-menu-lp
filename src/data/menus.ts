import { Menu } from "../types/quiz";

export const menus: Menu[] = [
  {
    id: "meteo_straight_cut",
    title: "人気No.1: METEO美髪矯正&カット",
    price_display: "¥22,000（20%オフ）",
    audience: "全員",
    effects: ["髪質改善×自然なストレート", "ダメージ配慮", "くせ・うねり対応"],
    best_for: ["くせ毛が強い", "縮毛矯正の不自然さが苦手", "ブリーチ/エイジング毛"],
    duration_min_est: 150,
    duration_max_est: 180,
    tags: ["人気No.1"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "h2_color_cut_meteo",
    title: "人気No.2: 超高濃度水素カラー+カット+メテオ",
    price_display: "¥16,720",
    audience: "全員",
    effects: ["-5〜-10歳の若見え", "ツヤ/さらさら", "頭皮刺激ひかえめ"],
    best_for: ["カラーのダメージが気になる", "40代以上のエイジングケア", "同時にケアもしたい"],
    duration_min_est: 120,
    duration_max_est: 150,
    tags: ["人気No.2"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "meteo_color_cut_homecare",
    title: "人気No.3: 髪質改善メテオカラー+カット+ホームケア付き",
    price_display: "¥15,200（20%オフ）",
    audience: "全員",
    effects: ["カラー×髪質改善", "ホームケアで持続"],
    best_for: ["初めての髪質改善", "コスパ重視", "自宅でも効果キープ"],
    duration_min_est: 120,
    duration_max_est: 150,
    tags: ["人気No.3", "ホームケア付"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "meteo_straight_color_cut_shoulder",
    title: "METEOストレート+カラー+カット（肩まで）",
    price_display: "¥29,840（20%オフ）",
    audience: "全員",
    effects: ["最新縮毛矯正×カラー×カットを一度に"],
    best_for: ["くせ毛＆カラーを同時に整えたい", "一度で完結したい"],
    duration_min_est: 210,
    duration_max_est: 240,
    tags: ["フルコース"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "meteo_straight_color_cut_long_new",
    title: "METEOストレート+カラー+カット（肩下・ご新規）",
    price_display: "¥29,840（20%オフ）",
    audience: "ご新規様",
    effects: ["ロングの美しさを最大化"],
    best_for: ["ロング×くせ毛", "初めての来店"],
    duration_min_est: 240,
    duration_max_est: 270,
    tags: ["ご新規様限定", "フルコース"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "meteo_color_h2_treatment",
    title: "髪質改善極: メテオカラー+超高濃度水素トリートメント",
    price_display: "¥13,380",
    audience: "全員",
    effects: ["カラー×集中ケア", "コスパ良好"],
    best_for: ["カット不要", "定期メンテで美髪維持"],
    duration_min_est: 90,
    duration_max_est: 120,
    tags: ["コスパ"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "gray_blend_highlight",
    title: "デザインハイライト バレイヤージュ+トリートメント【白髪ぼかし】",
    price_display: "¥17,600",
    audience: "全員",
    effects: ["白髪を自然にぼかす", "立体感カラー"],
    best_for: ["白髪が気になり始めた", "頻度を減らしたい"],
    duration_min_est: 150,
    duration_max_est: 180,
    tags: ["白髪ぼかし", "デザインカラー"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "organic_color_rose_spa",
    title: "スペシャルケア: カット+オーガニックカラー+ローズスパトリートメント",
    price_display: "¥14,670",
    audience: "全員",
    effects: ["頭皮にやさしい", "癒しのスパ"],
    best_for: ["オーガニック志向", "頭皮の刺激が気になる"],
    duration_min_est: 120,
    duration_max_est: 150,
    tags: ["頭皮ケア", "リラクゼーション"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "mens_cut_cream_spa",
    title: "メンズ限定: メンズカット+保湿クリームスパ",
    price_display: "¥6,500",
    audience: "男性限定",
    effects: ["清潔感アップ", "頭皮の乾燥ケア"],
    best_for: ["仕事帰りにさっと", "リラックスしたい"],
    duration_min_est: 45,
    duration_max_est: 60,
    tags: ["メンズ"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  },
  {
    id: "first_try_meteo_color_cut",
    title: "ご新規様限定お試し: カット+髪質改善メテオカラー",
    price_display: "¥13,050（通常¥17,400）",
    audience: "ご新規様限定",
    effects: ["初回お試しで効果実感"],
    best_for: ["初めての来店", "コスパ重視"],
    duration_min_est: 90,
    duration_max_est: 120,
    tags: ["ご新規様限定", "お試し"],
    hotpepper_url: "https://beauty.hotpepper.jp/slnH000281422/"
  }
];

export const brandInfo = {
  name: "HAIR&MAKE peace",
  concept: "髪と頭皮にやさしいオーガニック志向のサロン。METEO髪質改善、水素トリートメント、白髪ぼかしデザイン等に強み。",
  awards: "Hot Pepper Beauty Award 8年連続（2018-2025）",
  avg_budget_first: "¥10,000〜¥10,999",
  avg_budget_repeat: "¥9,000〜¥9,999"
};
