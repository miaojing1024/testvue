<template>
  <div class="set-up">
    <div></div>
    <span>{{ 111111 }}</span>
    <Inject />
    <div>22222</div>
    <Provide />
  </div>
</template>
<script>
import { ref, reactive, provide, inject } from "vue";
import Inject from "@/views/testApi/provideInject/inject.vue";
import Provide from "@/views/testApi/provideInject/provide.vue";
export default {
  props: {},
  components: {
    Provide,
    Inject,
  },
  setup(props) {
    provide("provideValue", "provide传过来的值");
    //   const Inject = {
    //     setup() {
    //       provide(ThemeSymbol, "dark");
    //     },
    //   };
    //   const Provide = {
    //     setup() {
    //       const theme = inject(ThemeSymbol, "light");
    //       return {
    //         theme,
    //       };
    //     },
    //   };
    //   return {
    //     Inject,
    //     Provide,
    //   };
  },
};
</script>
<style scoped>
</style>
