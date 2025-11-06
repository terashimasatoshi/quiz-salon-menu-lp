# HAIR&MAKE peace - 診断つき予約誘導LP

ゲーム感覚の診断機能を備えた、髪質改善サロンの予約誘導ランディングページです。

## 🎨 画像の変更方法

画像はGoogleドライブまたは任意のURLで管理できます。

### Googleドライブの画像を使用する手順

1. **Googleドライブに画像をアップロード**
   - 画像ファイルをGoogleドライブにアップロード

2. **共有設定を変更**
   - 画像ファイルを右クリック → 「共有」をクリック
   - 「リンクを知っている全員」に変更
   - 「完了」をクリック

3. **共有リンクをコピー**
   - 「リンクをコピー」をクリック
   - リンクの形式：`https://drive.google.com/file/d/xxxxxxxxxx/view?usp=sharing`

4. **ファイルIDを抽出**
   - `/d/` と `/view` の間の文字列がファイルID
   - 例：`https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing`
   - ファイルID：`1a2b3c4d5e6f7g8h9i0j`

5. **`/config/images.ts` を編集**

```typescript
import { convertGoogleDriveUrl } from "../config/images";

export const imageUrls = {
  hero: {
    // ファイルIDを指定
    main: convertGoogleDriveUrl("1a2b3c4d5e6f7g8h9i0j"),
  },
  brand: {
    treatment: convertGoogleDriveUrl("2b3c4d5e6f7g8h9i0j1k"),
  }
};
```

### 直接URLを使用する場合

```typescript
export const imageUrls = {
  hero: {
    main: "https://example.com/your-image.jpg",
  },
  brand: {
    treatment: "https://example.com/another-image.jpg",
  }
};
```

## 📝 画像の用途

- **hero.main**: ヒーローセクションのメイン画像（推奨サイズ：1920x1440px）
- **brand.treatment**: ブランドセクションの画像（推奨サイズ：1600x1200px）

## 🔧 画像設定ファイルの場所

すべての画像URLは `/config/images.ts` で一元管理されています。

```
/config/images.ts  ← ここで画像URLを変更
```

## 💡 ヒント

- 画像は高解像度（1920px以上）を推奨
- ファイル形式：JPG、PNG、WebP
- Googleドライブの画像は公開設定にする必要があります
- 複数の画像を一度に変更する場合は、`imageUrls` オブジェクト内の各項目を更新

## 🎯 機能

- **インタラクティブ診断**：5問の質問で最適なメニューを提案
- **スマートマッチング**：ユーザーの悩み・希望に基づいたメニュー推奨
- **メニュー比較**：最大3件のメニューを横並びで比較
- **Hot Pepper Beauty連携**：予約ページへ直接遷移
- **レスポンシブデザイン**：PC・モバイル両対応
- **アニメーション**：滑らかなトランジションとインタラクション

## 📱 対応画面サイズ

- デスクトップ：1440px
- モバイル：390px
- タブレット：768px-1024px

## 🎨 デザインテーマ

オーガニック・やさしさ・信頼を軸とした、落ち着いたニュアンスカラー（オリーブ/ストーン/アンバー）を使用。
