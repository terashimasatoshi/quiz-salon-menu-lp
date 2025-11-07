/**
 * 画像設定ファイル
 * 
 * Googleドライブの画像を使用する場合：
 * 1. Googleドライブで画像を右クリック → 「共有」→「リンクを知っている全員」に変更
 * 2. 共有リンクをコピー（例：https://drive.google.com/file/d/FILE_ID/view?usp=sharing）
 * 3. FILE_ID部分を抽出して、convertGoogleDriveUrl関数に渡す
 * 
 * または、直接ダイレクトリンクを使用：
 * https://drive.google.com/uc?export=view&id=FILE_ID
 */

// GoogleドライブのファイルIDを埋め込み用URLに変換
export function convertGoogleDriveUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

// 共有リンクからファイルIDを抽出
export function extractFileIdFromUrl(shareUrl: string): string | null {
  const match = shareUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

// 画像URL設定
export const imageUrls = {
  // ヒーローセクション
  hero: {
    //main: "https://images.unsplash.com/photo-1543965170-e3d16958f280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzYyMTYxNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    // Googleドライブを使用する場合は、以下のようにファイルIDを指定
    main: convertGoogleDriveUrl("1qmrnPNK0cWKYC9WmKS3_d7liU7RRPbdU"),
  },

  // ブランドセクション
  brand: {
    treatment: "https://images.unsplash.com/photo-1761864293811-d6e937225df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwYmVhdXR5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MjE2MTY2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    // Googleドライブの例：
    // treatment: convertGoogleDriveUrl("YOUR_FILE_ID_HERE"),
  },

  // オプション：追加の画像
  additional: {
    salon1: "https://images.unsplash.com/photo-1760038548850-bfc356d88b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIxNjE2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    salon2: "https://images.unsplash.com/photo-1611920629515-3f76f8c36b37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9ufGVufDF8fHx8MTc2MjE2MDA1MXww&ixlib=rb-4.1.0&q=80&w=1080",
  }
};

// 使用例：
// Googleドライブの共有リンクから画像URLを取得
// const shareUrl = "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing";
// const fileId = extractFileIdFromUrl(shareUrl);
// const imageUrl = fileId ? convertGoogleDriveUrl(fileId) : "";
