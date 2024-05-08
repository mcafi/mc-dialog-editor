<template>
    <div class="rounded-lg m-4 bg-purple-800 shadow-sm shadow-purple-300 text-white">
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