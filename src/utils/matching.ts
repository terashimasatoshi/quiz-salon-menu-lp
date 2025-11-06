import { Menu, QuizAnswer, MatchedMenu } from "../types/quiz";
import { menus } from "../data/menus";

// メニューごとの concern タグマッピング
const menuConcerns: Record<string, string[]> = {
  meteo_straight_cut: ["frizz", "damage", "straight"],
  h2_color_cut_meteo: ["damage", "shine", "low_damage"],
  meteo_color_cut_homecare: ["damage", "cost", "budget", "shine"],
  meteo_straight_color_cut_shoulder: ["frizz", "straight", "all_in_one"],
  meteo_straight_color_cut_long_new: ["frizz", "straight", "all_in_one"],
  meteo_color_h2_treatment: ["damage", "shine", "budget"],
  gray_blend_highlight: ["gray", "gray_blend", "design"],
  organic_color_rose_spa: ["scalp", "scalp_care", "relax"],
  mens_cut_cream_spa: ["mens", "male", "scalp_care", "time"],
  first_try_meteo_color_cut: ["budget", "cost", "damage"]
};

export function matchMenus(answers: QuizAnswer[]): MatchedMenu[] {
  const scored = menus.map((menu) => {
    let score = 0;
    const reasons: string[] = [];

    // Q1: いちばん気になること (複数選択可)
    const q1Answer = answers.find((a) => a.questionId === 1);
    if (q1Answer && Array.isArray(q1Answer.answer)) {
      const concerns = q1Answer.answer;
      const menuTags = menuConcerns[menu.id] || [];
      
      concerns.forEach((concern) => {
        if (menuTags.includes(concern)) {
          score += 3; // Primary match
          
          if (concern === "frizz") reasons.push("くせ毛・うねりに対応");
          if (concern === "damage") reasons.push("ダメージケア");
          if (concern === "gray") reasons.push("白髪対応");
          if (concern === "scalp") reasons.push("頭皮にやさしい");
          if (concern === "time") reasons.push("時短");
          if (concern === "cost") reasons.push("コスパ良好");
          if (concern === "relax") reasons.push("リラックス効果");
        }
      });
    }

    // Q2: 仕上がりイメージ
    const q2Answer = answers.find((a) => a.questionId === 2);
    if (q2Answer && typeof q2Answer.answer === "string") {
      const menuTags = menuConcerns[menu.id] || [];
      if (menuTags.includes(q2Answer.answer)) {
        score += 2;
        
        if (q2Answer.answer === "straight") reasons.push("自然なストレート仕上げ");
        if (q2Answer.answer === "shine") reasons.push("ツヤと若々しさ");
        if (q2Answer.answer === "gray_blend") reasons.push("白髪を自然にぼかす");
        if (q2Answer.answer === "design") reasons.push("立体感のあるデザイン");
        if (q2Answer.answer === "mens") reasons.push("メンズ向け");
      }
    }

    // Q3: 優先したいこと
    const q3Answer = answers.find((a) => a.questionId === 3);
    if (q3Answer && typeof q3Answer.answer === "string") {
      const menuTags = menuConcerns[menu.id] || [];
      if (menuTags.includes(q3Answer.answer)) {
        score += 2;
        
        if (q3Answer.answer === "low_damage") reasons.push("ダメージを抑える");
        if (q3Answer.answer === "budget") reasons.push("予算重視");
        if (q3Answer.answer === "all_in_one") reasons.push("まとめて施術");
        if (q3Answer.answer === "scalp_care") reasons.push("頭皮ケア重視");
      }
    }

    // Q4: ご来店
    const q4Answer = answers.find((a) => a.questionId === 4);
    if (q4Answer && typeof q4Answer.answer === "string") {
      if (q4Answer.answer === "first" && menu.audience.includes("ご新規")) {
        score += 2;
        reasons.push("初めてのお客様限定");
      }
      if (q4Answer.answer === "male" && menu.audience.includes("男性")) {
        score += 3;
        reasons.push("メンズ専用メニュー");
      }
    }

    // Q5: 滞在可能時間
    const q5Answer = answers.find((a) => a.questionId === 5);
    if (q5Answer && typeof q5Answer.answer === "string") {
      const allowedTime = parseInt(q5Answer.answer);
      if (menu.duration_max_est <= allowedTime) {
        score += 2;
        reasons.push(`${allowedTime}分以内で完了`);
      } else {
        score -= 2; // ペナルティ
      }
    }

    // 人気メニューにボーナス
    if (menu.tags.includes("人気No.1")) score += 1;
    if (menu.tags.includes("人気No.2")) score += 0.5;

    return {
      ...menu,
      score,
      reason: reasons.length > 0 ? reasons.join("・") : "おすすめメニューです"
    };
  });

  // スコア順にソート
  scored.sort((a, b) => b.score - a.score);

  // 上位3件を取得
  let topMenus = scored.filter((m) => m.score > 0).slice(0, 3);

  // 0件の場合は時間制約を緩和
  if (topMenus.length === 0) {
    const relaxed = scored.map((menu) => {
      const q5Answer = answers.find((a) => a.questionId === 5);
      if (q5Answer && typeof q5Answer.answer === "string") {
        const allowedTime = parseInt(q5Answer.answer);
        if (menu.duration_max_est > allowedTime) {
          return { ...menu, score: menu.score + 2 }; // ペナルティ解除
        }
      }
      return menu;
    });
    
    relaxed.sort((a, b) => b.score - a.score);
    topMenus = relaxed.slice(0, 2);
  }

  return topMenus;
}
