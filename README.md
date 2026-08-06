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
```

```bash
pnpm slidev decks/template/slides.md --open
```

```bash
pnpm slidev decks/demo/slides.md --open   # edita um deck específico
```

```bash
pnpm slidev decks/utfpr/slides.md --open
```

```bash
pnpm slidev decks/layouts/slides.md --open
```

```bash
pnpm slidev decks/unocss/slides.md --open
```

## 🏗️ Build de tudo

```bash
pnpm build        # gera dist/ com todos os decks + index.html
```

## Export PDFs
Pré-requisitos (uma vez só)

O export usa Playwright/Chromium, então antes de rodar pela primeira vez, no seu ambiente local:

```bash
pnpm add -D playwright-chromium   # o pacote que o Slidev importa
npx playwright install chromium   # baixa o binário do navegador
```

```bash
pnpm run export
```

Repare que export depende do arquivo export-pdf.mjs estar na raiz do projeto (o mesmo que percorre decks/*/slides.md). Se você só quisesse exportar um deck específico sem o script, daria para chamar o Slidev direto:

```bash
pnpm slidev export decks/slide01/slides.md --output pdf/slide01.pdf --per-slide --wait-until domcontentloaded --wait 5000
```

Deploy automático via GitHub Actions a cada push na `main`.
