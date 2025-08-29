# Password Generator (React Native + Expo)

Gerador de senhas simples e bonito, feito com React Native (Expo).
Permite escolher o tamanho (4–32), copia para a área de transferência.

## ✨ Funcionalidades

* Geração de senhas fortes com pelo menos:
    * 1 minúscula, 1 maiúscula, 1 dígito e 1 símbolo.
* Controle de tamanho (4 → 32) via slider com botões - e +.
* Botões: GENERATE, CLEAR (limpa campo) e COPY (desabilita quando não há senha ou durante cópia).


## 🏗️ Estrutura do App

```cmd
Pass-Generator:.
│   .gitignore
│   app.json
│   babel.config.js
│   index.ts
│   package.json
│   README.md
│   tsconfig.json
│
├───.expo
│       devices.json
│       README.md
│
├───.idea
│       .gitignore
│       modules.xml
│       pass-generator.iml
│       vcs.xml
│       workspace.xml
│
├───assets
│   │   adaptive-icon.png
│   │   favicon.png
│   │   icon.png
│   │   splash-icon.png
│   │
│   ├───fonts
│   │       Glitch.otf
│   │
│   └───img
│           cadeado-aberto.png
│           cadeado-fechado.png
│           celular.png
│
├───src
│   ├───app
│   │       App.tsx
│   │
│   ├───screens
│   │   └───Home
│   │           Home.tsx
│   │
│   ├───shared
│   │   ├───components
│   │   │   ├───Button
│   │   │   │       Button.tsx
│   │   │   │
│   │   │   ├───Logo
│   │   │   │       Logo.tsx
│   │   │   │       LogoStyles.tsx
│   │   │   │
│   │   │   ├───SenhaInput
│   │   │   │       SenhaInput.tsx
│   │   │   │       SenhaInputStyles.tsx
│   │   │   │
│   │   │   └───ValueRange
│   │   │           ValueRange.tsx
│   │   │           ValueRangeStyles.tsx
│   │   │
│   │   ├───interfaces
│   │   │       SenhaInput.interfaces.tsx
│   │   │
│   │   └───services
│   │           passwordService.ts
│   │
│   └───types
│           images.d.ts
│
└───styles
        globalStyles.ts
```

## 🚀 Como rodar

```cmd 
npm i
npm run start
```

## 📄 Licença

MIT — faça bom uso. 🙌

## 👤 Autor

![Created By](https://avatars.githubusercontent.com/u/53544561?v=4)
<small>Development by **Rodrigo Rangel**</small>

<div>
<a href="https://hangell.org" target="_blank"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" target="_blank"></a>
  <a href="https://play.google.com/store/apps/dev?id=5606456325281613718" target="_blank"><img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" target="_blank"></a>
  <a href="https://www.youtube.com/channel/UC8_zG7RFM2aMhI-p-6zmixw" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
  <a href="https://www.facebook.com/hangell.org" target="_blank"><img src="	https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/rodrigo-rangel-a80810170" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
