<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>
<template>
    <a class="skip" href="#main">Skip to content</a>
    <header class="header shell">
        <RouterLink to="/" class="brand" aria-label="Sarang home">SARANG<span class="brand-dot">®</span><small>DEVELOPER
                & WRITER</small></RouterLink>
        <button class="menu-toggle" @click="open = !open" :aria-expanded="open" aria-controls="navigation">{{ open ?
            'CLOSE −' : 'MENU +' }}</button>
        <nav id="navigation" :class="{ open }" aria-label="Main navigation">
            <RouterLink to="/#work">WORK</RouterLink>
            <RouterLink to="/#about">ABOUT</RouterLink>
            <RouterLink to="/#skills">SKILLS</RouterLink>
            <RouterLink to="/blogs" :class="{ active: route.path.startsWith('/blog') }">JOURNAL</RouterLink>
            <RouterLink to="/#contact">CONTACT</RouterLink>
        </nav>
        <a class="button header-cta" href="mailto:sarangkrish27@gmail.com">LET’S TALK <span>↗</span></a>
    </header>
    <main id="main">
        <RouterView />
    </main>
    <footer id="contact" class="shell footer">
        <div class="eyebrow">HAVE AN INTERESTING PROBLEM?</div>
        <a class="contact-title" href="mailto:sarangkrish27@gmail.com">LET’S BUILD<br>SOMETHING.<span>↗</span></a>
        <div class="footer-details">
            <p>Open to internships, collaborations,<br>and interesting problems.</p><a
                href="mailto:sarangkrish27@gmail.com">sarangkrish27@gmail.com ↗</a>
        </div>
        <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} SARANG</span>
            <div><a href="https://github.com/sarangkrish27" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a
                    href="https://www.linkedin.com/in/sarang-balakrishnan-11ba69308/" target="_blank"
                    rel="noopener noreferrer">LINKEDIN ↗</a><a href="https://www.youtube.com/@sarang.mp4"
                    target="_blank" rel="noopener noreferrer">YOUTUBE ↗</a></div><span>BUILT WITH VUE. ALWAYS
                LEARNING.</span>
        </div>
    </footer>
</template>
