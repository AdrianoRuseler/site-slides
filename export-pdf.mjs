import { execSync } from 'node:child_process'
import { readdirSync, rmSync, mkdirSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

/**
 * Exporta cada deck (decks/<deck>/slides.md) para pdf/<deck>.pdf.
 * Requer playwright-chromium instalado (ver workflow / package.json).
 */
const DECKS_DIR = 'decks'
const OUT_DIR = 'pdf'

if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true })
mkdirSync(OUT_DIR, { recursive: true })

const decks = readdirSync(DECKS_DIR).filter((name) => {
  const p = join(DECKS_DIR, name)
  return statSync(p).isDirectory() && existsSync(join(p, 'slides.md'))
})

if (decks.length === 0) {
  console.error(`Nenhum deck encontrado em ${DECKS_DIR}/*/slides.md`)
  process.exit(1)
}

console.log(`Exportando ${decks.length} deck(s) para PDF: ${decks.join(', ')}`)

for (const deck of decks) {
  const entry = join(DECKS_DIR, deck, 'slides.md')
  const output = resolve(OUT_DIR, `${deck}.pdf`) // absoluto por segurança
  console.log(`\n▶ ${deck} → pdf/${deck}.pdf`)
  execSync(
    `npx slidev export ${entry} --output ${output} --format pdf --timeout 60000 --wait-until networkidle`,
    { stdio: 'inherit' },
  )
}

console.log('\n✓ PDFs gerados em pdf/')
