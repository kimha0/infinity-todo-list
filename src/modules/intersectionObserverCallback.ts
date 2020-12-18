import type { InfiniteQueryObserverResult } from "react-query"
import type { ITodo } from "../interface/todo"

interface IIoCallbackProps {
  hasNextPage?: boolean
  isFetchingNextPage: boolean
  callback: () => Promise<InfiniteQueryObserverResult<ITodo[], unknown>>

}

type TIoCallback = (props: IIoCallbackProps) => IntersectionObserverCallback

const ioCallback: TIoCallback = (props) => (entries, io) => {
  const { hasNextPage, isFetchingNextPage, callback } = props
  if (hasNextPage !== false && isFetchingNextPage) return

  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    
    callback()
    io.unobserve(entry.target)
    io.observe(entry.target)
  })
}

export { ioCallback }