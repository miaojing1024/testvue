<template>
  <div class="set-up">
    <div></div>
    <span>{{ inject }}</span>
    <div></div>
  </div>
</template>
<script>
import { ref, reactive, provide, inject } from "vue";
export default {
  props: {},
  setup(props) {
    const theme = inject(ThemeSymbol, "light");
    const inject = ref("inject");
    return { inject, theme };
  },
};
</script>
<style scoped>
</style>
