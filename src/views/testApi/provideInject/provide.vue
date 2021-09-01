<template>
  <div class="set-up">
    <div></div>
    <span>{{ injectValue }}</span>
    <div></div>
  </div>
</template>
<script>
import { ref, reactive, inject } from "vue";
export default {
  props: {},
  setup(props) {
    // provide(ThemeSymbol, "dark");
    const provide = ref("provide");
    const injectValue = inject("provideValues","没找到对应provide名的传值,自己的inject默认值");
    return { provide, injectValue };
  },
};
</script>
<style scoped>
</style>
