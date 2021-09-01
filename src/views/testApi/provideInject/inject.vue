<template>
  <div class="set-up">
    <div></div>
    <span>{{ injectValue }}</span>
    <div></div>
  </div>
</template>
<script>
import { ref, reactive, provide, inject } from "vue";
export default {
  props: {},
  setup(props) {
    const injectValue = inject("provideValue")
    // const theme = inject(ThemeSymbol, "light");
    // const inject = ref("inject");
    return { inject ,injectValue};
  },
};
</script>
<style scoped>
</style>
