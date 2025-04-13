import { useState } from "react"

export const Counter = () => {

  const [stateCounter, setcounter] = useState({
    count: 10,
    count2: 20,
    count3: 30,
  })

  const { count, count2, count3 } = stateCounter

  return (
    <>
    <h1>Counter: { count }</h1>
    <h1>Counter: { count2 }</h1>
    <h1>Counter: { count3 }</h1>
    <hr />
    <button className="btn" onClick={ () => setcounter({
      ...stateCounter,
      count: count + 1
    }) }> +1 </button>
    <button className="btn" onClick={ () => setcounter({
      ...stateCounter,
      count: count - 1
    })}> -1 </button>
    </>
  )
}
