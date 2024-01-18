<script setup>
import { useCycleList } from "./useCycleList.js";

const items = [
  'apple',
  'banana',
  'orange'
]

const { current, next, prev } = useCycleList(items)

</script>
<template>
  <div>
    <button @click="prev">Prev</button>
    <div>{{ current }}</div>
    <button @click="next">Next</button>
  </div>
</template>
