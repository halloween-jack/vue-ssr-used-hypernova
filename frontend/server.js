import server from "hypernova/server";
import { renderVuex } from "hypernova-vue";

import createStore from "./store";

server({
  devMode: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 5000,
  getComponent: async name => {
    const component = await import(`./ssr/${name}`);
    return component.default;
  }
});
