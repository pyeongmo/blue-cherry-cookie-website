<script setup>
import logoIcon from '../assets/blue-cherry-cookie-icon.png';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'GIGS', href: '/gigs' },
  { name: 'SONGS', href: '/songs' },
];
</script>

<template>
  <header class="border-b border-brand-grey py-6 px-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center transition-all">
        <!-- Mobile Icon -->
        <img :src="logoIcon.src" alt="BLUE CHERRY COOKIE" class="h-10 block md:hidden" />
        <!-- Desktop Text -->
        <span class="text-2xl font-headline font-bold text-white hover:text-brand-cookie transition-colors hidden md:block">
          BLUE CHERRY COOKIE
        </span>
      </a>

      <nav>
        <ul class="flex space-x-8 font-headline font-medium tracking-wide">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="hover:text-brand-accent transition-colors"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
