<script setup lang="ts">
import { open } from '@tauri-apps/plugin-dialog';
import Sidebar from './components/Sidebar.vue';
import File from './components/File.vue';

import { useDirectoryStore } from "./stores/directoryStore";

const store = useDirectoryStore();

const openFolderDialog = async () => {
  const dir = await open({
    multiple: false,
    directory: true,
  });
  store.chooseDirectory(dir)
};

</script>

<template>
  <button v-if="!store.directory" @click="openFolderDialog">Open Folder Dialog</button>
  <div v-else>
    <button @click="store.directory = null">Close Folder</button>
    <h1 class="font-bold text-lg">Files in {{ store.directory }}</h1>
    <div class="flex space-x-2">
      <Sidebar class="w-1/6" />
      <File class="flex-1" />
      
    </div>
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
