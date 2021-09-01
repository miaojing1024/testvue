<template>
  <div class="set-up">
    <div></div>
    <span>{{ count }}</span>
    <div></div>
  </div>
</template>
<script>
import { h, ref, reactive, watchEffect, computed, readonly } from "vue";
export default {
  // 接收 props 作为其第一个参数
  props: {},
  setup(props) {
    const count = ref(0);
    // 1.watchEffect执行
    // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    // watchEffect(() => {
    //   console.log(count.value);
    // });
    // setTimeout(() => {
    //   count.value++;
    // }, 3000);
    // 2.停止侦听
    // 当 watchEffect 在组件的 setup() 函数或生命周期钩子被调用时， 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。
    // const stopWatch = watchEffect(() => {
    //   console.log(count.value);
    // });
    // stopWatch();
    // 3.清除副作用
    // 用来注册清理失效时的回调。当以下情况发生时，这个失效回调会被触发  id 改变时 或 停止侦听时,取消之前的异步操作
    // watchEffect((onInvalidate) => {
    //   // 异步请求performAsyncOperation
    //   const token = performAsyncOperation(id.value);
    //   onInvalidate(() => {
    //     // id 改变时 或 停止侦听时
    //     // 取消之前的异步操作
    //     token.cancel();
    //   });
    // });
    // 4.副作用刷新时机
    // 在核心的具体实现中, 组件的更新函数也是一个被侦听的副作用。当一个用户定义的副作用函数进入队列时, 会在所有的组件更新后执行：
    // 请注意，初始化运行是在组件 mounted 之前执行的。因此，如果你希望在编写副作用函数时访问 DOM（或模板 ref），请在 onMounted 钩子中进行：
    return {
      count,
    };
  },
};
</script>
<style scoped>
</style>
