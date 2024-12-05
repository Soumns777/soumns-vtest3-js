<script setup lang="js" name="App">
const count = ref(1)
const handleAdd = () => {
  count.value = count.value + 1
}
const handleReduce = () => {
  count.value = count.value - 1
}
</script>

<template>
  <a-space wrap>
    {{count}}
    <a-button type="primary" @click="handleAdd">+1</a-button>
    <button s-btn-red  b="2 solid dfl rd-10"  @click="handleReduce">-1</button>
  </a-space>
</template>
