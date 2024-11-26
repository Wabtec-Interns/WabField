import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/LoggedIn/Home'
import Login from './pages/Form/Login'
import Register from './pages/Form/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='validation\login' element={<Login />} />
          <Route path='validation\register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
