<script lang="js" setup name="Test">
// default v-model
const count = defineModel()
// required & limit string
const count1 = defineModel('count1',{ required:true,type:String })
// default value
const count2 = defineModel('count2', { required:true,type:String,default:'999' })
console.log("💙💛count",count.value)
console.log("💙💛count1",count1.value)
console.log("💙💛count2",count2.value)
</script>

<template>
  <div>
    test页面
  </div>
</template>
