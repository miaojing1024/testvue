<template>
  <div class="set-up">
    <div></div>
    <span>11111</span>
    <div></div>
  </div>
</template>
<script>
import { h, ref, reactive, watchEffect, computed } from "vue";
export default {
  // 接收 props 作为其第一个参数
  props: {
    name: {
      type: String,
      default: "jennyyy",
    },
  },
  setup(props) {
    // const count = ref(0);
    // // const object = reactive({
    // //   name: "jack",
    // // });
    // const testObject = reactive({
    //   count: count,
    // });
    // const test = ref(1);
    // testObject.count = test;
    // testObject.count = 33;
    // console.log(testObject.count);
    // console.log(count.value);
    // console.log(test.value);
    // 4.props 对象是响应式的，watchEffect 或 watch 会观察和响应 props 的更新
    // watchEffect(() => {
    //   console.log(props.name);
    // });
    // 1.setup 返回一个对象
    // return {
    //   count,
    //   object,
    // };
    // 2.setup 也可以返回一个函数，
    // return () => h("div", [h("div"), [count.value, object.name, test.value],h("span"), [count.value, object.name, test.value]]);
    //
    // 5.当ref值嵌套在reactive 中时,会自动解套,但在 Array 或者 Map 等原生集合类中访问 ref 时，不会自动解套
    // const count = ref(0);
    // const arr = reactive([count]);
    // console.log(arr[0].value); // 这里需要 .value
    // console.log(count.value);
    // const map = reactive(new Map([["foo", ref(0)]]));
    // console.log(map.get('foo').value); // 这里需要 .value
    // console.log(count.value);

    // TODO 6.为ref 做一个较为复杂的类型标注
    // const count = ref<string | number>('foo')
    // count.value = 123 // 能够通过！
    // console.log(count.value);

    // 7.computed 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
    const foot = ref(0);
    const computedValue = computed(() => foot.value + 1);
    computedValue.value = 3;
    // console.log(computedValue.value);
    // 传入一个拥有 get 和 set 函数的对象
    const valueChange = computed({
      get: () => foot.value + 5,
      set: (val) => (foot.value = val),
    });
    console.log(valueChange.value); // 5
    console.log(foot.value); // 0
    valueChange.value = 9;
    console.log(valueChange.value); // 14
    console.log(foot.value); // 9
  },
};
</script>
<style scoped>

</style>
