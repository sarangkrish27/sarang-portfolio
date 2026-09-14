<script setup>
import { useReveal } from '../composables/useReveal'
import projects from '../data/projects.yaml'

const el = useReveal()
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap reveal" ref="el">
      <h2 class="section-label">Projects</h2>

      <div v-if="!projects || !projects.length" class="projects__empty">
        No projects yet — add an entry to <code>src/data/projects.yaml</code> and it'll show up here.
      </div>

      <div v-else class="projects__grid">
        <article
          v-for="p in projects"
          :key="p.id"
          class="project card"
          :class="{ 'project--featured': p.featured }"
        >
          <div class="project__image">
            <img v-if="p.image" :src="p.image" :alt="p.title" />
            <div v-else class="project__image-fallback">{{ p.title.slice(0, 2).toUpperCase() }}</div>
          </div>

          <div class="project__body">
            <div class="project__top">
              <h3 class="project__title">{{ p.title }}</h3>
              <span v-if="p.status" class="project__status">{{ p.status }}</span>
            </div>

            <p class="project__desc">{{ p.description }}</p>

            <div v-if="p.tags && p.tags.length" class="project__tags">
              <span v-for="t in p.tags" :key="t" class="project__tag">{{ t }}</span>
            </div>

            <div class="project__links">
              <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="btn btn-outline btn--sm">Repo</a>
              <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener" class="btn btn--sm">Live demo</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}

.project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project:hover {
  transform: translate(-3px, -3px);
  box-shadow: 7px 7px 0 var(--ink);
}

.project--featured { border-color: var(--ink); }

.project__image {
  aspect-ratio: 16 / 9;
  border-bottom: 2px solid var(--ink);
  background: var(--mint);
  display: flex;
  align-items: center;
  justify-content: center;
}
.project__image img { width: 100%; height: 100%; object-fit: cover; }
.project__image-fallback {
  font-family: var(--font-pixel);
  font-size: 1.6rem;
  color: var(--ink);
  opacity: 0.55;
}

.project__body {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.project__top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.project__title {
  font-size: 1.2rem;
  font-weight: 700;
}

.project__status {
  font-family: var(--font-hand);
  font-size: 1rem;
  color: var(--ink-soft);
  white-space: nowrap;
}

.project__desc {
  color: var(--ink-soft);
  line-height: 1.6;
  font-size: 0.97rem;
  flex: 1;
}

.project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.project__tag {
  font-size: 0.78rem;
  font-weight: 600;
  background: var(--bg);
  border: 1.5px solid var(--line-strong);
  border-radius: 3px;
  padding: 3px 9px;
}

.project__links {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

.btn--sm {
  padding: 8px 16px;
  font-size: 0.85rem;
  box-shadow: var(--shadow-hard-sm);
}
.btn--sm:hover { box-shadow: 5px 5px 0 var(--ink); }

.projects__empty {
  font-family: var(--font-hand);
  font-size: 1.2rem;
  color: var(--ink-soft);
}
</style>
