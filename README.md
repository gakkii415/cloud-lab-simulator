# Cloud Lab — v1

AWS / Google Cloud の基本概念を操作しながら学ぶクラウドシミュレータ。

[アプリを開く](https://cloud-lab-simulator.mea1105.chatgpt.site)

## 現在の内容

ミッション1：サーバー追加 → データベース接続 → サーバー増設 → 負荷分散。
AWS / Google Cloudの名称切替に対応。料金・負荷・安全性の表示は学習用の仮の値で、実際の料金見積もりや安全性の評価ではありません。本物のAWS/GCPリソースは作成しません。

## 開発

Node.js 22.13以上とpackage.json指定のpnpmを使用します。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

公開先はSitesです。GitHubへの反映だけではSitesへ自動公開されません。

## ソース

公開済みSites v1（元コミット cdd9cf9d6ec46704cc985727edf860930244b57b）のソースを保存しています。
