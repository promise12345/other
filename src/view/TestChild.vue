<!-- 组合式API -->
<script setup>
defineProps({
  hh: {
    type: String,
  }
})
</script>

<!-- 选项式API -->
<!-- <script>
import { h, ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return () => h('h1', count.value)
  },
  props:{
    hh: String
  }
}
</script> -->

<template>
  <h1>TestChild组件====</h1>
  <p>我是TestChild组件</p>
  <p>接收父组件Test的prop传值：{{ hh }}</p>
</template>

<style>
</style>