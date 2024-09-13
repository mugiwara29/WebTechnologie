# React + TypeScript + Vite
# React + TypeScript + Vite

Dieses Template bietet ein minimales Setup, um React in Vite mit HMR und einigen ESLint-Regeln zum Laufen zu bringen.

Derzeit sind zwei offizielle Plugins verfügbar:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) verwendet [Babel](https://babeljs.io/) für Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) verwendet [SWC](https://swc.rs/) für Fast Refresh

## Installation und Nutzung

Folge diesen Schritten, um das Projekt lokal zu installieren und zu starten:

### Voraussetzungen

Stelle sicher, dass du die folgenden Softwarepakete installiert hast:

- [Node.js](https://nodejs.org/) (Version 14 oder höher)
- [npm](https://www.npmjs.com/) (kommt in der Regel mit Node.js)

### Installation

1. **Repository klonen:**

   Klone das Repository auf deinen lokalen Rechner:

   ```bash
   git clone https://github.com/mugiwara29/WebTechnologie.git


In das Projektverzeichnis wechseln:

Wechsel in das Verzeichnis des Projekts:

bash
Code kopieren
cd WebTechnologie
Abhängigkeiten installieren:

Installiere alle benötigten npm-Pakete:

bash
Code kopieren
npm install
Entwicklungsserver starten:

Starte den Entwicklungsserver:

bash
Code kopieren
npm run dev
Der Server wird auf http://localhost:3000 laufen (oder einem anderen Port, falls 3000 bereits belegt ist).


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
