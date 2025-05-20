import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
  useFetch()
  return (
    <div>MultipleCustomHook</div>
  )
}
