import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateListing from './pages/CreateListing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRegister from './pages/AdminRegister';
import AdminForgotPassword from './pages/AdminForgotPassword';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/create-listing" element={<CreateListing />} />
         <Route path="/admin-login" element={<AdminLogin />} /> 
         <Route path="/create-listing" element={<CreateListing />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/create-listing" element={<CreateListing />} />
         <Route path="/admin" element={<AdminLogin />} />
         <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
         <Route path="/admin-register" element={<AdminRegister />} />
</Routes>

      </div>
    </>
  );
}

export default App;
