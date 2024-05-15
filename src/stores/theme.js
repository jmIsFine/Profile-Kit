import { StorageSerializers, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = useStorage('vueuse-color-scheme', null, localStorage, {
    serializer: StorageSerializers.string,
    deep: true
  })

  watch(
    () => theme.value,
    (newTheme) => {
      theme.value = newTheme
    }
  )

  return {
    theme
  }
})
