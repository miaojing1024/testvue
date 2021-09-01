<template>
  <div class="set-up">
    <div></div>
    <span>11111</span>
    <div></div>
  </div>
</template>
<script>
import { h, ref, reactive, watchEffect, computed, readonly } from "vue";
export default {
  // 接收 props 作为其第一个参数
  props: {},
  setup(props) {
    const count = ref("我是输入的值");
    const obj = reactive({ name: "jackLi", age: 18 });
    const countCopy = readonly(count);
    const objCopy = readonly(obj);
    watchEffect(() => {
      console.log(countCopy.value);
      console.log(objCopy.name);
      console.log(obj.age++); // 可以更新
      console.log(objCopy.age);
      console.log(objCopy.age++); // 产生警报
    });
  },
};
</script>
<style scoped>

</style>
