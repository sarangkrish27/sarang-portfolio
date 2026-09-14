<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
]

const active = ref('')
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8

  let current = ''
  for (const link of links) {
    const section = document.getElementById(link.id)
    if (!section) continue
    const rect = section.getBoundingClientRect()
    if (rect.top <= 120 && rect.bottom > 120) {
      current = link.id
    }
  }
  active.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="wrap nav__inner">
      <a href="#hero" class="nav__brand" @click.prevent="scrollTo('hero')">SARANG</a>
      <nav class="nav__links">
        <button
          v-for="link in links"
          :key="link.id"
          class="nav__link"
          :class="{ 'nav__link--active': active === link.id }"
          @click="scrollTo(link.id)"
        >
          {{ link.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 251, 249, 0.85);
  backdrop-filter: blur(6px);
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}
.nav--scrolled { border-color: var(--ink); }

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav__brand {
  font-family: var(--font-pixel);
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.nav__links {
  display: flex;
  gap: 4px;
}

.nav__link {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink-soft);
  padding: 8px 12px;
  border-radius: 4px;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav__link:hover { color: var(--ink); background: rgba(169, 222, 196, 0.35); }

.nav__link--active {
  color: var(--ink);
  font-weight: 700;
}

@media (max-width: 560px) {
  .nav__links { gap: 0; }
  .nav__link { padding: 8px 8px; font-size: 0.85rem; }
}
</style>
