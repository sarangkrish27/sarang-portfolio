import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useReveal() {
  const el = ref(null)
  let observer

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return el
}
