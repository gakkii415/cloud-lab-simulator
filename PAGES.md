# GitHub Pages — v2

Pages用の静的ファイルはリポジトリ直下の index.html と assets/ に保存済みです。

## 状態

2026-09-12: GitHub Pages有効化時に HTTP 422: Your current plan does not support GitHub Pages for this repository. が返されました。非公開リポジトリを維持しています。Pagesは未公開です。

## 再ビルド

```sh
pnpm exec vite build --config vite.pages.config.ts
```

`.pages-output/` の内容をルートの公開ファイルに反映してコミットしてください。アプリ本体は `app/page.tsx` を共有します。
