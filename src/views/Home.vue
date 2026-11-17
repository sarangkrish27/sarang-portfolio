<script setup>
import { projects, certificates } from '../data/content'
import { getPosts } from '../lib/blogs'
const latest = getPosts()[0]
const skills = [['Languages', 'Python · Java · JavaScript'], ['Backend', 'Flask · PostgreSQL · Redis · Celery'], ['Frontend', 'Vue.js'], ['ML / Data', 'scikit-learn · Seaborn · Business Analytics'], ['Tools', 'Bash · Linux · Git']]
</script>
<template>
    <section class="hero shell">
        <div class="hero-copy">
            <h1>I BUILD.<br>I LEARN.<br>I <span>SHARE.</span></h1>
            <RouterLink class="text-link" to="/#work">EXPLORE MY WORK <span>↗</span></RouterLink>
        </div>
        <p class="hero-note">SARANG BALAKRISHNAN<br>FULL-STACK DEVELOPER.<br>DATA SCIENCE STUDENT.<br>CURIOUS BY
            DEFAULT.</p>
        <div class="hero-art">
            <div class="orange-block" aria-hidden="true">S.</div><img src="/images/profile.png"
                alt="Sarang Balakrishnan" fetchpriority="high"><span class="photo-label">BASED IN KERALA, INDIA ↗</span>
        </div>
        <div class="hero-stamp" aria-hidden="true">CODE. LEARN. REPEAT.<strong>S↗</strong>IDEAS INTO REAL THINGS</div>
        <div class="hero-bottom eyebrow"><span>PORTFOLIO + PERSONAL JOURNAL</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section id="skills" class="capabilities shell">
        <div class="capability-grid">
            <div class="vertical-label">WHAT I WORK WITH</div>
            <div v-for="(skill, i) in skills" :key="skill[0]" class="capability"><span class="index">0{{ i + 1 }}</span>
                <h3>{{ skill[0] }}</h3>
                <p>{{ skill[1] }}</p>
            </div>
        </div>
        <div class="manifesto">
            <h2>SMALL PROBLEMS.<br>REAL PROJECTS.<br>CONSTANT CURIOSITY.</h2>
            <div>
                <p>From a Flask API to a Vue interface.<br>From raw data to a useful model.<br>I learn by building
                    things that work.</p>
                <RouterLink class="button" to="/#about">MEET THE PERSON BEHIND THE CODE <span>↗</span></RouterLink>
            </div>
        </div>
    </section>
    <section id="work" class="section shell">
        <div class="section-head">
            <div>
                <p class="eyebrow">01 / SELECTED WORK</p>
                <h2>BUILT TO BE USED.</h2>
            </div><span class="eyebrow">4 PROJECTS. REAL PROBLEMS.</span>
        </div>
        <div class="projects">
            <article v-for="(project, i) in projects" :key="project.id" class="project" :class="'project-' + i">
                <div class="project-image"><img :src="project.image" :alt="project.title + ' application screenshot'"
                        loading="lazy"><span class="project-number">0{{ i + 1 }} /</span></div>
                <div class="project-info">
                    <p class="eyebrow">{{ project.type }}</p>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <div class="tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
                    <div class="project-links"><a v-if="project.demo" :href="project.demo" target="_blank"
                            rel="noopener noreferrer">LIVE PROJECT ↗</a><a v-if="project.repo" :href="project.repo"
                            target="_blank" rel="noopener noreferrer">SOURCE CODE ↗</a><span v-if="!project.repo"
                            class="muted">REPOSITORY COMING SOON</span></div>
                </div>
            </article>
        </div>
    </section>
    <section id="about" class="about shell">
        <div class="about-heading">
            <p class="eyebrow">02 / THE PERSON BEHIND THE PROJECTS</p>
            <h2>STUDENT.<br>BUILDER.<br><span>STILL CURIOUS.</span></h2><img src="/sarang-hero.png"
                alt="Illustration of Sarang happily writing code" loading="lazy">
        </div>
        <div class="about-copy">
            <p class="intro">I’m Sarang, a BS Data Science student at IIT Madras. I like making things work, end to end.
            </p>
            <p>From a Flask API and a Postgres schema up through a Vue interface, I enjoy connecting the pieces. I’m
                steadily bringing that same full-stack habit into AI and machine learning.</p>
            <p>Outside coursework, I teach programming on my YouTube channel and work on side projects that push me to
                actually ship something.</p>
            <dl>
                <div>
                    <dt>BASED IN</dt>
                    <dd>Kerala, India</dd>
                </div>
                <div>
                    <dt>STUDYING</dt>
                    <dd>BS Data Science · IIT Madras</dd>
                </div>
                <div>
                    <dt>GRADUATING</dt>
                    <dd>Expected 2028</dd>
                </div>
                <div>
                    <dt>EXPLORING</dt>
                    <dd>AI / ML & full-stack development</dd>
                </div>
            </dl><a class="text-link" href="https://www.youtube.com/@sarang.mp4" target="_blank"
                rel="noopener noreferrer">LEARN WITH ME ON YOUTUBE ↗</a>
        </div>
    </section>
    <section class="section shell certificates">
        <div class="section-head">
            <div>
                <p class="eyebrow">03 / KEEP LEARNING</p>
                <h2>THE FOUNDATIONS.</h2>
            </div><span class="eyebrow">COURSES & CERTIFICATIONS</span>
        </div><a v-for="(cert, i) in certificates" :key="cert.title" :href="cert.link" target="_blank"
            rel="noopener noreferrer" class="certificate"><span class="index">0{{ i + 1 }}</span>
            <div>
                <h3>{{ cert.title }}</h3><span class="eyebrow">{{ cert.issuer }} / {{ cert.year }}</span>
            </div><strong>{{ cert.score }}</strong><span class="cert-arrow" aria-label="Verify certificate">↗</span>
        </a>
    </section>
    <section v-if="latest" class="journal-section shell">
        <div class="section-head">
            <div>
                <p class="eyebrow">04 / NOTES FROM THE PROCESS</p>
                <h2>BUILD. REFLECT. WRITE.</h2>
            </div>
            <RouterLink class="text-link" to="/blogs">ALL WRITING ↗</RouterLink>
        </div>
        <RouterLink :to="'/blog/' + latest.slug" class="featured-post">
            <div class="post-visual"><img :src="latest.banner" :alt="latest.title" loading="lazy"></div>
            <div class="featured-copy">
                <p class="eyebrow">{{ latest.tag }} / {{ latest.dateLabel }} / {{ latest.readingTime }} MIN READ</p>
                <h3>{{ latest.title }}</h3>
                <p>{{ latest.excerpt }}</p><span class="text-link">READ THE STORY ↗</span>
            </div>
        </RouterLink>
    </section>
</template>
