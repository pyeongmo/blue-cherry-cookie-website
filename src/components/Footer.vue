<script setup lang="ts">
import youtubeIcon from '../assets/icon-youtube.svg'
import instagramIcon from '../assets/icon-instagram.svg'

const getPlatformColor = (platform: string) => {
  if (platform.toLowerCase() === 'youtube') return 'hover:bg-red-600'
  if (platform.toLowerCase() === 'instagram') return 'hover:bg-pink-600'
  return 'hover:bg-brand-accent'
}
</script>

<template>
  <footer class="border-brand-grey mt-auto border-t px-4 py-8">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
      <div class="text-sm text-gray-400">
        &copy; {{ new Date().getFullYear() }} BLUE CHERRY COOKIE. All rights reserved.
      </div>

      <div class="flex space-x-6 text-sm">
        <a
          href="https://instagram.com/bluecherrycookie_band"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-brand-accent group transform rounded-lg p-2 transition-all duration-300 hover:scale-105"
          :class="getPlatformColor('instagram')"
        >
          <img
            :src="instagramIcon.src"
            alt="instagram"
            class="h-4 w-4 brightness-0 invert filter transition-all"
          />
        </a>
        <a
          href="https://youtube.com/@bluecherrycookie"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-brand-accent group transform rounded-lg p-2 transition-all duration-300 hover:scale-105"
          :class="getPlatformColor('youtube')"
        >
          <img
            :src="youtubeIcon.src"
            alt="youtube"
            class="h-4 w-4 brightness-0 invert filter transition-all"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
