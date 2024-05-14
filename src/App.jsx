import { useState } from 'react'
import './App.css'
import TableComponent from './components/TableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-100 w-full min-h-screen'>
      <TableComponent></TableComponent>
    </div>
    </>
  )
}

export default App
