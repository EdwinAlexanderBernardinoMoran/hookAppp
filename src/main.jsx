import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { Counter } from './useState/Counter'
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './examples/MultipleCustomHook'
import { FocusScreen } from './useRef/FocusScreen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHook /> */}
    <FocusScreen />
  </StrictMode>,
)
