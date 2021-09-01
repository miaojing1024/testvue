<template>
  <div class="set-up">
    <div></div>
    <span>{{ count }}</span>
    <div>111</div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, onUpdated, onUnmounted } from "vue";
export default {
  onRenderTriggered(e) {
    debugger;
    // 检查哪个依赖性导致组件重新渲染
  },
  // 生命周期钩子注册函数只能在 setup() 期间同步使用
  // 1.与 2.x 版本生命周期相对应的组合式 API
  // beforeCreate -> 使用 setup()
  // created -> 使用 setup()
  // beforeMount -> onBeforeMount
  // mounted -> onMounted
  // beforeUpdate -> onBeforeUpdate
  // updated -> onUpdated
  // beforeDestroy -> onBeforeUnmount
  // destroyed -> onUnmounted
  // errorCaptured -> onErrorCaptured
  // 2.新增的钩子函数
  // 除了和 2.x 生命周期等效项之外，组合式 API 还提供了以下调试钩子函数：
  // onRenderTracked
  // onRenderTriggered
  props: {},
  setup(props) {
    const count = ref(1);
    count.value++;
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
    return {
      count,
    };
  },
};
</script>
<style scoped>
</style>
