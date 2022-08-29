import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
	state: {
		list: [],
		Car:[],
		Top: [],
        hotList:[],
		login:false,
	},
	mutations: {
		getListAsync(state,data) {
			state.login=false
			state.list=data.data
			console.log('商品列表',state.list);
			// console.log(state.list);
		},
		getCarList(state,car){
			state.login=false
			state.Car=car.items
			console.log('购物车',state.Car);
		},
		setlogin(state){
			state.login=true
		},
		//热门商品
		getHotListAsync(state,hot) {
			state.login=false
			state.Top=hot.data.top
			state.hotList=hot.data.data
			console.log(hot);
		}
	},
	actions: {
		async getListAsync({ commit }) {
			let  {data:res}  = await axios.get('https://dahua0822-api.herokuapp.com/goods')
			if(res.success){
				commit('getListAsync',res)
			}
			// console.log(res);
			
		},
		async getCarList({ commit }) {
			let  {data:car}  = await axios.get('https://dahua0822-api.herokuapp.com/cart')
			if(car.success){
				commit('getCarList',car.data)
			}
			
			// console.log(car);
		},
		// 热门商品
		async getHotListAsync({ commit },obj){
			let {data:res} = await axios.get('https://dahua0822-api.herokuapp.com/goods',{params:obj.params})
			commit('getHotListAsync',res)
		}
		
		// async addCar({ commit },item) {
		// 	let  {data:jia}  = await axios.post('https://dahua0822-api.herokuapp.com/cart',
		// 	{
		// 		productId:item.productId._id,
		// 		quantity:1,
		// 	})
			
		// 	commit('addCar',jia)
		// 	console.log(jia);
		// }
	},
	getters:{
		zongjiuan(state){
		let trueCar=state.Car.filter(item=>item.checked)
		return	trueCar.reduce((num,item)=>num+=item.total,0)
		},
		jianshu(state){
			let trueCar=state.Car.filter(item=>item.checked)
			return	trueCar.reduce((num,item)=>num+=item.quantity,0)
		}
	},
	modules: {

	},
	plugins: [vuexLocal.plugin]
})
