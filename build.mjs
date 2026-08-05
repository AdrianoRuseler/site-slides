import { execSync } from 'node:child_process'
import { readdirSync, rmSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

// Nome do repositório = primeiro segmento do caminho no GitHub Pages.
// Em CI usamos a variável do GitHub; localmente caímos no padrão 'iiot-slides'.
const REPO = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'iiot-slides'
const DECKS_DIR = 'decks'
const OUT_DIR = 'dist'

// Limpa saída anterior
if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true })

// Descobre os decks (cada subpasta de decks/ com um slides.md)
const decks = readdirSync(DECKS_DIR).filter((name) => {
  const p = join(DECKS_DIR, name)
  return statSync(p).isDirectory() && existsSync(join(p, 'slides.md'))
})

if (decks.length === 0) {
  console.error('Nenhum deck encontrado em decks/*/slides.md')
  process.exit(1)
}

console.log(`Buildando ${decks.length} deck(s): ${decks.join(', ')}`)

for (const deck of decks) {
  const entry = join(DECKS_DIR, deck, 'slides.md')
  const base = `/${REPO}/${deck}/`
  const out = resolve(OUT_DIR, deck) // absoluto: slidev resolve --out relativo ao slides.md
  console.log(`\n▶ ${deck}  (base ${base})`)
  execSync(`npx slidev build ${entry} --base ${base} --out ${out}`, {
    stdio: 'inherit',
  })
}

// Gera uma landing page simples em dist/index.html listando os decks
const links = decks
  .map((d) => `    <li><a href="./${d}/">${d}</a></li>`)
  .join('\n')

const landing = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>IIoT Slides</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 640px; margin: 4rem auto; padding: 0 1rem; }
    h1 { margin-bottom: 0.25rem; }
    ul { list-style: none; padding: 0; }
    li { margin: 0.5rem 0; }
    a { display: block; padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 8px; text-decoration: none; color: #0366d6; }
    a:hover { background: #f6f8fa; }
  </style>
</head>
<body>
  <h1>IIoT Slides</h1>
  <p>Selecione uma apresentação:</p>
  <ul>
${links}
  </ul>
</body>
</html>
`

writeFileSync(join(OUT_DIR, 'index.html'), landing)
console.log(`\n✓ Landing page gerada em ${OUT_DIR}/index.html`)
console.log('✓ Build concluído.')
