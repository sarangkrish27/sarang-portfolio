<script setup>
import { computed, ref } from 'vue'
import { getPosts } from '../lib/blogs'
const query = ref('')
const tag = ref('All')
const posts = getPosts()
const tags = ['All', ...new Set(posts.map(p=>p.tag).filter(Boolean))]
const filtered = computed(()=>posts.filter(p=>(tag.value==='All'||p.tag===tag.value)&&`${p.title} ${p.excerpt} ${p.body}`.toLowerCase().includes(query.value.toLowerCase().trim())))
</script>
<template><section class="shell journal-page"><p class="eyebrow">THE PERSONAL JOURNAL / SARANG</p><h1>NOTES FROM<br><span>THE PROCESS.</span></h1><p class="page-intro">Things I build. Problems I run into. Lessons worth writing down.</p><div class="journal-controls"><div class="filters" aria-label="Filter by category"><button v-for="item in tags" :key="item" :class="{selected:tag===item}" :aria-pressed="tag===item" @click="tag=item">{{item}}</button></div><label class="search"><span class="sr-only">Search articles</span><input type="search" v-model="query" placeholder="Search the journal…"><span aria-hidden="true">↗</span></label></div><p class="eyebrow result-count" aria-live="polite">{{filtered.length}} {{filtered.length===1?'STORY':'STORIES'}}</p><RouterLink v-for="post in filtered" :key="post.slug" :to="'/blog/'+post.slug" class="featured-post"><div class="post-visual"><img :src="post.banner" :alt="post.title"></div><div class="featured-copy"><p class="eyebrow">{{post.tag}} / {{post.dateLabel}} / {{post.readingTime}} MIN READ</p><h2>{{post.title}}</h2><p>{{post.excerpt}}</p><span class="text-link">READ THE STORY ↗</span></div></RouterLink><div v-if="!filtered.length" class="empty"><h2>NO MATCHES. KEEP LOOKING.</h2><p>Try another search or reset your filters.</p><button class="button" @click="query='';tag='All'">RESET SEARCH ↗</button></div></section></template>
