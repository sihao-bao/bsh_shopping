<template>
  <div>
    <Title content='父组件内容区'></Title>
    <input type="text" v-model="val">
    {{val}}
    <!-- <ElementContent :val="val" @change1="change1"></ElementContent> -->
    <ElementContent :val="val" v-model="val"></ElementContent>

    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible"
       width="80%"
      :before-close="handleClose"
    >
      <span>{{input}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->
    
  </div>
</template>

<script>
import ElementContent from './element-content'
import Title from '../components/Title.vue'
import {getSms} from '@/api/products'
export default {
  name: '',
  components: {
    ElementContent, Title },
  data() {
    return {
      input: '',
      dialogVisible: false,
      val:''
    }
  },
  created() {
    getSms({sort: 'all'})
    console.log(this.$api);
  },
  mounted() {
  },
  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(()=> {});
      }
  }
}

</script>

<style scoped>
</style>