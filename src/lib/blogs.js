import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import sql from 'highlight.js/lib/languages/sql'
import yaml from 'highlight.js/lib/languages/yaml'
import java from 'highlight.js/lib/languages/java'
import cpp from 'highlight.js/lib/languages/cpp'
import plaintext from 'highlight.js/lib/languages/plaintext'

;[
  ['python', python],
  ['javascript', javascript],
  ['typescript', typescript],
  ['bash', bash],
  ['json', json],
  ['xml', xml],
  ['css', css],
  ['sql', sql],
  ['yaml', yaml],
  ['java', java],
  ['cpp', cpp],
  ['plaintext', plaintext],
].forEach(([name, lang]) => hljs.registerLanguage(name, lang))

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }),
  { gfm: true },
)

// Every .md file in /blogs, loaded as raw text at build time.
const files = import.meta.glob('../../blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: text }

  const meta = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^(["'])(.*)\1$/, '$2')
    if (key) meta[key] = value
  }
  return { meta, body: match[2] }
}

function parseDate(str) {
  const m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(str || '')
  if (!m) return null
  // Build as a local date so the day never shifts with timezones.
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
}

function formatDate(date) {
  if (!date) return ''
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function resolveBanner(banner) {
  if (!banner) return ''
  if (/^(https?:)?\/\//.test(banner) || banner.startsWith('data:')) return banner
  const base = import.meta.env.BASE_URL
  // "first-blog.png"       -> public/banners/first-blog.png
  // "/images/x.png"        -> public/images/x.png
  return banner.includes('/')
    ? base + banner.replace(/^\/+/, '')
    : base + 'banners/' + banner
}

function makeExcerpt(body) {
  const firstParagraph =
    body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p && !/^(#|```|>|[-*]\s|\d+\.\s|!\[)/.test(p)) || ''
  const plain = firstParagraph
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
  return plain.length > 140 ? plain.slice(0, 137).trimEnd() + '…' : plain
}

const all = Object.entries(files).map(([path, raw]) => {
  const slug = path.split('/').pop().replace(/\.md$/i, '')
  const { meta, body } = parseFrontmatter(raw)
  const date = parseDate(meta.date)
  const words = body.trim().split(/\s+/).filter(Boolean).length

  return {
    slug,
    title: meta.title || slug.replace(/-/g, ' '),
    tag: meta.tag || '',
    excerpt: meta.excerpt || makeExcerpt(body),
    banner: resolveBanner(meta.banner),
    draft: String(meta.draft).toLowerCase() === 'true',
    date,
    dateLabel: formatDate(date),
    readingTime: Math.max(1, Math.ceil(words / 200)),
    body,
  }
})

const published = all
  .filter((p) => !p.draft)
  .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0))

const htmlCache = new Map()

export function getPosts() {
  return published
}

export function getPost(slug) {
  return published.find((p) => p.slug === slug) || null
}

export function renderPost(post) {
  if (!htmlCache.has(post.slug)) {
    htmlCache.set(post.slug, marked.parse(post.body))
  }
  return htmlCache.get(post.slug)
}
