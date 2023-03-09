import { createApp } from "vue";
import App from "./app.vue";
import olui from "@olui1/components";
const app = createApp(App);
app.use(olui);
app.mount("#app");