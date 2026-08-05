# Slidev Slides

Coleção de apresentações **Demo** feitas com [Slidev](https://sli.dev), cada deck servido em seu próprio subcaminho no GitHub Pages.

## 🌐 Publicação

- Índice: **https://adrianoruseler.github.io/site-slides/**
- Demo: **https://adrianoruseler.github.io/site-slides/demo/**


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
mkdir decks/demo2
echo "# Meu novo deck" > decks/demo2/slides.md
```

O `build.mjs` detecta automaticamente qualquer `decks/*/slides.md` — não precisa editar nada.

## 💻 Desenvolvimento local

```bash
pnpm install
pnpm slidev decks/demo/slides.md --open   # edita um deck específico
```

## 🏗️ Build de tudo

```bash
pnpm build        # gera dist/ com todos os decks + index.html
```

Deploy automático via GitHub Actions a cada push na `main`.
