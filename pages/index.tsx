import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, selectValue } from "../slices/counterSlice"
import { RootState } from "../store"


export default function Home() {
  const count = useSelector(selectValue)
  const dispatch = useDispatch()
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world! {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </h1>
  )
}