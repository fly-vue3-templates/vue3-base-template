<template>
  <svg aria-hidden="true" class="svg-icon" :fill="props.color" :width="width" :height="height">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup name="svg-icon">
const props = defineProps({
  prefix: {
    type: String,
    // 与 vite.config.ts 的 createSvgIconsPlugin 的 symbolId 配置前缀一致，默认为 icon，不建议修改
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '1em',
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const width = computed(() => (props.width ? props.width : props.size))
const height = computed(() => (props.height ? props.height : props.size))
</script>

<style scoped>
.svg-icon {
  font-size: 14px;
  outline: none;
  fill: currentcolor;
}
</style>
