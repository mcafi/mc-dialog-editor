<template>
  <div class="flex-1 bg-green-900 p-4">
    <h2 class="text-xl">File: {{ dialogStore.fileName }}</h2>
    <TextDialog v-if="dialogStore.rootDialog" :uuid="dialogStore.rootUUID" :text="dialogStore.rootDialog.text.it" />
  </div>
</template>
<script lang="ts" setup>
import { useDialogStore } from "../stores/dialogStore";
import TextDialog from "./TextDialog.vue";

const dialogStore = useDialogStore();

</script>
<style></style>