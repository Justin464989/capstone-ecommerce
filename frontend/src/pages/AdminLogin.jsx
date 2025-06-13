import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedAdmin = JSON.parse(localStorage.getItem('admin'));

    if (
      storedAdmin &&
      storedAdmin.email === email &&
      storedAdmin.password === password
    ) {
      localStorage.setItem('isAdminLoggedIn', 'true');  
      localStorage.setItem('loggedInAdmin', JSON.stringify(storedAdmin)); // ✅ Store session data
      alert('Login successful!');
      navigate('/admin/dashboard');  
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '5rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: '0.6rem', background: '#2e8b57', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don’t have an account? <Link to="/admin-register" style={{ color: '#007bff' }}>Sign up</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
