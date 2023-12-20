<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useCountStore } from '@/store/count'
import { useDebounceFn } from '@vueuse/core'
import SvgComp from './assets/vue.svg'

console.log(import.meta.env)

const updated = ref(0)
const clicked = ref(0)
const debouncedFn = useDebounceFn(
  () => {
    updated.value += 1
  },
  1000,
  { maxWait: 5000 },
)

function clickedFn() {
  clicked.value += 1
  debouncedFn()
}
const countStore = useCountStore()
</script>

<template>
  <div>
    <SvgComp />
    <button @click="clickedFn">Smash me!</button>
    <div>Delay is set to 1000ms and maxWait is set to 5000ms for this demo.</div>

    <p>Button clicked: {{ clicked }}</p>
    <p>Event handler called: {{ updated }}</p>
    <hr />
    <div class="flex">
      Demo Count: {{ countStore.count }}
      <button @click="countStore.increment">新增</button>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
