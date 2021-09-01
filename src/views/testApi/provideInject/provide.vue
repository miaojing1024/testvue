<template>
  <div class="set-up">
    <div></div>
    <span>{{ provide }}</span>
    <div></div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  props: {},
  setup(props) {
    provide(ThemeSymbol, "dark");
    const provide = ref("provide");
    return { provide };
  },
};
</script>
<style scoped>
</style>
