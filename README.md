# IIoT Slides

Coleção de apresentações sobre **IIoT** feitas com [Slidev](https://sli.dev), cada deck servido em seu próprio subcaminho no GitHub Pages.

## 🌐 Publicação

- Índice: **https://ruseleredu.github.io/iiot-slides/**
- Deck 01: **https://ruseleredu.github.io/iiot-slides/slide01/**
- Deck 02: **https://ruseleredu.github.io/iiot-slides/slide02/**

## 📁 Estrutura

```
decks/
  slide01/slides.md
  slide02/slides.md
build.mjs        # builda todos os decks para dist/<nome>/ + gera índice
```

## ➕ Adicionar um novo deck

Crie uma nova pasta em `decks/` com um `slides.md`:

```bash
mkdir decks/slide03
echo "# Meu novo deck" > decks/slide03/slides.md
```

O `build.mjs` detecta automaticamente qualquer `decks/*/slides.md` — não precisa editar nada.

## 💻 Desenvolvimento local

```bash
pnpm install
pnpm slidev decks/slide01/slides.md --open   # edita um deck específico
```

## 🏗️ Build de tudo

```bash
pnpm build        # gera dist/ com todos os decks + index.html
```

Deploy automático via GitHub Actions a cada push na `main`.
