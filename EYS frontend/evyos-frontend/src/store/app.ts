// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppConfigs = defineStore('appConfigs', () => {
  const theme = ref('light')
  const headerItemWidth = ref('150px')
  const headerItems = ref(['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Servisler', 'Ürünler', 'Başvurular', 'Iletişim'])

  const changeTheme = () => theme.value = theme.value === 'light' ? 'dark' : 'light'

  return { theme, headerItemWidth, headerItems, changeTheme }
})

  // function changeTheme() {
  //   theme.value = theme.value === 'light' ? 'dark' : 'light'
  // }
