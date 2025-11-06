# クイックスタートガイド

このプロジェクトをGitHub経由でVercelにデプロイする手順です。

## 📦 必要なもの

- GitHubアカウント
- Vercelアカウント（GitHubアカウントで連携可能）
- Git（インストール済みであること）

## 🚀 デプロイの流れ（3ステップ）

### ステップ1: GitHubリポジトリを作成

1. https://github.com にアクセスしてログイン
2. 右上の「+」→「New repository」をクリック
3. 以下の情報を入力:
   - **Repository name**: `quiz-salon-menu-lp`
   - **Description**: 「HYBRID SALON peace クイズ式メニュー診断LP」
   - **Visibility**: Private（推奨）
   - ⚠️ 「Add a README file」のチェックは**外す**
4. 「Create repository」をクリック
5. リポジトリURLをコピー（例: `https://github.com/YOUR_USERNAME/quiz-salon-menu-lp.git`）

### ステップ2: コードをGitHubにプッシュ

プロジェクトフォルダで以下のコマンドを実行:

```bash
# プロジェクトフォルダに移動
cd quiz-salon-menu-lp

# GitHubリポジトリを追加（YOUR_USERNAMEは自分のGitHubユーザー名に置き換え）
git remote add origin https://github.com/YOUR_USERNAME/quiz-salon-menu-lp.git

# GitHubにプッシュ
git push -u origin main
```

💡 **Tip**: GitHubのユーザー名とパスワードを聞かれたら、パスワードの代わりに**Personal Access Token**を使用してください。

Personal Access Tokenの作成方法:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
2. 「repo」にチェックを入れて生成
3. 生成されたトークンをコピーして、パスワードの代わりに使用

### ステップ3: Vercelでデプロイ

1. https://vercel.com にアクセスしてログイン（GitHubアカウントで連携推奨）
2. ダッシュボードで「Add New...」→「Project」をクリック
3. 「Import Git Repository」で先ほど作成したGitHubリポジトリを選択
4. プロジェクト設定を確認（自動検出されるので変更不要）:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 「Deploy」をクリック

デプロイが完了すると、VercelがURLを自動生成します！
例: `https://quiz-salon-menu-lp.vercel.app`

## 🌐 カスタムドメイン設定（オプション）

`quiz.hybridsalon-peace.com` のようなカスタムドメインを設定したい場合:

1. Vercelプロジェクトページで「Settings」→「Domains」
2. ドメイン名を入力（例: `quiz.hybridsalon-peace.com`）
3. 表示されるDNS設定をドメイン管理画面で設定
4. DNS伝播を待つ（通常数分〜数時間）

詳細は `DEPLOY_GUIDE.md` を参照してください。

## 🔄 更新方法

コードを更新した後、GitHubにプッシュすると自動的にVercelが再デプロイします:

```bash
git add .
git commit -m "Update: 変更内容"
git push origin main
```

## 📞 トラブルシューティング

### GitHubにプッシュできない
- Personal Access Tokenを使用していますか？
- リモートURLが正しく設定されていますか？ → `git remote -v` で確認

### Vercelのビルドが失敗する
- ローカルで `npm install` と `npm run build` を実行してエラーを確認
- Vercelのログを確認

### さらに詳しい情報が必要な場合
`DEPLOY_GUIDE.md` に詳細な手順とトラブルシューティング情報があります。

---

**準備完了！** GitHubリポジトリの作成から始めましょう 🚀
