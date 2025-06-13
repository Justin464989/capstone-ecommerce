import React, { useState } from 'react';
import './Products.css';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: "AirPods Pro",
    price: 199.99,
    description: "Noise-cancelling wireless earbuds",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    description: "Fitness tracking smartwatch",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 89.99,
    description: "Portable high-quality sound speaker",
    image: "https://via.placeholder.com/150"
  }
];

const Products = () => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState('');

  const handleAdd = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="products-page">
      <h2>All Products</h2>

      {message && (
        <div style={{ background: '#d4edda', color: '#155724', padding: '0.5rem 1rem', borderRadius: '5px', marginBottom: '1rem' }}>
          {message}
        </div>
      )}

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p className="rating">⭐⭐⭐⭐☆</p>
            <button onClick={() => handleAdd(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
