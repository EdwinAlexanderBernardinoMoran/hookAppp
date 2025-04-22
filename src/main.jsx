import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
import { Counter } from './useState/Counter'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    <CounterWithCustomHook />
  </StrictMode>,
)
