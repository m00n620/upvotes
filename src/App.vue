<script setup lang="ts">
import { useStore } from 'vuex';
import UpvoteList from './components/UpvoteList.vue'

const store = useStore()
</script>

<template>
  <div class="container mx-auto py-10">
    <UpvoteList v-for="upvotes in store.state.upvotesList" v-bind="upvotes" :key="upvotes.id" />
  </div>
</template>