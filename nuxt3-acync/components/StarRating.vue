<script setup lang="ts">
import { ref } from 'vue'
import { useField } from 'vee-validate'

type ScoreType = 1 | 2 | 3 | 4 | 5;
type Props = {
  name: string
  value: ScoreType,
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue'])

const { value, handleChange } = useField<ScoreType>(props.name)
const state = reactive({
  tempValue: 0 as ScoreType,
  item: value.value as ScoreType,
  rating: [1,2,3,4,5]
})

const mouseOver = (index: ScoreType) => {
  state.tempValue = state.item
  console.log('mouseOver', state.item = index)
  return (state.item = index)
}

const mouseOut = () => {
  console.log('mouseOut', state.item = state.tempValue)
  return (state.item = state.tempValue)
}

// const focusOver = (index: ScoreType) => {
//   state.tempValue = state.item
//   console.log('focusOver', state.item = index)
//   return (state.item = index)
// }

// const focusOut = () => {
//   console.log('focusOut', state.item = state.tempValue)
//   return (state.item = state.tempValue)
// }

const setRating = (val: ScoreType) => {
  state.tempValue = val
  console.log('item--', val)
  handleChange(val)
  emit('update:modelValue', val)
  return (state.item = val)
}
</script>

<template>
  <div class="star-rating">
    <!--
      @focus="mouseOver(rating as ScoreType)"
      @blur="mouseOut()"
      -->
    <span 
      v-for="rating in state.rating" 
      :key="rating"
      class="star" 
      :class="{ '-selected': state.item >= rating && state.item != null }"
      @click="setRating(rating as ScoreType)"
      @mouseover="mouseOver(rating as ScoreType)"
      @mouseout="mouseOut()"
    >
      ★
    </span>
    <p>Your rating: {{ state.item }} / 5</p>
  </div>
</template>

<style scoped>
.star {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;
}

.star.-selected {
  color: gold;
}

/* マウスオーバー時の星の色を左から右に変更 */
.star:hover,
.star:hover ~ .star {
  color: gold;
}

.star ~ .star:hover {
  color: #ccc;
}
</style>
