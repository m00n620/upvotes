<script lang="ts" setup>
import { useStore } from 'vuex';
import Upvote from './Upvote.vue';
const props = defineProps({
  id: { type: Number, required: true },
  count: { type: Number, required: true },
  selected: { type: Boolean, required: true },
})

const store = useStore()

const onAdd = () => {
  store.dispatch('add', { id: props.id })
}

const onToggle = () => {
  store.dispatch('toggle', { id: props.id })
}
</script>
    
<template>
  <div class="flex max-w-[600px] items-center mb-4">
    <div class="grid gap-2 grid-flow-col auto-cols-max p-4 border border-gray-300 rounded-xl flex-1 min-h-[74px]">
      <Upvote v-for="(val, key) in count" :key="key" :selected="selected" @toggle="onToggle" />
    </div>
    <button class="w-12 h-12 bg-rectangle hover:bg-slate-300 rounded-lg ml-4 flex items-center justify-center"
      @click="onAdd">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z"
          fill="#343A40" />
      </svg>
    </button>
  </div>
</template>
    