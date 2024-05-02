<template>
    <ul class="bg-gray-500">
        <li v-for="file in directoryStore.fileList" :key="file" @click="selectFile(file)"
          class="py-1 px-2 hover:cursor-pointer hover:font-semibold hover:bg-gray-400">{{ file }}</li>
      </ul>
</template>

<script setup lang="ts">
import { useDialogStore } from "../stores/dialogStore";
import { useDirectoryStore } from "../stores/directoryStore";

const directoryStore = useDirectoryStore();
const dialogStore = useDialogStore();


const selectFile = async (file: string) => {
  dialogStore.setFile(file);  
}
</script>

<style lang="scss" scoped>

</style>