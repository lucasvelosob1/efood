import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import ProfilePage from '../pages/Profile'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/profile/:id" element={<ProfilePage />} />
  </Routes>
)

export default AppRoutes