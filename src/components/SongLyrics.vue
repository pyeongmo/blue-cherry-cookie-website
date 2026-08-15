<script setup lang="ts">
import type { LyricGroup } from '../data/lyrics'

defineProps<{
  lyricGroups: LyricGroup[]
}>()
</script>

<template>
  <section class="lyrics">
    <h2>LYRICS</h2>
    <div v-for="(group, groupIndex) in lyricGroups" :key="groupIndex" class="lyric-group">
      <template v-for="(lyric, lyricIndex) in group.lyrics" :key="lyricIndex">
        <p v-if="typeof lyric === 'string'" class="original">{{ lyric }}</p>
        <template v-else>
          <p class="original">{{ lyric.original }}</p>
          <p class="translation">{{ lyric.translation }}</p>
        </template>
      </template>
    </div>
  </section>
</template>

<style scoped>
.lyrics {
  border-top: 1px solid #333;
  margin-top: 7rem;
  padding-top: 3rem;
  text-align: center;
}
.lyrics h2 {
  color: var(--accent);
  font:
    2rem 'Bebas Neue',
    sans-serif;
  letter-spacing: 0.2em;
}
.lyric-group {
  max-width: 42rem;
  margin: 3rem auto 0;
}
.lyric-group + .lyric-group {
  margin-top: 4rem;
}
.original,
.translation {
  white-space: pre-wrap;
  line-height: 2;
  font-size: 1.1rem;
  margin: 0;
}
.translation {
  margin-top: 0.35rem;
  color: var(--accent);
  font-size: 0.95rem;
  font-style: italic;
}
</style>
