<script setup lang="ts">
import { computed } from 'vue'
import lineCover from '../assets/songs/line.webp'
import lineLyrics from '../data/lyrics/line'
import soundCheckCover from '../assets/songs/sound-check.webp'
import soundCheckLyrics from '../data/lyrics/sound-check'
import SongDetailHeader from './SongDetailHeader.vue'
import SongLyrics from './SongLyrics.vue'

const songDetails = {
  line: {
    cover: lineCover.src,
    lyrics: lineLyrics,
    credits: { lyrics: '차민수', compose: '차민수', arrange: 'BLUE CHERRY COOKIE' },
  },
  'sound-check': {
    cover: soundCheckCover.src,
    lyrics: soundCheckLyrics,
    credits: { lyrics: '남가범', compose: '남가범', arrange: 'BLUE CHERRY COOKIE' },
  },
} as const

const props = defineProps<{
  song: {
    slug: string
    title: string
    releaseDate: string
    coverImage?: string
  }
}>()

const detail = computed(
  () => songDetails[props.song.slug as keyof typeof songDetails] ?? songDetails.line,
)
</script>

<template>
  <article class="song-detail" :class="song.slug">
    <SongDetailHeader
      :cover="detail.cover"
      :title="song.title"
      :release-date="song.releaseDate"
      :credits="detail.credits"
    />
    <SongLyrics :lyric-groups="detail.lyrics" />
  </article>
</template>

<style scoped>
.song-detail {
  max-width: 72rem;
  margin: auto;
  padding: 2.5rem 1rem 5rem;
  color: white;
  background: radial-gradient(circle at 85% 10%, var(--soft), transparent 32rem);
}

.line {
  --accent: #f5deb3;
  --soft: rgba(245, 222, 179, 0.14);
}

.sound-check {
  --accent: #0047ab;
  --soft: rgba(0, 71, 171, 0.18);
}
</style>
