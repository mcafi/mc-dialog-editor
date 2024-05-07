<template>
  <div class="flex-1 bg-green-900 p-4">
    <h2 class="text-xl">File: {{ dialogStore.fileName }}</h2>
    <button @click="test">TEST</button>
    <div v-if="dialogStore.isEmpty" class="text-white">No dialog found</div>
    <div v-else>
      <TextDialog v-for="dialog in dialogStore.allTextDialogs" :uuid="dialog.character_uuid" :text="dialog.text.it" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';

import { useDialogStore } from "../stores/dialogStore";
import TextDialog from "./TextDialog.vue";

const dialogStore = useDialogStore();
const test = async () => {
  const uuid = await invoke('generate_uuid');
  console.log(uuid);
}
</script>
<style></style>