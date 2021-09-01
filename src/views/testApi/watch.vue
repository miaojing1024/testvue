<template>
  <div class="set-up">
    <div></div>
    <span>{{ count }}</span>
    <div></div>
  </div>
</template>
<script>
import { h, ref, reactive, watchEffect, computed, readonly, watch } from "vue";
export default {
  // 接收 props 作为其第一个参数
  props: {},
  setup(props) {
    // 1.watch 侦听单个数据源
    // 侦听器的数据源可以是一个拥有返回值的 getter 函数，也可以是 ref：
    // 直接侦听一个 ref
    const count = ref(0);
    watch(count, (newval, oldval) => {
      console.log(newval);
      console.log(oldval);
    });
    setTimeout(() => {
      count.value++;
    }, 5000);
    // 侦听一个 getter
    const obj = reactive({ name: "jack", age: 18 });
    watch(
      () => obj.age,
      (newval, oldval) => {
        console.log(newval);
        console.log(oldval);
      }
    );
    setTimeout(() => {
      obj.age++;
    }, 2000);
    // 2.watch 侦听多个数据源
    // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
    //   /* ... */
    // });
    return {
      count,
    };
  },
};
</script>
<style scoped>
</style>
