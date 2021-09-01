<template>
  <div class="set-up">
    <div></div>
    <span>{{ 111111 }}</span>
    <Inject />
    <Provide />
    <div>22222</div>
    {{ Inject.ThemeSymbol }}
    {{ Provide.theme }}
  </div>
</template>
<script>
import { ref, reactive, provide, inject} from "vue";
import Inject from "@/views/testApi/provideInject/inject.vue";
import Provide from "@/views/testApi/provideInject/provide.vue";
export default {
  props: {},
  // components: {
  //   Provide,
  //   Inject,
  // },
  setup(props) {
    const Inject = {
      setup() {
        provide(ThemeSymbol, "dark");
      },
    };
    const Provide = {
      setup() {
        const theme = inject(ThemeSymbol, "light");
        return {
          theme,
        };
      },
    };
    return {
      Inject,
      Provide,
    };
  },
};
</script>
<style scoped>
</style>
