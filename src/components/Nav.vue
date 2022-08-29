<template>
    <div >
        <ul class="Nav">
            <li>
                <router-link to="/">商品列表</router-link>
            </li>
            <li>
                <router-link to='/about'>购物车</router-link>
            </li>
            <li>
                <router-link to="/hotSeller">热销商品</router-link>
            </li>
            <!-- <li>
                <router-link to="/element">element-UI</router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    components: {},
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
.Nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
}
</style>