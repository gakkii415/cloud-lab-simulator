# Cloud Lab — v3

AWS / Google Cloud の基本概念を操作しながら学ぶクラウドシミュレータ。

- [GitHub Pages](https://gakkii415.github.io/cloud-lab-simulator/?v=3)
- [Sites版（v1）](https://cloud-lab-simulator.mea1105.chatgpt.site)

## 現在の内容

ミッション1：サーバー追加 → データベース接続 → サーバー増設 → 負荷分散。
AWS / Google Cloudの名称切替に対応。料金・負荷・安全性は学習用の仮の値です。本物のAWS/GCPリソースは作成しません。

## 開発

Node.js 22.13以上とpackage.json指定のpnpmを使用します。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

GitHub Pagesの再ビルド手順は [PAGES.md](PAGES.md) を参照してください。Sitesへの公開は別途必要です。

## バージョン

- v1: Sites公開版のソースを保存。
- v2: GitHub Pages用の静的ファイルを追加。
- v3: ユーザー承認によりリポジトリを公開し、GitHub Pagesを有効化。
