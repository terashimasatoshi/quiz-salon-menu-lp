/**
 * 画像設定（Google Drive対応・完全版）
 * - 共有URLでもファイルIDでもOK
 * - <img> / next/image どちらでも使える安定形式（thumbnail）を使用
 * - 画像サイズは sz=wXXXX で調整（実表示幅＋少し余裕が目安）
 */

// ====== 設定値（必要に応じて調整）======
const DRIVE_DEFAULT_WIDTH = 2000; // デスクトップ想定
const DRIVE_MOBILE_WIDTH = 1080;  // モバイル想定（必要なら使い分け可）

// ====== ユーティリティ ======
/** 共有URLや埋め込みURLから Drive の fileId を抽出 */
export function extractFileId(input: string): string | null {
  if (!input) return null;

  // もし既に fileId (英数・_・- で長め) が渡ってきた場合はそのまま返す
  if (/^[a-zA-Z0-9_-]{10,}$/.test(input)) return input;

  // /d/<id>/ パターン（例: https://drive.google.com/file/d/<id>/view）
  const m1 = input.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m1?.[1]) return m1[1];

  // id= パラメータ系（念のため）
  const m2 = input.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2?.[1]) return m2[1];

  return null;
}

/** Driveの安定表示URL（thumbnail API）を生成 */
export function buildDriveImageUrl(fileIdOrUrl: string, width = DRIVE_DEFAULT_WIDTH): string {
  const id = extractFileId(fileIdOrUrl);
  if (!id) return ""; // 不正URL対策（空文字を返す）
  // thumbnail は画像として直接返ってくるため <img> / next/image で安定
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
}

/** （必要なら）直接表示用：uc?export=view 版 */
export function buildDriveViewUrl(fileIdOrUrl: string): string {
  const id = extractFileId(fileIdOrUrl);
  if (!id) return "";
  return `https://drive.google.com/uc?export=view&id=${id}`;
}

// ====== 画像URL定義 ======
// あなたの共有リンク：
// ヒーロー: https://drive.google.com/file/d/1qmrnPNK0cWKYC9WmKS3_d7liU7RRPbdU/view?usp=sharing
// ブランド(treatment): https://drive.google.com/file/d/1AGnqpsp5KPsvyq-OhphgOPGh2jF_SI4I/view?usp=sharing

export const imageUrls = {
  hero: {
    // デスクトップ想定で少し大きめ（w=2000）
    main: buildDriveImageUrl("https://drive.google.com/file/d/1qmrnPNK0cWKYC9WmKS3_d7liU7RRPbdU/view?usp=sharing", DRIVE_DEFAULT_WIDTH),
    // 例：モバイル向けが必要なら ↓ を使い分け（コンポーネント側で分岐）
    // mainMobile: buildDriveImageUrl("1qmrnPNK0cWKYC9WmKS3_d7liU7RRPbdU", DRIVE_MOBILE_WIDTH),
  },
  brand: {
    treatment: buildDriveImageUrl("https://drive.google.com/file/d/1AGnqpsp5KPsvyq-OhphgOPGh2jF_SI4I/view?usp=sharing", DRIVE_DEFAULT_WIDTH),
  },
  additional: {
    // サンプル（外部CDNのままでもOK）
    salon1: "https://images.unsplash.com/photo-1760038548850-bfc356d88b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    salon2: "https://images.unsplash.com/photo-1611920629515-3f76f8c36b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
};

// ====== 使用例 ======
// <img src={imageUrls.hero.main} alt="Hero" />
// <Image src={imageUrls.hero.main} alt="Hero" fill priority sizes="100vw" />
