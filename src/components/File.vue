<template>
  <div class="flex-1 bg-gray-900 p-4 rounded overflow-auto">
    <h2 class="text-xl">File: {{ dialogStore.fileName }}</h2>
    <button @click="test">TEST</button>
    <div v-if="dialogStore.isEmpty" class="text-white">No dialog found</div>
    <div class="relative" v-else>
      <SignalBox
        v-for="signal in dialogStore.allSignals"
        :uuid="signal.uuid"
        :text="signal.data"
      />
      <ChoiceBox
        v-for="choice in dialogStore.allChoices"
        :uuid="choice.uuid"
        :text="choice"
      />
      <TextBox
        v-for="dialog in dialogStore.allTextDialogs"
        :uuid="dialog.uuid"
        :text="dialog.text.it"
        :offset="dialog.offset"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { invoke } from "@tauri-apps/api/core";

import { useDialogStore } from "../stores/dialogStore";
import TextBox from "./TextBox.vue";
import SignalBox from "./SignalBox.vue";
import ChoiceBox from "./ChoiceBox.vue";

const dialogStore = useDialogStore();
const test = async () => {
  const uuid = await invoke("generate_uuid");
  console.log(uuid);
};
</script>
<style></style>
