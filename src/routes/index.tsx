import { Routes, Route } from 'react-router-dom'
import CartPage from '../pages/Cart'
import HomePage from '../pages/Home'
import ProfilePage from '../pages/Profile'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/profile/:id" element={<ProfilePage />} />
    {/* 2. Adicione a nova rota aqui */}
    <Route path="/cart" element={<CartPage />} />
  </Routes>
)

export default AppRoutes