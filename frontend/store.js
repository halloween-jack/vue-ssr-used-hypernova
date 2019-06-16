import { Vue } from "hypernova-vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      count: 10
    },
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      }
    },
    getters: {
      count: state => state.count
    }
  });
