# GitHub Pages — v4

URL: https://gakkii415.github.io/cloud-lab-simulator/?v=4

公開元: main ブランチのルート。リポジトリとPagesサイトは公開です。

## 再ビルド

```sh
pnpm exec vite build --config vite.pages.config.ts
```

`.pages-output/` の index.html、assets/、favicon.svg をリポジトリ直下へ反映し、mainへコミットしてください。`.nojekyll` を維持します。mainへの反映でGitHub Pagesが公開処理を実行します。アプリ本体は `app/page.tsx` をSites版と共有します。

## 履歴

v2では非公開リポジトリのプラン制限によりPages有効化が失敗しました。v3でユーザーの承認を受けて公開リポジトリへ変更し、Pagesの有効化が成功しました。
