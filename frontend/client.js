import { renderVuex } from "hypernova-vue";
import App from "./App.vue";
import createStore from "./store";

renderVuex("App", App, createStore);
