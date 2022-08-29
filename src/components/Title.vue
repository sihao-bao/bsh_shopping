
<template>
 <div>
	<div class="listNav">
		<!-- <router-link to='/'>返回</router-link> -->
		<div>{{content}}</div>
		<!-- <div></div> -->
	</div>
 </div>
</template>

<script>
export default {
 name: '',
 components:{},
 props:['content'],
 data() {
   return {

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
	.listNav{
		text-align: center;
		/* display: flex;
		justify-content: space-between; */
		font-size: .17rem;
		padding: 10px 0;
		background-color: white;
	}
</style>