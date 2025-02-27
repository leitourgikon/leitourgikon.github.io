import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bibliotheke from './routes/bibliotheke'
import Home from './routes/home'
import Layout from './routes/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bibliotheke" element={<Bibliotheke />} />
          <Route path="bibliotheke/:chant" element={<Bibliotheke />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
