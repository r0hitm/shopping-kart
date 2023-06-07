import { useState } from 'react'
import cartLogo from '/cart.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={cartLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Cart-UP!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          カウントは {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
