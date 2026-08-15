<script setup lang="ts">
import logoIcon from '../assets/blue-cherry-cookie-icon.png'

const navLinks = [
  { name: '공연', href: '/gigs' },
  { name: '노래', href: '/songs' },
]
</script>

<template>
  <header class="border-brand-grey border-b px-4 py-6">
    <div class="mx-auto flex max-w-6xl items-center justify-between">
      <a href="/" class="flex items-center transition-all">
        <!-- Mobile Icon -->
        <img :src="logoIcon.src" alt="BLUE CHERRY COOKIE" class="block h-10 md:hidden" />
        <!-- Desktop Text -->
        <span
          class="font-headline hover:text-brand-cookie hidden text-2xl font-bold text-white transition-colors md:block"
        >
          BLUE CHERRY COOKIE
        </span>
      </a>

      <nav>
        <ul class="font-headline flex space-x-8 font-medium">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="hover:text-brand-accent transition-colors">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
