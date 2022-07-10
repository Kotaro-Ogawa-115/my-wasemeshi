# 俺のワセメシ

## 概要
React・Typescriptの個人学習で作成中のwebアプリケーションです。

現状ではモックから受け取ったデータを表示するだけですが、今後はデータの新規追加・編集・削除機能や、ログイン機能を実装する予定です。

## 使用技術
- node v16.15.0
- Docker Compose v2.6.0
- Docker version 20.10.16

package.jsonの依存関係は以下の通りです。
```
my-wasemeshi@0.1.0
├── @material-ui/core@4.12.4
├── @material-ui/icons@4.11.3
├── @testing-library/jest-dom@5.16.4
├── @testing-library/react@13.3.0
├── @testing-library/user-event@13.5.0
├── @types/jest@27.5.2
├── @types/node@16.11.39
├── @types/react-dom@18.0.5
├── @types/react@18.0.12
├── @typescript-eslint/eslint-plugin@4.33.0 extraneous
├── axios@0.27.2
├── css-loader@6.7.1
├── msw@0.42.1
├── react-dom@18.1.0
├── react-router-dom@6.3.0
├── react-scripts@5.0.1
├── react@18.1.0
├── standard@17.0.0
├── style-loader@3.3.1
├── ts-standard@11.0.0
├── typescript@4.7.3
├── web-vitals@2.1.4
└── yarn@1.22.19
```

### 備考

- APIの作成が未着手のため[Mock Service Worker](https://github.com/mswjs/msw)を用いてモックしています。
- テキストフォーマッターは[standardJS](https://standardjs.com/readme-ja.html#typescript)ベースの`ts-standard`を用いています。
- 変数の命名はリーダブルコードを元に行っていますが、リファクタリングが追いついていない部分があります。
- material-ui@4.12.4がreact@16.8.0に対応してない問題が未解決です(2022/07/10追記)

## 実行方法
docker およびdocker composeがインストールされていることが前提です

1. リポジトリをクローンする
2. `cd my-wasemeshi`でディレクトリ を移動する
3. `docker　compose build`　を実行する。
4. `docker compose up -d`などで起動する
5. [localhost:3000](http://localhost:3000)にアクセスする

