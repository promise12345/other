<script>
import { toRefs, toRef } from 'vue'
import TestChild from './TestChild.vue';

export default {
  props: {
    title: String
  },
//******方式1：*******************************************************
  // setup(props) {
  //   // 将 `props` 转为一个其中全是 ref 的对象，然后解构
  //   const { title } = toRefs(props)
  //   // `title` 是一个追踪着 `props.title` 的 ref
  //   console.log(title.value)
  // }
// ******方式2：*******************************************************
  setup(props) {
    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, 'title')
    console.log(title.value);
  }
}
</script>

<template>
  <h1>==========Test组件==========</h1>
  <p>我是test</p>

  <TestChild hh="哈哈哈哈" />
</template>


<style>
</style>