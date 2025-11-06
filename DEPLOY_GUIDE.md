# GitHub経由Vercelデプロイ手順書

## 📋 前提条件

- GitHubアカウント
- Vercelアカウント（GitHubアカウントで連携可能）
- Gitがインストールされていること

## 🚀 デプロイ手順

### Step 1: GitHubリポジトリの作成

1. GitHubにログイン: https://github.com
2. 右上の「+」→「New repository」をクリック
3. リポジトリ情報を入力:
   - **Repository name**: `quiz-salon-menu-lp` （または任意の名前）
   - **Description**: 「HYBRID SALON peace クイズ式メニュー診断LP」
   - **Visibility**: Private（推奨）またはPublic
   - ⚠️ 「Add a README file」のチェックは**外す**
4. 「Create repository」をクリック

### Step 2: ローカルでGit初期化とプッシュ

プロジェクトフォルダで以下のコマンドを実行:

```bash
# プロジェクトフォルダに移動
cd /path/to/quiz-based-salon-menu-lp

# Gitリポジトリを初期化
git init

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: Quiz-based salon menu LP"

# GitHubリポジトリをリモートとして追加（URLは作成したリポジトリのURL）
git remote add origin https://github.com/YOUR_USERNAME/quiz-salon-menu-lp.git

# メインブランチに変更（Gitのデフォルトがmasterの場合）
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

⚠️ **注意**: `YOUR_USERNAME`は実際のGitHubユーザー名に置き換えてください

### Step 3: Vercelでプロジェクトをインポート

1. Vercelにログイン: https://vercel.com
2. ダッシュボードで「Add New...」→「Project」をクリック
3. 「Import Git Repository」セクションで、作成したGitHubリポジトリを選択
4. 初回の場合、GitHubとの連携を許可
5. プロジェクト設定画面で以下を確認:
   - **Project Name**: 自動入力される（変更可能）
   - **Framework Preset**: Vite（自動検出）
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`（自動）
   - **Output Directory**: `dist`（自動）
   - **Install Command**: `npm install`（自動）
6. 環境変数が必要な場合は「Environment Variables」で追加
7. 「Deploy」をクリック

### Step 4: デプロイ完了とURL確認

- デプロイが完了すると、Vercelが自動生成したURLが表示されます
- 例: `https://quiz-salon-menu-lp.vercel.app`
- このURLでサイトにアクセス可能

## 🌐 カスタムドメインの設定（オプション）

### hybridsalon-peace.com のサブドメインを使用する場合

1. Vercelプロジェクトダッシュボードで「Settings」タブをクリック
2. 左メニューから「Domains」を選択
3. 「Add」ボタンをクリック
4. ドメイン名を入力（例: `quiz.hybridsalon-peace.com`）
5. 「Add」をクリック
6. DNS設定の指示が表示されるので、ドメイン管理画面で設定:

#### Aレコードの設定例:
```
Type: A
Name: quiz
Value: 76.76.21.21
```

#### CNAMEレコードの設定例:
```
Type: CNAME
Name: quiz
Value: cname.vercel-dns.com
```

7. DNS伝播を待つ（最大48時間、通常は数分〜数時間）
8. SSL証明書が自動発行される

## 🔄 更新とデプロイ

コードを更新してGitHubにプッシュすると、Vercelが自動的に再デプロイします：

```bash
# 変更をステージング
git add .

# コミット
git commit -m "Update: 変更内容の説明"

# GitHubにプッシュ（自動デプロイが始まる）
git push origin main
```

## 📊 デプロイ状況の確認

- Vercelダッシュボードの「Deployments」タブで確認
- デプロイログを確認可能
- エラーが発生した場合、詳細なログが表示される

## ⚙️ 便利な設定

### プレビューデプロイメント
- プルリクエストごとに自動でプレビュー環境が作成される
- `main`以外のブランチもプレビューURLが発行される

### 環境変数の管理
1. Vercelダッシュボード → Settings → Environment Variables
2. 本番環境、開発環境、プレビュー環境ごとに設定可能

### デプロイ通知
1. Settings → Git → Deploy Hooks
2. Slackやその他のツールに通知可能

## 🐛 トラブルシューティング

### デプロイが失敗する場合

1. **ビルドエラー**:
   - Vercelのログを確認
   - ローカルで`npm run build`を実行してエラーを確認

2. **依存関係エラー**:
   - `package.json`の依存関係を確認
   - ローカルで`npm install`を実行

3. **環境変数エラー**:
   - 必要な環境変数がVercelで設定されているか確認

### DNS設定が反映されない場合

```bash
# DNS伝播を確認
nslookup quiz.hybridsalon-peace.com

# または
dig quiz.hybridsalon-peace.com
```

## 📝 チェックリスト

デプロイ前の確認事項:
- [ ] `.gitignore`に`node_modules`が含まれている
- [ ] `package.json`の依存関係が正しい
- [ ] ローカルで`npm run build`が成功する
- [ ] 環境変数が必要な場合、Vercelで設定済み
- [ ] カスタムドメインを使う場合、DNS設定完了

## 🔗 参考リンク

- Vercel公式ドキュメント: https://vercel.com/docs
- Viteデプロイガイド: https://vitejs.dev/guide/static-deploy.html
- GitHub連携: https://vercel.com/docs/git/vercel-for-github

---

**作成日**: 2025年11月3日
**プロジェクト**: HYBRID SALON peace クイズ式メニュー診断LP
