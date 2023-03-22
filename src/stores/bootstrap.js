import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
export const useBootstrapStore = defineStore("bootstrap", {
  state: () => ({
    bootstrap,
  }),
});
