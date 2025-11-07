// src/lib/imageConfig.ts
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

// 安定表示のサムネイルAPI（<img>/<Image>どちらでもOK）
export function buildDriveImageUrl(fileIdOrUrl: string, width = DRIVE_DEFAULT_WIDTH): string {
  const id = extractFileId(fileIdOrUrl);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w${width}` : "";
}

export const imageUrls = {
  hero: {
    // ← 新リンクに差し替え
    main: buildDriveImageUrl(
      "https://drive.google.com/file/d/1HQJQKeISNQJrRFcuKoXahc8FMbtuFPBu/view?usp=drive_link"
    ),
  },
};
