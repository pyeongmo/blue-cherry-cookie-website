<script setup lang="ts">
import soundCheckCover from '../assets/songs/sound-check.webp'
import lineCover from '../assets/songs/line.webp'

interface Song {
  slug: string
  title: string
  releaseDate: string
  coverImage?: string
}

const { song } = defineProps<{
  song: Song
}>()

const coverImages: Record<string, string> = {
  'sound-check': soundCheckCover.src,
  line: lineCover.src,
}
</script>

<template>
  <a
    :href="`/songs/${song.slug}`"
    class="group border-brand-grey hover:border-brand-cookie block overflow-hidden rounded-xl border bg-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,222,179,0.2)]"
  >
    <div class="aspect-square overflow-hidden">
      <img
        :src="coverImages[song.slug] || song.coverImage"
        :alt="song.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div class="p-6">
      <div class="text-brand-accent mb-2 font-mono text-xs">{{ song.releaseDate }}</div>
      <h3 class="group-hover:text-brand-cookie mb-3 text-2xl font-bold transition-colors">
        {{ song.title }}
      </h3>
    </div>
  </a>
</template>
