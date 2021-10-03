import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login/Login'
import { UserStorage } from './UserContext'
import User from './components/User/User'
import ProtectedRouter from './components/Helper/ProtectedRouter'
import Photo from './components/Photo/Photo'
import UserProfile from './components/User/UserProfile'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <ProtectedRouter path="/user/*" element={<User />} />
            <Route path="/profile/:user" element={<UserProfile />} />
            <Route path="/photo/:id" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
