<script setup lang="ts">
import soundCheckCover from '../assets/songs/sound-check.webp'
import soundCheckLyrics from '../data/lyrics/sound-check'
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
  <article class="song-detail sound-check">
    <SongDetailHeader
      :cover="soundCheckCover.src"
      :title="song.title"
      :release-date="song.releaseDate"
      :credits="{ lyrics: '남가범', compose: '남가범', arrange: 'BLUE CHERRY COOKIE' }"
    />
    <SongLyrics :lyric-groups="soundCheckLyrics" />
  </article>
</template>

<style scoped>
.song-detail {
  --accent: #0047ab;
  --soft: rgba(0, 71, 171, 0.18);
  max-width: 72rem;
  margin: auto;
  padding: 2.5rem 1rem 5rem;
  color: white;
  background: radial-gradient(circle at 85% 10%, var(--soft), transparent 32rem);
}
</style>
