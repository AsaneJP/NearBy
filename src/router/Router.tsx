import { Route, Routes } from 'react-router-dom'
import { Detail } from '../pages/Detail'
import { Home } from '../pages/Home'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/shop/:id" element={<Detail />} />
  </Routes>
)
