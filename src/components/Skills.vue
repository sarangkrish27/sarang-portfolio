<script setup>
import { useReveal } from '../composables/useReveal'

const el = useReveal()

const groups = [
  { label: 'Languages', tone: 'mint', items: ['Python', 'Java', 'JavaScript'] },
  { label: 'Backend', tone: 'yellow', items: ['Flask', 'PostgreSQL', 'Redis', 'Celery'] },
  { label: 'Frontend', tone: 'sky', items: ['Vue.js'] },
  { label: 'ML / Data', tone: 'mint', items: ['scikit-learn', 'Seaborn', 'Business Analytics'] },
  { label: 'Tools', tone: 'yellow', items: ['Bash', 'Linux', 'Git'] },
]
</script>

<template>
  <section id="skills" class="section">
    <div class="wrap reveal" ref="el">
      <h2 class="section-label">Skills</h2>

      <div class="skills">
        <div v-for="group in groups" :key="group.label" class="skills__group">
          <h3 class="skills__group-label">{{ group.label }}</h3>
          <div class="skills__chips">
            <span
              v-for="item in group.items"
              :key="item"
              class="tag-chip"
              :class="`tag-chip--${group.tone}`"
            >{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 36px;
}

.skills__group-label {
  font-family: var(--font-hand);
  font-size: 1.3rem;
  color: var(--ink-soft);
  margin-bottom: 14px;
}

.skills__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-chip--mint { background: var(--mint); }
.tag-chip--yellow { background: var(--yellow); }
.tag-chip--sky { background: var(--sky); }
</style>
