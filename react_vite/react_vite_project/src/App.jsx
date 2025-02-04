import { useState } from 'react'
import "./styles.css"
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'
import { Blog } from './components/Blog'
import { Create } from './components/Create'
import { Content } from './components/Content'
import { About } from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen'>
      <BrowserRouter> 
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/content' element={<Content />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
