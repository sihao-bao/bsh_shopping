<template>
  <div class="HotSeller">
    <!-- 加载login -->
    <Logding v-if="login"></Logding>
    <!-- 标题 -->
    <Title content="热销商品"></Title>
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 火爆商品 -->
    <div class="Lcontent">
      <div>
        <h5 class="sizi14 ">火爆商品</h5>
      </div>
      <div class="aa">
        <ul class="Hotul">
          <li v-for="item in Top" :key="item._id">
            <div class="backgroundImg"><img :src="item.image" alt=""></div>
            <div class="Ltext">
              <div class="sizi12 text">{{ item.name }}</div>
              <div>￥{{ item.price }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bb">
        <ul class="listUl sizi14">
          <li :class="Ncalor=='all'?'all':''" @click="getHotList({ params:{sort: 'all'},Ncalor:'all' })">全部</li>
          <li :class="Ncalor=='style'?'all':''" @click="getHotList({ params:{ sort: 'style' },Ncalor:'style' })">款式新</li>
          <li :class="Ncalor=='sell'?'all':''" @click="getHotList({ params:{ sort: 'sell' },Ncalor:'sell' })">销量高</li>
          <li :class="Ncalor=='rate'?'all':''" @click="getHotList({ params:{ sort: 'rate' },Ncalor:'rate' })">好评多</li>
        </ul>
      </div>
    </div>
    <!-- 列表导航 -->

    <!-- 列表 -->
    <ul class="shopList">
			<div class="line"></div>
			<li v-for="item in hotList" :key='item._id'>
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
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
import Logding from '../components/logding'
import Nav from '../components/Nav.vue'
import Title from '../components/Title.vue'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
// import Shoplist  from '../components/Shoplist.vue'
export default {
  name: '',
  components: {
    Logding, Nav, Title },
  data() {
    return {
      Ncalor:'all'
    }
  },
  computed: {
		...mapState(['Top','login','hotList'])
	},
  created() {
    // console.log(this.$api);
      // 方案1 待完善
    // this.$api.products({sort:'all'}).then(res=>{
    //   console.log(res);
    // })
    // 方案2 待完善
    // this.getHotList({
    //   url: 'https://dahua0822-api.herokuapp.com/goods',
    //   params: { sort: 'all' }
    // })
    // this.$store.dispatch('getHotList');
    this.getHotList({ params:{sort: 'all'},Ncalor:'all' })
  },
  mounted() {

  },
  methods: {
    async getHotList(obj) {
      // var data = await axios.get('https://dahua0822-api.herokuapp.com/goods',{params:obj.params})
      // this.Top = data.data.data.top
      // this.hotList=data.data.data.data
      this.$store.commit('setlogin');
      this.Ncalor=obj.Ncalor
      this.$store.dispatch('getHotListAsync',obj)
    },
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
  }
}

</script>

<style lang="scss" scoped>
.sizi14 {
  font-size: .14rem;
}

.sizi12 {
  font-size: .12rem;
}

.HotSeller {
  // font-size:.14rem ;
  font-family: 'HarmonyOS Sans SC';
  overflow: hidden;
  font-weight: 700;
}

.Lcontent {
  width: 100%;
  // height: 100vh;
  padding-left: .26rem;
  background: rgba(247, 247, 250, 1);
  padding-top: .20rem;
}

.aa {
  width: 100%;
  height: 2.24rem;
  margin-top: .22rem;
  overflow: hidden;
}

.Hotul {
  padding-bottom: 10px;
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;

  li {
    width: 1.68rem;
    height: 2.22rem;
    margin-right: .26rem;
    border-radius: 28px;
    background-color: white;

    .backgroundImg {
      width: 1.68rem;
      height: 1.46rem;
      // background: url('../assets/img/01.png@2x.png') no-repeat;
      // background-size: 100%;
      font-weight: 700;
      img{
        border-radius: 28px 28px 0 0;
      }
    }

    .Ltext {
      height: .70rem;
      padding-left: .18rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;


    }
  }
}

.bb {
  width: 100%;
  //  display: flex;
  // height: 2.24rem;
  // margin-top: .22rem;
  margin-top: .32rem;
  height: .44rem;
  overflow: hidden;
}

.listUl {
  // width: 100%;
  text-align: center;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  background: rgba(247, 247, 250, 1);
  padding-bottom: 10px;

  li {
    display: inline-block;
    width: .99rem;
    line-height: .44rem;
    border-radius: 14px;
    background-color: white;
    margin-right: .20rem;
  }

  .all {
    width: .44rem;
    height: .44rem;
    padding: 0 .08rem;
    background: rgba(255, 223, 117, 1);
  }
}

.text {
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

// list
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