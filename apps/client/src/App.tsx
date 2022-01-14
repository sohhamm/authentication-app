import {Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/login/login'
import NotFound from './pages/not-found/not-found'
import Profile from './pages/profile/profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
