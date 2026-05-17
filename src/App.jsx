import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}

export default App
