import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    cunyId: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save admin to localStorage (mock backend)
    localStorage.setItem('admin', JSON.stringify(form));
    alert('Admin registered successfully!');
    navigate('/admin-login');
  };

  return (
    <div style={container}>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required style={input} />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required style={input} />
        <input name="cunyId" placeholder="CUNY ID" value={form.cunyId} onChange={handleChange} required style={input} />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required style={input} />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required style={input} />
        <input name="confirmPassword" placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={handleChange} required style={input} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={button}>Register</button>
      </form>
    </div>
  );
};

const container = { maxWidth: '500px', margin: '4rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px' };
const input = { width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' };
const button = { width: '100%', padding: '10px', backgroundColor: '#2e8b57', color: 'white', border: 'none', borderRadius: '5px' };

export default AdminRegister;
