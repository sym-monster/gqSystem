<template>
  <div class="wrapper">
    <v-head />
    <v-menu />
    <v-body />
  </div>
</template>

<script>
import vMenu from "../common/menu.vue";
import vBody from "../common/body.vue";
import vHead from "../common/header.vue";

import bus from "./bus";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
    };
  },
  components: {
    vHead,
    vMenu,
    vBody,
  },
  created() {
    bus.$on("collapse-content", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>
