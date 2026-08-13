<script setup>
defineProps({
  gig: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('ko-KR', options);
};

// Handle images from src/assets
const images = import.meta.glob('../assets/gigs/**/*.{jpg,jpeg,png,webp,svg}', { eager: true });

const getImageUrl = (path) => {
  // Convert /src/assets/gigs/ to ../assets/gigs/ to match glob keys
  const globPath = path.replace('/src/assets/', '../assets/');
  const image = images[globPath];
  if (image) {
    // In Astro/Vite, the default export of an image import is an object with a 'src' property
    return typeof image.default === 'string' ? image.default : image.default?.src || path;
  }
  return path;
};
</script>

<template>
  <div class="border border-brand-grey bg-black p-6 rounded-lg transition-transform hover:border-brand-accent flex flex-col gap-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex-grow">
        <div class="flex items-center gap-3 mb-2">
          <span 
            class="text-xs font-bold px-2 py-1 rounded"
            :class="gig.status === 'upcoming' ? 'bg-brand-accent text-white' : 'bg-brand-grey text-gray-400'"
          >
            {{ gig.status === 'upcoming' ? 'UPCOMING' : 'PAST' }}
          </span>
          <span class="text-brand-cookie font-mono">{{ formatDate(gig.date) }}</span>
        </div>
        <h3 class="text-3xl font-bold mb-2">{{ gig.title }}</h3>
        <div class="text-gray-400 text-lg">
          <span class="mr-6">📍 {{ gig.location }}</span>
          <span>⏰ {{ gig.time }}</span>
        </div>
      </div>
      
      <div v-if="gig.status === 'past'" class="flex items-center">
        <span class="text-gray-500 italic border border-gray-700 px-3 py-1 rounded text-sm">종료된 공연</span>
      </div>
    </div>

    <!-- Posters Section -->
    <div v-if="gig.posters && gig.posters.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      <div 
        v-for="(poster, index) in gig.posters" 
        :key="index"
        class="relative aspect-[3/4] overflow-hidden rounded-md border border-brand-grey group"
      >
        <img 
          :src="getImageUrl(poster)" 
          :alt="`${gig.title} poster ${index + 1}`"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>
