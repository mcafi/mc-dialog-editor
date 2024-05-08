import { defineStore } from "pinia";
import { readFile } from "@tauri-apps/plugin-fs";

import { useDirectoryStore } from "./directoryStore";
import { Dialog, DialogData, DialogStruct, Langugage } from "../types/Dialog";

export const useDialogStore = defineStore("dialog", {
  state: () => ({
    fileName: "" as string | null,
    dialog: {} as DialogStruct,
    lang: "en" as Langugage,
  }),
  getters: {
    dialogKeys(state) {
      return Object.keys(state.dialog);
    },
    isEmpty(state) {
      return !state.dialog.root?.next;
    },
    rootUUID(state) {
      return state.dialog.root?.next;
    },
    rootDialog(state) {
      if (!state.dialog.root) return null;
      const rootUUID = state.dialog.root.next;
      return state.dialog[rootUUID] as DialogData;
    },
    allTextDialogs(state): Dialog[] {
      return state.dialog.__editor?.dialogues.map((dialogMetadata) => {
        return {
          ...(state.dialog[dialogMetadata.uuid] as DialogData),
          ...dialogMetadata,
        };
      });
    },
    allSignals(state) {
      return state.dialog.__editor?.signals.map((signalMetadata) => {
        const signalParent = state.dialog[signalMetadata.parent] as DialogData;

        return {
          ...signalMetadata,
          ...signalParent.signals,
        };
      });
    },
    allChoices(state) {
      return state.dialog.__editor?.choices.map((choiceMetadata) => {
        const choiceParent = state.dialog[choiceMetadata.parent] as DialogData;

        return {
          ...choiceMetadata,
          ...choiceParent.choices,
        };
      });
    },
  },
  actions: {
    async setFile(fileName: string) {
      this.fileName = fileName;

      const directoryStore = useDirectoryStore();
      const content = await readFile(
        `${directoryStore.directory}/${this.fileName}`
      );
      const decoder = new TextDecoder();
      this.dialog = JSON.parse(decoder.decode(content));
    },
    reset() {
      this.fileName = null;
      this.dialog = {} as DialogStruct;
    },
  },
});
