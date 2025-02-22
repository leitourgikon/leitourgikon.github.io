import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bibliotheke from './routes/bibliotheke'
import Home from './routes/home'
import Layout from './routes/layout'
import Leitourgia from './routes/leitourgia'
import Orthros from './routes/orthros'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="orthros" element={<Orthros />} />
          <Route path="leitourgia" element={<Leitourgia />} />
          <Route path="bibliotheke" element={<Bibliotheke />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
