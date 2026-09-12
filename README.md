# Cloud Lab — v4

AWS / Google Cloud の基本概念を操作しながら学ぶクラウドシミュレータ。

- [GitHub Pages](https://gakkii415.github.io/cloud-lab-simulator/?v=4)
- [Sites版（v1）](https://cloud-lab-simulator.mea1105.chatgpt.site)

## 現在の内容

11ミッション・各3課題：Web、動画、ゲーム、ネットショップ、ファイル共有、AI画像処理、気象データ、工場IoT、社内ネットワーク、災害復旧、コスト削減。

- Lv.1：選択肢から操作し、構成と考え方を学ぶ。
- Lv.2：サービス選択、リソース作成・編集・削除、設定、動作テストを行う実習コンソール。
- AWS / Google Cloudを切替可能。進捗はクラウド・レベル・ミッション別にブラウザへ保存。

本物のAWS/GCPリソースは作成せず、課金・実通信も行いません。コストは教材用の架空単位です。実際の管理画面・権限・ネットワーク・障害を簡略化したシミュレータであり、名称の対応は機能の完全な互換性を意味しません。

## 開発

Node.js 22.13以上とpackage.json指定のpnpmを使用します。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

GitHub Pagesの再ビルド手順は [PAGES.md](PAGES.md) を参照してください。Sitesへの公開は別途必要です。

教材ロジックの回帰テスト：Node.js 24で `node tests/lab.test.mjs`。型チェック：`pnpm exec tsc --noEmit --incremental false`。

## バージョン

- v1: Sites公開版のソースを保存。
- v2: GitHub Pages用の静的ファイルを追加。
- v3: ユーザー承認によりリポジトリを公開し、GitHub Pagesを有効化。
- v4: 11ミッション・33課題、2段階の学習レベル、設定検証と進捗保存を追加。
