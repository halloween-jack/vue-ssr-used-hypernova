import { renderVuex } from "hypernova-vue";
import Hoge from "../Hoge.vue";
import createStore from "../store";

export default renderVuex("Hoge", Hoge, createStore);
