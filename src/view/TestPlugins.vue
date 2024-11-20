<script setup>
import { ref } from 'vue'
import { inject } from 'vue'
import Test from './Test.vue';


const aa=ref("aa")
const injectMsg=inject('message')

console.log(injectMsg, 'injectMsg');

const setMsg=()=>{
  console.log(this, "TestPlugins=>setMsg()"); // undefined
  aa.value="bbbb"
}

</script>

<template>
  <h1>TestPlugins组件====</h1>
  <div>
    <h2>自定义插件 $translate（）</h2>
    <p>{{ $translate("greeting.hello") }}</p>
    <p>{{ $translate("name") }}</p>
  </div>
  
  <P>********************************************************************************************</P>

  <div>
    <h2>provide()函数: 使一个资源可被注入进整个应用</h2>
    要为组件后代提供数据，需要使用到<span style="color:red">provide()</span>函数
    <p style="color:red">{{"provide注入的数据"+injectMsg.errorMsg}}</p>
  </div>

  <P>********************************************************************************************</P>

  <div>
    <h2>更新aa值</h2>
    <div>{{ aa }}</div>
    <button @click="setMsg">更新aa值</button>
  </div>

  <Test />

</template>

<!-- 选项式API -->
<!-- <script>
// export default {
//   data(){
//     return {
//       aa:"当前组件TestPlugins内的数据",
//       injectMsg: inject('message')
//     }
//   },
//   methods: {

//   }
// }
</script> -->

<style>
h1{
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 10px;
}
</style>