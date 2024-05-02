<template>
    <div class="rounded-lg bg-sky-800 text-white">
        <div class="p-2 border-b">ID: {{ uuid }}</div>
        <div class="p-2">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    uuid: string,
    text: string
}>()
</script>