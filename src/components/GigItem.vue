<script setup lang="ts">
import { getGigImageUrl } from '../utils/image'

interface Gig {
  title?: string
  date: string
  time?: string
  location: string
  status: 'upcoming' | 'past'
  posters?: string[]
}

defineProps<{
  gig: Gig
}>()

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return new Date(dateString).toLocaleDateString('ko-KR', options)
}

const displayTitle = (gig: Gig) => gig.title || '제목 미정'
const displayTime = (gig: Gig) => gig.time || '시간 미정'
</script>

<template>
  <div class="border-brand-grey flex flex-col gap-6 rounded-lg border bg-black p-6">
    <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div class="grow">
        <div class="mb-2 flex items-center gap-3">
          <span
            class="rounded px-2 py-1 text-xs font-bold"
            :class="
              gig.status === 'upcoming'
                ? 'bg-brand-accent text-white'
                : 'bg-brand-grey text-gray-400'
            "
          >
            {{ gig.status === 'upcoming' ? 'UPCOMING' : 'PAST' }}
          </span>
          <span class="text-brand-cookie font-mono">{{ formatDate(gig.date) }}</span>
        </div>
        <h3 class="mb-2 text-3xl font-bold">{{ displayTitle(gig) }}</h3>
        <div class="text-lg text-gray-400">
          <span class="mr-6">📍 {{ gig.location }}</span>
          <span>⏰ {{ displayTime(gig) }}</span>
        </div>
      </div>

      <div v-if="gig.status === 'past'" class="flex items-center">
        <span class="rounded border border-gray-700 px-3 py-1 text-sm text-gray-500 italic"
          >종료된 공연</span
        >
      </div>
    </div>

    <!-- Posters Section -->
    <div
      v-if="gig.posters && gig.posters.length > 0"
      class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(poster, index) in gig.posters"
        :key="index"
        class="border-brand-grey group relative aspect-3/4 overflow-hidden rounded-md border"
      >
        <img
          :src="getGigImageUrl(poster)"
          :alt="`${displayTitle(gig)} poster ${index + 1}`"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
