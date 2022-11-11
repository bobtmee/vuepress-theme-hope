import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "C:/Users/dada/Desktop/zz/code/comment/example/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.122/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "C:/Users/dada/Desktop/zz/code/comment/example/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.122/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/dada/Desktop/zz/code/comment/example/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.122/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "C:/Users/dada/Desktop/zz/code/comment/example/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.122/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
