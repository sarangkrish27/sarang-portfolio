<script setup>
import { useReveal } from '../composables/useReveal'
import certifications from '../data/certifications.yaml'

const el = useReveal()
</script>

<template>
  <section id="certificates" class="section">
    <div class="wrap reveal" ref="el">
      <h2 class="section-label">Certificates</h2>

      <div v-if="!certifications || !certifications.length" class="certs__empty">
        No certificates added yet — edit <code>src/data/certifications.yaml</code>.
      </div>

      <ul v-else class="certs">
        <li v-for="c in certifications" :key="c.id" class="cert">
          <div class="cert__main">
            <h3 class="cert__title">{{ c.title }}</h3>
            <p class="cert__issuer">{{ c.issuer }}<span v-if="c.date"> · {{ c.date }}</span></p>
          </div>
          <div class="cert__meta">
            <span v-if="c.credential" class="tag-chip tag-chip--yellow">{{ c.credential }}</span>
            <span v-if="c.score" class="cert__score">{{ c.score }}</span>
            <a v-if="c.link" :href="c.link" target="_blank" rel="noopener" class="cert__link">Verify →</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.certs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 6px;
  padding: 18px 22px;
  box-shadow: var(--shadow-hard-sm);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.cert:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--ink);
}

.cert__title { font-size: 1.1rem; font-weight: 700; }
.cert__issuer { margin-top: 4px; color: var(--ink-soft); font-size: 0.92rem; }

.cert__meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.cert__score {
  font-family: var(--font-hand);
  font-size: 1.3rem;
  font-weight: 700;
}

.cert__link {
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 2px solid var(--ink);
}

.certs__empty {
  font-family: var(--font-hand);
  font-size: 1.2rem;
  color: var(--ink-soft);
}
</style>
