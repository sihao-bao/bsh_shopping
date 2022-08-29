<template>
 <div>
    <Title content="子组件内容区" />
    <!-- <input type="text" :value="val" @input=""$emit('change1',$event.target.value)"> -->
    <input type="text" :value="val" @input="$emit('input',$event.target.value)">
 </div>
</template>

<script>
import Title from '../components/Title.vue';
export default {
  props: ['val'],
 name: '',
//  props:['val'],
 components:{ Title },
 data() {
   return {
    childVal:''
   }
 },
 created() {
 },
 mounted() {
 },
 methods: {

 }
}

</script>

<style scoped>

</style>