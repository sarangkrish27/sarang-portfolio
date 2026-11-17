<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getPost, renderPost } from '../lib/blogs'
import Missing from './Missing.vue'
import 'highlight.js/styles/github-dark.css'
const route = useRoute()
const post = computed(()=>getPost(route.params.slug))
watchEffect(()=>{document.title=post.value ? `${post.value.title} — Sarang` : 'Page not found — Sarang'})
</script>
<template><article v-if="post" class="article shell"><RouterLink class="text-link" to="/blogs">↖ BACK TO THE JOURNAL</RouterLink><header class="article-header"><p class="eyebrow">{{post.tag}} / {{post.dateLabel}} / {{post.readingTime}} MIN READ</p><h1>{{post.title}}</h1><p>{{post.excerpt}}</p><div class="author"><img src="/images/profile.png" alt=""><span>WRITTEN BY SARANG BALAKRISHNAN</span></div></header><img v-if="post.banner" class="article-banner" :src="post.banner" :alt="post.title"><div class="prose" v-html="renderPost(post)"></div><div class="article-end"><p class="eyebrow">THANKS FOR READING.</p><RouterLink class="text-link" to="/blogs">↖ MORE FROM THE JOURNAL</RouterLink></div></article><Missing v-else /></template>
