## 前提

* Node.js 12.x
* java 1.8 以上
* awscli

## 環境構築

CLIのインストール
```
$ npm install -g @aws-amplify/cli
```

[この辺を参考に](https://amplify-sns.workshop.aws/00_prerequisites/20_install_and_configs.html)、設定はよしなに
```
$ amplify configure
```

今回は実装済みのモジュールを動かします
```
$ git clone git@github.com:ishizukayusuke/amplify-demo.git
$ cd amplify-demo

# nuxt課題がベースなのでyarn
$ yarn
```

## amplify触ってみる

### 初期化
初期化。既存のモジュール使っているので、設定はいろいろ省略されるかも
```
$ amplify init

Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? → No
? Enter a name for the project → amplify
? Enter a name for the environment → production
? Choose yourY default editor: → None
? Choose the type of app that you're building → javascript

Please tell us about your project

? What javascript framework are you using → none
? Source Directory Path: → src (デフォルト)
? Distribution Directory Path: → dist (デフォルト)
? Build Command: → npm run-script build (デフォルト)
? Start Command: → npm run-script start (デフォルト)
? Do you want to use an AWS profile? → Yes
? Please choose the profile you want to use → default
```

### 認証の追加
Cognitoが裏で動いている
```
$ amplify add auth

Do you want to use the default authentication and security configuration? → Default configuration

How do you want users to be able to sign in? → Username

Do you want to configure advanced settings? → No, I am done.

Successfully added resource amplify9fbdb8f1 locally

```

```
$ amplify status

Current Environment: production

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Auth     | amplify9fbdb8f1 | Create    | awscloudformation |
```

クラウドへの反映。
```
$ amplify push
Do you want to update code for your updated GraphQL API → No
```

これはいらんかも。
```
$ yarn add  aws-amplify aws-amplify-vue graphql
```

### API追加

```
$ amplify add api

Scanning for plugins...
Plugin scan successful
? Please select from one of the below mentioned services: → GraphQL
? Provide API name: → ArticleGql
? Choose the default authorization type for the API → Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API → No, I am done
.
? Do you have an annotated GraphQL schema? → No
? Do you want a guided schema creation? → No
? Provide a custom type name → Article
```

一から作った場合、↓のタイミングで  
「.amplify/backend/schema.graphql (モデル定義)」  
「ingerfaces/api/API.ts (リクエスト・レスポンスオブジェクト的な)」  
が生成される

```
$ amplify mock api

? Choose the code generation language target → typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions
src/graphql/**/*.ts → src/graphql/**/*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mu
tations and subscriptions → Yes
? Enter maximum statement depth [increase from default if your schema is deepl
y nested] → 3
? Enter the file name for the generated code → src/interfaces/api/API.ts
? Do you want to generate code for your newly created GraphQL API → Yes
```

一から作った場合、↓のタイミングで  
「./graphql/**.ts (クエリ)」  
```
$ amplify push

? Do you want to update code for your updated GraphQL API → Yes
? Do you want to generate GraphQL statements (queries, mutations and subscript
ion) based on your schema types?
This will overwrite your current graphql queries, mutations and subscriptions → No
```

ログインから試してみましょう
```
http://localhost:4000/signin
```

気が済んだら作成したリソースを削除しましょう
```
$ amplify delete
```