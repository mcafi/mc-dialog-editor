import { defineStore } from "pinia";

import { readDir } from "@tauri-apps/plugin-fs";

import { useDialogStore } from "./dialogStore";

export const useDirectoryStore = defineStore("directory", {
  state: () => ({
    directory: "" as string | null,
    fileList: [] as string[],
  }),
  actions: {
    async chooseDirectory(directory: string | null) {
      if (!directory) {
        return;
      }
      const read = await readDir(directory);
      this.setFileList(
        read.filter((file) => file.isFile).map((file) => file.name)
      );
      const dialogStore = useDialogStore();
      dialogStore.reset();
      this.directory = directory;
    },
    setFileList(fileList: string[]) {
      this.fileList = fileList;
    },
  },
});
