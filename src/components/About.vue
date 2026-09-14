<script setup>
import { useReveal } from '../composables/useReveal'
import profilePhoto from '../assets/images/profile.png'

const el = useReveal()
</script>

<template>
  <section id="about" class="section">
    <div class="wrap reveal" ref="el">
      <h2 class="section-label">About me</h2>

      <div class="about">
        <div class="about__photo-frame">
          <img :src="profilePhoto" alt="Portrait of Sarang" />
        </div>

        <div class="about__text">
          <p>
            I'm a BS Data Science student at IIT Madras, expecting to graduate in 2028.
            I like building things end-to-end — from a Flask API and a Postgres schema
            up through a Vue interface — and I'm steadily pulling that same full-stack
            habit into AI/ML work.
          </p>
          <p>
            Outside coursework, I teach programming on my own YouTube channel and
            spend a fair amount of time on side projects that force me to actually
            ship something, not just prototype it.
          </p>

          <dl class="about__facts">
            <div class="about__fact">
              <dt>Based in</dt>
              <dd>Kerala, India</dd>
            </div>
            <div class="about__fact">
              <dt>Studying</dt>
              <dd>BS Data Science, IIT Madras</dd>
            </div>
            <div class="about__fact">
              <dt>Focused on</dt>
              <dd>AI / ML</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 48px;
  align-items: start;
}

.about__photo-frame {
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 6px;
  box-shadow: var(--shadow-hard);
  padding: 10px;
  transform: rotate(-2deg);
}

.about__photo-frame img {
  border-radius: 3px;
}

.about__text p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ink-soft);
  max-width: 62ch;
}
.about__text p + p { margin-top: 16px; }

.about__facts {
  display: flex;
  gap: 32px;
  margin: 32px 0 0;
  padding-top: 24px;
  border-top: 2px solid var(--line);
  flex-wrap: wrap;
}

.about__fact dt {
  font-family: var(--font-hand);
  font-size: 1.05rem;
  color: var(--ink-soft);
}
.about__fact dd {
  margin: 2px 0 0;
  font-weight: 600;
}

@media (max-width: 640px) {
  .about { grid-template-columns: 1fr; }
  .about__photo-frame { width: 180px; }
}
</style>
