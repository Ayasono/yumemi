# プロジェクト説明

## Vercel でデプロイされています
> https://yumemi-nine.vercel.app/

## プロジェクトのセットアップ

環境変数の設定, RESAS API の API Key の取得が必要です。
```bash
cp .env.example .env
```
それから、`.env` ファイルに API Key を設定してください。
```bash
npm install & npm run dev
```

## 使った技術

- Vue 3
- TypeScript
- Tailwind CSS
- Vue-cli 5

## プロジェクトハイライト

1. コードスタイルの統一
    - `eslint` および `prettier` を使用してコードスタイルを統一します。
    - コードをコミットする前に `eslint` でチェックし、`prettier` でコードをフォーマットします。

2. 機密な API キーをコード内で公開しない
    - 機密情報を保存するために `.env` ファイルを使用します。

3. 重複したリクエストを防ぐため、リクエスト結果をキャッシュします。

4. リクエストを送信する際、読み込み状態を表示し、ユーザーにデータの読み込み中であることを通知します。
