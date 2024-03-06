import { useState } from 'react'
import punLogo from './assets/logo-punreliable.svg'
import viteLogo from '/vite.svg'
import './App.css'

const punreliable = {
  name: 'Punreliable',
  url: 'https://buymeacoffee.com/punreliable',
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={punreliable.url} target="_blank">
          <img src={punLogo} className="logo react" alt="Punreliable logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and {punreliable.name} logos to learn more
      </p>
    </>
  )
}

export default App
