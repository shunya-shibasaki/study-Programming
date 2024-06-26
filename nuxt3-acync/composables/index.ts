import { Ref } from "vue"
export const useTitle = () => {
  const title = useState<string>('title', () => 'Hello World!')
  const changeTitle = (title: Ref<string>) => (value: string) => {
    title.value = value
  }
  return {
    title: readonly(title),
    changeTitle: changeTitle(title)
  }
}