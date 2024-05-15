<template>
  <div class="mx-auto max-w-6xl px-2 md:px-0">
    <div class="mx-auto mt-5 grid w-full gap-6 text-center italic md:grid-cols-2 lg:grid-cols-3">
      <template v-if="isLoading">
        <loading-card />
        <loading-card />
        <loading-card />
      </template>
      <template v-else>
        <template v-for="card in noOfCards" :key="card.id">
          <transition enter-active-class="transition duration-200" enter-from-class="scale-50 opacity-0"
            leave-to-class="opacity-0">
            <cards />
          </transition>
        </template>
      </template>
    </div>
  </div>
</template>
<script setup>
import LoadingCard from '@/components/LoadingCard.vue'
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { useSleep } from '@/composables/helpers.js'

onMounted(async () => {
  await useSleep(1)
  isLoading.value = false
})

const cards = defineAsyncComponent(() => import('@/components/Card.vue'))
const isLoading = ref(true)
const noOfCards = ref([{ id: 1, name: 'card-1' }, { id: 2, name: 'card-2' }, { id: 3, name: 'card-3' }])

</script>
