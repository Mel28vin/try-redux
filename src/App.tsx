import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks"
import { addToppings, toggleGluten } from "./pizzaSlice"

function App() {
  const [count, setCount] = useState(0)

  const pizza = useAppSelector((state) => state.pizza)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>There is {pizza.glutenFree ? "" : "no "} gluten</p>
        <h3>Pizza Toppings</h3>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
        <button onClick={() => dispatch(addToppings("Pepperoni"))}>
          Add Pepperoni
        </button>
        <button onClick={() => dispatch(addToppings("Chunks"))}>
          Add Chunks
        </button>
        <button onClick={() => dispatch(toggleGluten())}>
          {" "}
          Toggle Gluten{" "}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
