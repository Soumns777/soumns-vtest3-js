<!--
   * @FileDescription: 首页
   * @Author: Soumns
   * @Node: Home
   * @Date: 2024年12月5日16:49:15
-->
<script lang="js" setup name="Home">
const headerData = ref([
  {
    id:1,
    key:'deptName',
    title:'部门',
  },
  {
    id:2,
    key:'home',
    title:'首页',
  },
  {
    id:3,
    key:'home',
    title:'首页',
  },
  {
    id:4,
    key:'home',
    title:'首页',
  },
  {
    id:5,
    key:'home',
    title:'首页',
  },
  {
    id:6,
    key:'home',
    title:'首页',
  },
  {
    id:7,
    key:'home',
    title:'首页',
  },
])

const keyData = ref([
  'deptName',
  'home',
  'home',
  'home',
  'home',
  'home',
  'home',
])

const coreData = ref([
  {
    id:1,
    deptName:'幸福产业部',
    home:'测试数据'
  },
  {
    id:2,
    deptName:'测试测试测试部测试高端制造部',
    home:'测试数据'
  },
  {
    id:3,
    deptName:'高端制造部',
    home:'测试数据'
  },
  {
    id:4,
    deptName:'普惠金融部',
    home:'测试数据'
  },
  {
    id:5,
    deptName:'高端制造部',
    home:'测试数据'
  },
  {
    id:6,
    deptName:'高端制造部',
    home:'测试数据'
  },
  {
    id:7,
    deptName:'高端制造部',
    home:'测试数据'
  },
])
coreData.value.map((item) => {
  keyData.value.map((item1) => {
    if(!item.isLong) {
      item.isLong = item[item1].length >= 6 ? true : false
    }
  })
})

const rowHeight = computed(() => {
  return (data) => {
    return data.isLong ? '130px' : '80px'
  }
})
</script>

<template>
 <div f-c>
   <div v-for="(item,idx) in headerData" :key="item.id" w-120 h-30 b="1 solid #efefef" f-c-c>
     {{item.title}}
   </div>
 </div>

  <div f-c v-for="(item,idx) in coreData" :key="item.id">
    <div f-c-c w-120  b="1 solid #efefef" self-stretch f-w p-3 v-for="(item1) in keyData" :key="item1" :style="{height: rowHeight(item)}">
      {{item[item1]}}
    </div>
  </div>

</template>


