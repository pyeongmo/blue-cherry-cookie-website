<script setup lang="ts">
import youtubeIcon from '../assets/icon-youtube.svg'
import instagramIcon from '../assets/icon-instagram.svg'

defineProps<{
  platform: 'YouTube' | 'Instagram'
  url: string
}>()

const icons = {
  YouTube: youtubeIcon.src,
  Instagram: instagramIcon.src,
}

const getPlatformColor = (platform: string) => {
  if (platform.toLowerCase() === 'youtube') return 'hover:bg-red-600'
  if (platform.toLowerCase() === 'instagram') return 'hover:bg-pink-600'
  return 'hover:bg-brand-accent'
}
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group inline-flex transform items-center rounded-full px-6 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
    :class="getPlatformColor(platform)"
  >
    <img
      v-if="platform"
      :src="icons[platform]"
      :alt="platform"
      class="mr-3 h-6 w-6 brightness-0 invert filter transition-all"
    />
    <span v-else class="mr-2">🔗</span>
    {{ platform }}
  </a>
</template>
