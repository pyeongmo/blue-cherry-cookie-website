<script setup>
defineProps({
  song: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a 
    :href="`/songs/${song.slug}`"
    class="group block border border-brand-grey bg-black rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-cookie hover:shadow-[0_0_20px_rgba(245,222,179,0.2)]"
  >
    <div class="aspect-square overflow-hidden">
      <img 
        :src="song.coverImage" 
        :alt="song.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div class="p-6">
      <div class="text-xs text-brand-accent font-mono mb-2">{{ song.releaseDate }}</div>
      <h3 class="text-2xl font-bold mb-3 group-hover:text-brand-cookie transition-colors">{{ song.title }}</h3>
      <p class="text-gray-400 text-sm line-clamp-2">
        {{ song.description }}
      </p>
    </div>
  </a>
</template>
