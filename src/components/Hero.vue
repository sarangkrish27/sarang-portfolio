<script setup>
import { ref, onMounted } from 'vue'

const name = 'SARANG'
const played = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { played.value = true })
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="wrap hero__inner">
      <p class="hero__prelabel">My name is</p>

      <h1 class="hero__name" :class="{ 'hero__name--play': played }" aria-label="Sarang">
        <span
          v-for="(letter, i) in name.split('')"
          :key="i"
          class="hero__letter"
          :style="{ transitionDelay: `${i * 70}ms` }"
        >{{ letter }}</span>
      </h1>

      <div class="hero__note hero__note--mint" :class="{ 'hero__note--play': played }">
        Make ML models
      </div>

      <div class="hero__note hero__note--yellow" :class="{ 'hero__note--play': played }">
        Data Science student
      </div>

      <p class="hero__tagline">Building full-stack tools with a data &amp; ML lean.</p>

     <a href="mailto:sarang@gmail.com" class="btn">
  <svg class="btn__icon" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
    <path d="M1 3h14v10H1V3zm1 1v1l6 4 6-4V4H2zm12 2.5-6 4-6-4V12h12V6.5z"/>
  </svg>
  Contact me
</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
}

.hero__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__prelabel {
  font-family: var(--font-hand);
  font-size: 1.4rem;
  color: var(--ink-soft);
  margin-bottom: 8px;
}

.hero__name {
  font-family: var(--font-pixel);
  font-size: clamp(2.4rem, 8vw, 4.6rem);
  line-height: 1.2;
  letter-spacing: 4px;
}

.hero__letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hero__name--play .hero__letter {
  opacity: 1;
  transform: translateY(0);
}

.hero__note {
  position: absolute;
  font-family: var(--font-hand);
  font-size: 1.15rem;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s;
}
.hero__note--play { opacity: 1; }

.hero__note--mint {
  background: var(--mint);
  top: 18px;
  right: 4%;
  transform: rotate(-4deg) translateY(10px);
}
.hero__note--mint.hero__note--play { transform: rotate(-4deg) translateY(0); }

.hero__note--yellow {
  background: var(--yellow);
  bottom: -6px;
  left: 6%;
  transform: rotate(-3deg) translateY(10px);
}
.hero__note--yellow.hero__note--play { transform: rotate(-3deg) translateY(0); }

.hero__tagline {
  margin-top: 56px;
  font-size: 1.15rem;
  color: var(--ink-soft);
  max-width: 34ch;
}

.hero .btn { margin-top: 28px; }

.btn__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .hero__note { position: static; margin: 10px 6px 0; transform: none !important; }
  .hero { padding-top: 88px; }
}
</style>
