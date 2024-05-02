<template>
    <div class="flex-1 bg-green-900 p-2">
        <h2>File: {{ dialogStore.fileName }}</h2>
        <p class="text-sm">{{ dialogStore.dialog }}</p>
      </div>
</template>
<script lang="ts" setup>
import { useDialogStore } from "../stores/dialogStore";

const dialogStore = useDialogStore();
</script>
<style>

</style>