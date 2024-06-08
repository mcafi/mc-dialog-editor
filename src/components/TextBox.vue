<template>
  <div
    class="rounded-lg m-4 bg-sky-800 border border-sky-900 relative shadow-xl text-white w-[450px]"
    :style="{ top: `${offset[1] / 10}px`, left: `${offset[0] / 10}px` }"
  >
    <div class="p-2 border-b">ID: {{ uuid }}</div>
    <div class="p-2">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  uuid: string;
  text: string;
  offset: [number, number];
}>();
</script>
