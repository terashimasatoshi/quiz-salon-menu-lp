/**
 * imageConfig.ts（Drive対応・追補版）
 * 共有URL/ファイルIDどちらでもOK。thumbnail方式で安定表示。
 */

const DRIVE_DEFAULT_WIDTH = 2000;

export function extractFileId(input: string): string | null {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{10,}$/.test(input)) return input;
  const m1 = input.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m1?.[1]) return m1[1];
  const m2 = input.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2?.[1]) return m2[1];
  return null;
}

/** Driveの安定表示URL（thumbnail API） */
export function buildDriveImageUrl(fileIdOrUrl: string, width = DRIVE_DEFAULT_WIDTH): string {
  const id = extractFileId(fileIdOrUrl);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w${width}` : "";
}

/** 必要なら直接表示版（参考） */
// export function buildDriveViewUrl(fileIdOrUrl: string): string {
//   const id = extractFileId(fileIdOrUrl);
//   return id ? `https://drive.google.com/uc?export=view&id=${id}` : "";
// }

/**
 * 画像URL定義
 * - hero/main：既存のヒーロー
 * - brand/treatment：前回のブランド画像
 * - brand/secondary：今回いただいた新リンク（用途：ブランド差し替えや別セクションに）
 */
export const imageUrls = {
  hero: {
    main: buildDriveImageUrl("https://drive.google.com/file/d/1dO-xtNQ2Ypt18i9K7vzG1ebvP90mNMPF/view?usp=sharing"),
  },
  brand: {
    treatment: buildDriveImageUrl("https://drive.google.com/file/d/1AGnqpsp5KPsvyq-OhphgOPGh2jF_SI4I/view?usp=sharing"),
    // ← NEW：今回のリンクを追加（用途に応じてこちらを使ってください）
    secondary: buildDriveImageUrl("https://drive.google.com/file/d/1dO-xtNQ2Ypt18i9K7vzG1ebvP90mNMPF/view?usp=sharing"),
  },
  additional: {
    // 必要ならここに他の画像を足していけます
  },
};
