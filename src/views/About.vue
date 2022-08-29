<template>
	<div class="about">
		<Logding v-if="login"></Logding>
		<Title content="购物车"></Title>
		<Nav></Nav>
		<ul class="carUl">
			<div class="line"></div>
			<li class="carList" v-for="(item) in Car" :key="item._id">
				<!-- <div class="carinp"><input type="checkbox" :checked='item.checked' @change="changeStutas(item.productId._id)"></div> -->
				<div class="carinp" :class="item.checked ? 'carinpActive' : ''" @click="changeStutas(item.productId._id)">
				</div>
				<div class="carDetails">
					<div class="list-touxiang">
						<img :src="item.productId.image" alt="">
					</div>
					<div>
						<div>{{ item.productId.name }}</div>
						<div>尺码：M</div>
						<div style="font-size: 14px;">￥{{ item.price }}</div>
					</div>
					<div>
						<div @click="addCar({ id: item.productId._id, num: -1 })">-</div>
						<span class="carPrice">{{ item.quantity }}</span>
						<div @click="addCar({ id: item.productId._id, num: 1 })">+</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="box"></div>
		<div class="foot">
			<div class="carjian">
				<div>共计： {{ jianshu }}件</div>
				<div>
					<span>合计：</span>
					<!-- <span>￥{{Car.total}}</span>元 -->
					<!-- <span>￥900</span>元 -->
					<span>￥{{ zongjiuan }}</span>元
				</div>
			</div>
			<div class="zhifu">支付</div>
		</div>
	</div>
</template>
<script>
import Title from '../components/Title'
import Nav from '../components/Nav'
import Logding from '../components/logding'
// import pubsub from "pubsub-js";
import axios from 'axios'
import {
	mapState,
	mapGetters
} from "vuex";
export default {
	components: {
    Title,
		Nav,
		Logding
	},
	data() {
		return {

		}
	},
	mounted() {
		// 发布者接受
		// pubsub.subscribe("hello",(a,b) => {
		// 	console.log(a,b);
		// })
		// console.log(this.Car);
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
		async changeStutas(id) {
			this.$store.commit('setlogin');
			await axios.post('https://dahua0822-api.herokuapp.com/cart/select',
				{
					productId: id,
				})
			this.$store.dispatch('getCarList')
		}
	},
	computed: {
		...mapState(['Car', 'login']),
		...mapGetters(['zongjiuan', 'jianshu'])
	},
	created() {
		this.$store.dispatch('getCarList');
	}
}
</script>

<style scoped>
.carUl {
	width: 100%;
	background-color: #f7f7fa;
}

.line {
	width: 100%;
	height: .01rem;
}

.carNav {
	text-align: center;
	display: flex;
	justify-content: space-between;
	font-size: .17rem;
	margin: 20px 0;
	background-color: white;
}

.carList {
	width: 100%;
	display: flex;
	height: .98rem;
	align-items: center;
	margin-top: .24rem;

}

.carinpActive {
	background: rgba(255, 223, 117, 1);
}

.carinp {
	margin: 0 .18rem;
	width: .22rem;
	height: .22rem;
	border-radius: 50%;
	border: 1px solid black;


}

.carDetails {
	width: 2.80rem;
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 20px;
	font-size: .12rem;
	padding-right: .15rem;
}

.carDetails>div:nth-child(2) {
	width: 2.1rem;
	margin-left: .13rem;
}

.carDetails>div:nth-child(2)>div:nth-child(2) {
	margin: .12rem 0 .16rem;
}

.carDetails>div:nth-child(3) {
	display: flex;
	margin-top: .57rem;

}

.carDetails>div:nth-child(3)>div:nth-child(1),
.carDetails>div:nth-child(3)>div:nth-child(3) {
	width: .16rem;
	height: .16rem;
	background: rgba(255, 223, 117, 1);
	text-align: center;
	line-height: .16rem;
}

.list-touxiang {
	width: .84rem;
	height: .84rem;
}

.list-touxiang>img {
	border-radius: .20rem;
}

.carPrice {
	margin: 0 .08rem;
}

.foot {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: white;
	height: 1.38rem;
}

.box {
	width: 100%;
	height: 1.38rem;
}

.carjian {
	margin-top: .26rem;
	display: flex;
	justify-content: space-around;

}


.zhifu {
	width: 3.35rem;
	line-height: .58rem;
	text-align: center;
	background: rgba(255, 223, 117, 1);
	margin: .18rem auto;
	border-radius: 20px;
}
</style>
