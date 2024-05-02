import { defineStore } from "pinia";
import { readFile } from "@tauri-apps/plugin-fs";

import { useDirectoryStore } from "./directoryStore";
import { DialogStruct } from "../types/Dialog";

export const useDialogStore = defineStore("dialog", {
  state: () => ({
    fileName: "" as string | null,
    dialog: {} as DialogStruct,
  }),
  getters: {
    dialogKeys(state) {
      return Object.keys(state.dialog);
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
