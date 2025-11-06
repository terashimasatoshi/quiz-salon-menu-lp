# Quiz-Based Salon Menu LP

HYBRID SALON peace 花堂店向けのクイズ形式メニュー診断ランディングページ

## プロジェクト概要

お客様の髪の悩みに応じて最適なメニューを提案するインタラクティブなクイズ形式のランディングページです。

## 技術スタック

- React 18.3.1
- Vite 6.3.5
- TypeScript
- Tailwind CSS
- shadcn/ui コンポーネント
- Radix UI

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## Vercelへのデプロイ

このプロジェクトはVercelで簡単にデプロイできます：

1. GitHubリポジトリにコードをプッシュ
2. Vercelダッシュボードで「New Project」をクリック
3. GitHubリポジトリをインポート
4. デプロイ設定は自動検出されます
5. 「Deploy」をクリック

## カスタムドメインの設定

Vercelダッシュボードで以下の設定が可能です：
- カスタムドメインの追加
- SSL証明書の自動発行
- DNS設定

## プロジェクト構造

```
src/
├── components/     # UIコンポーネント
│   ├── Quiz.tsx   # クイズコンポーネント
│   ├── Results.tsx # 結果表示
│   └── ...
├── data/          # クイズとメニューデータ
├── types/         # TypeScript型定義
└── utils/         # ユーティリティ関数
```

## ライセンス

Private - HYBRID SALON peace

## オリジナルデザイン

Figmaデザイン: https://www.figma.com/design/lWBH6mQsS3zw4PgjSHWhy3/Quiz-Based-Salon-Menu-LP
