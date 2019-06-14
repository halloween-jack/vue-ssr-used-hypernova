import server from "hypernova/server";
import { renderVuex } from "hypernova-vue";

import App from "./App.vue";
import Hoge from "./Hoge/index.vue";
import createStore from "./store";

server({
  devMode: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 5000,
  getComponent: name => {
    let component;

    switch (name) {
      case "App":
        component = App;
        break;
      case "Hoge":
        component = Hoge;
        break;
    }

    return renderVuex(name, component, createStore);
  }
});
