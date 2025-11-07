/**
 * imageConfig.ts — Google Drive共有URL対応（枠に収まる表示用）
 * - 共有URL/ファイルIDどちらでもOK
 * - 安定表示の thumbnail API を使用（<img>/<Image> どちらも可）
 */

const DRIVE_DEFAULT_WIDTH = 2000;

// 共有URL or 埋め込みURLから fileId を抽出
export function extractFileId(input: string): string | null {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{10,}$/.test(input)) return input;
  const m1 = input.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m1?.[1]) return m1[1];
  const m2 = input.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2?.[1]) return m2[1];
  return null;
}

// Driveの安定表示URL（画像として返る）
export function buildDriveImageUrl(fileIdOrUrl: string, width = DRIVE_DEFAULT_WIDTH): string {
  const id = extractFileId(fileIdOrUrl);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w${width}` : "";
}

/** 画像URL定義（必要に応じて追加OK） */
export const imageUrls = {
  hero: {
    // ヒーロー（以前のロゴ）
    main: buildDriveImageUrl("https://drive.google.com/file/d/1qmrnPNK0cWKYC9WmKS3_d7liU7RRPbdU/view?usp=sharing"),
  },
  brand: {
    // ブランド：treatment（前回）
    treatment: buildDriveImageUrl("https://drive.google.com/file/d/1AGnqpsp5KPsvyq-OhphgOPGh2jF_SI4I/view?usp=sharing"),
    // ブランド：今回“枠に収めたい”画像（必ず収まる表示は②のコンポーネント側で制御）
    side: buildDriveImageUrl("https://drive.google.com/file/d/10pfdq6Tm8w7dtVBmzIhQesz6d3t6IGXV/view?usp=sharing"),
  },
};
