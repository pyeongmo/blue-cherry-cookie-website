<script setup>
import youtubeIcon from '../assets/icon-youtube.svg';
import instagramIcon from '../assets/icon-instagram.svg';

defineProps({
  platform: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const getIcon = (platform) => {
  if (platform.toLowerCase() === 'youtube') return youtubeIcon.src;
  if (platform.toLowerCase() === 'instagram') return instagramIcon.src;
  return null;
};

const getPlatformColor = (platform) => {
  if (platform.toLowerCase() === 'youtube') return 'hover:bg-red-600';
  if (platform.toLowerCase() === 'instagram') return 'hover:bg-pink-600';
  return 'hover:bg-brand-accent';
};
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 group"
    :class="getPlatformColor(platform)"
  >
    <img
      v-if="getIcon(platform)"
      :src="getIcon(platform)"
      :alt="platform"
      class="w-6 h-6 mr-3 invert brightness-0 filter transition-all"
    />
    <span v-else class="mr-2">🔗</span>
    {{ platform }}
  </a>
</template>
