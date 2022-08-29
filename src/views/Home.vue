<template>
	<div class="home">
		<Logding v-if="login"></Logding>
		<Title content="商品列表"></Title>
		<Nav></Nav>
		<ul class="shopList">
			<div class="line"></div>
			<li v-for="item in list.data" :key='item._id'>
				<div class="list-touxiang">
					<img :src="item.image" alt="">
				</div>
				<div class="listText">
					<div>{{ item.name }}</div>
					<div>￥{{ item.price }}</div>
				</div>
				<div class="i-car" @click="addCar({ id: item._id, num: 1 })">
					<img src="../assets/img/1.png" alt="">
				</div>
			</li>
		</ul>
		<!-- <button @click="aaa(55)">111</button> -->
	</div>
</template>
<!-- javaScript: -->
<script>
import Title from '../components/Title'
import Nav from '../components/Nav'
import Logding from '../components/logding'
import axios from 'axios'
import pubsub from 'pubsub-js'
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'Home',
	components: {
    Title,
    Nav,
    Logding },
	data() {
		return {

		}
	},
	computed: {
		...mapState(['list','login'])
	},
	watch: {

	},
	created() {
		this.$store.dispatch('getListAsync');
		
	},
	mounted() {
		// 订阅者传参
		pubsub.publish("hello", 666)
		// console.log(this.list);
	},
	methods: {
		async addCar(obj) {
			this.$store.commit('setlogin');
			await axios.post('https://dahua0822-api.herokuapp.com/cart',
				{
					productId: obj.id,
					quantity: obj.num,
				})
			this.$store.dispatch('getCarList')
		},
		...mapMutations([]),
	},
	

}
</script>

<style scoped>
.a {
	margin: auto;
}

.line {
	width: 100%;
	height: .01rem;
}

.shopList {
	width: 100%;
	/* display: flex; */
	/* margin-top: .31rem; */
	background-color: #f7f7fa;
}

.shopList>li {
	width: calc(100% - .48rem);
	height: .68rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	/* background-color: chartreuse; */
	overflow: hidden;
	margin-top: .26rem;
}

.list-touxiang {
	width: .68rem;
	height: .68rem;
	border-radius: .20rem;

}

.list-touxiang>img {
	border-radius: 20px;
}

.listText {
	/* display: flex; */
	width: 1.90rem;
}

.listText>div:nth-child(1) {
	font-size: .12rem;
}

.i-car {
	width: .48rem;
	height: .48rem;
	background: url('../assets/img/2.png') no-repeat;
	background-size: 100%;
	display: flex;
}

.i-car>img {
	width: .18rem;
	height: .18rem;
	margin: auto;
}
</style>
