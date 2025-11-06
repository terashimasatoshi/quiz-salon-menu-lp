export const questions = [
  {
    id: 1,
    question: "いちばん気になることは？",
    subtitle: "複数選択可",
    type: "multiple" as const,
    options: [
      { value: "frizz", label: "くせ毛・うねり", icon: "🌊" },
      { value: "damage", label: "ダメージ", icon: "⚡" },
      { value: "gray", label: "白髪", icon: "✨" },
      { value: "scalp", label: "頭皮の刺激", icon: "🌿" },
      { value: "time", label: "とにかく時短", icon: "⏱️" },
      { value: "cost", label: "コスパ", icon: "💰" },
      { value: "relax", label: "リラックス", icon: "🧘" }
    ]
  },
  {
    id: 2,
    question: "仕上がりイメージは？",
    subtitle: "1つ選択",
    type: "single" as const,
    options: [
      { value: "straight", label: "自然なストレート", icon: "💫" },
      { value: "shine", label: "ツヤと若々しさ", icon: "✨" },
      { value: "gray_blend", label: "白髪を自然にぼかす", icon: "🎨" },
      { value: "design", label: "立体感カラー", icon: "🌈" },
      { value: "mens", label: "メンズの清潔感", icon: "👔" }
    ]
  },
  {
    id: 3,
    question: "いま優先したいこと���？",
    subtitle: "1つ選択",
    type: "single" as const,
    options: [
      { value: "low_damage", label: "ダメージを抑える", icon: "🛡️" },
      { value: "budget", label: "予算重視", icon: "💰" },
      { value: "all_in_one", label: "一度で全部済ませたい", icon: "⚡" },
      { value: "scalp_care", label: "頭皮ケア", icon: "🌿" }
    ]
  },
  {
    id: 4,
    question: "ご来店は？",
    subtitle: "1つ選択",
    type: "single" as const,
    options: [
      { value: "first", label: "はじめて", icon: "🎉" },
      { value: "repeat", label: "2回目以降", icon: "🔄" },
      { value: "male", label: "男性", icon: "👨" }
    ]
  },
  {
    id: 5,
    question: "滞在可能時間は？",
    subtitle: "1つ選択",
    type: "single" as const,
    options: [
      { value: "60", label: "〜60分", icon: "⏰" },
      { value: "120", label: "〜120分", icon: "⏰" },
      { value: "150", label: "〜150分", icon: "⏰" },
      { value: "180", label: "〜180分", icon: "⏰" },
      { value: "240", label: "〜240分", icon: "⏰" }
    ]
  }
];
