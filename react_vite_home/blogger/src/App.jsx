import { useState, useEffect } from "react";
import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { Create } from './components/Create';
import { About } from './components/About';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (savedBlogs) {
      setBlogs(savedBlogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className='h-screen'>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create setBlogs={setBlogs} />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog blogs={blogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;