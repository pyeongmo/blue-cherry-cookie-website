<script setup lang="ts">
interface Credits {
  lyrics: string
  compose: string
  arrange: string
}

defineProps<{
  cover: string
  title: string
  releaseDate: string
  credits: Credits
}>()
</script>

<template>
  <a href="/songs" class="font-headline mb-12 inline-block tracking-[.14em] text-(--accent)">
    &#x2190; &#xB178;&#xB798;
  </a>
  <header class="grid items-center gap-10 md:grid-cols-[minmax(18rem,30rem)_1fr] md:gap-20">
    <div class="relative max-w-120 border border-(--accent) shadow-[1rem_1rem_0_var(--soft)]">
      <img :src="cover" :alt="title" class="block aspect-square w-full object-cover" />
    </div>
    <div class="max-w-152">
      <p class="font-headline text-base tracking-[.14em] text-(--accent)">{{ releaseDate }}</p>
      <h1 class="my-4 text-[clamp(4rem,12vw,8rem)] leading-[.82]">{{ title }}</h1>
      <dl class="mt-8 flex flex-wrap gap-5 border-t border-[#333] pt-4">
        <div>
          <dt class="font-mono text-xs text-[#777]">LYRICS</dt>
          <dd class="mt-1 text-(--brand-cookie)">{{ credits.lyrics }}</dd>
        </div>
        <div>
          <dt class="font-mono text-xs text-[#777]">COMPOSE</dt>
          <dd class="mt-1 text-(--brand-cookie)">{{ credits.compose }}</dd>
        </div>
        <div>
          <dt class="font-mono text-xs text-[#777]">ARRANGE</dt>
          <dd class="mt-1 text-(--brand-cookie)">{{ credits.arrange }}</dd>
        </div>
      </dl>
    </div>
  </header>
</template>
