import {Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Profile from './pages/profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  )
}

export default App
