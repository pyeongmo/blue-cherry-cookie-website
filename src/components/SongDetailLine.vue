<script setup lang="ts">
import lineCover from '../assets/songs/line.webp'
import lineLyrics from '../data/lyrics/line'
import SongDetailHeader from './SongDetailHeader.vue'
import SongLyrics from './SongLyrics.vue'

defineProps<{
  song: {
    slug: string
    title: string
    releaseDate: string
    coverImage?: string
  }
}>()
</script>

<template>
  <article class="song-detail line-song">
    <SongDetailHeader
      :cover="lineCover.src"
      :title="song.title"
      :release-date="song.releaseDate"
      :credits="{ lyrics: '차민수', compose: '차민수', arrange: 'BLUE CHERRY COOKIE' }"
    />
    <SongLyrics :lyric-groups="lineLyrics" />
  </article>
</template>

<style scoped>
.song-detail {
  --accent: #f5deb3;
  --soft: rgba(245, 222, 179, 0.14);
  max-width: 72rem;
  margin: auto;
  padding: 2.5rem 1rem 5rem;
  color: white;
  background: radial-gradient(circle at 85% 10%, var(--soft), transparent 32rem);
}
</style>
