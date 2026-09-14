<script setup>
const links = [
  { label: 'Email', href: 'mailto:sarangkrish27@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/sarangkrish27' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarang-balakrishnan-11ba69308/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@sarang.mp4' },
]
</script>

<template>
  <footer id="contact" class="footer">
    <div class="wrap footer__inner">
      <div>
        <p class="footer__hand">Let's talk</p>
        <p class="footer__line">Open to internships, collaborations, and interesting problems.</p>
      </div>

      <div class="footer__links">
        <a v-for="l in links" :key="l.label" :href="l.href" target="_blank" rel="noopener" class="footer__link">
          {{ l.label }}
        </a>
      </div>
    </div>
    <div class="wrap footer__bottom">
      <span>© {{ new Date().getFullYear() }} Sarang</span>
      <span>Built with Vue</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 72px 0 28px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--line);
}

.footer__hand {
  font-family: var(--font-hand);
  font-size: 2rem;
}

.footer__line {
  margin-top: 6px;
  color: var(--ink-soft);
  max-width: 40ch;
}

.footer__links {
  display: flex;
  gap: 24px;
}

.footer__link {
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border-color 0.15s ease;
}
.footer__link:hover { border-color: var(--ink); }

.footer__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  font-size: 0.85rem;
  color: var(--ink-soft);
}
</style>
