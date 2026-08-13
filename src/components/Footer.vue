<script setup>
import youtubeIcon from '../assets/icon-youtube.svg';
import instagramIcon from '../assets/icon-instagram.svg';

const getPlatformColor = (platform) => {
  if (platform.toLowerCase() === 'youtube') return 'hover:bg-red-600';
  if (platform.toLowerCase() === 'instagram') return 'hover:bg-pink-600';
  return 'hover:bg-brand-accent';
};

const getIcon = (platform) => {
  if (platform.toLowerCase() === 'youtube') return youtubeIcon.src;
  if (platform.toLowerCase() === 'instagram') return instagramIcon.src;
  return null;
};
</script>


<template>
  <footer class="border-t border-brand-grey py-8 px-4 mt-auto">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-sm text-gray-400">
        &copy; {{ new Date().getFullYear() }} BLUE CHERRY COOKIE. All rights reserved.
      </div>

      <div class="flex space-x-6 text-sm">
        <a
            href="https://instagram.com/bluecherrycookie_band"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-brand-accent rounded-lg transition-all duration-300 transform hover:scale-105 group p-2"
            :class="getPlatformColor('instagram')"
        >
          <img
              :src="getIcon('instagram')"
              alt="instagram"
              class="w-4 h-4 invert brightness-0 filter transition-all"
          />
        </a>
        <a
            href="https://youtube.com/@bluecherrycookie"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-brand-accent rounded-lg transition-all duration-300 transform hover:scale-105 group p-2"
            :class="getPlatformColor('youtube')"
        >
          <img
              :src="getIcon('youtube')"
              alt="youtube"
              class="w-4 h-4 invert brightness-0 filter transition-all"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
