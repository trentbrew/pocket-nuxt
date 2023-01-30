import { useNuxtApp } from '#app'

export default function () {
  const { $pb } = useNuxtApp()
  return $pb
}
