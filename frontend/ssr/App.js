import { renderVuex } from "hypernova-vue";
import App from "../App.vue";
import createStore from "../store";

export default renderVuex("App", App, createStore);
