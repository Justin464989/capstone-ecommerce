import React, { useState } from 'react';
import './Products.css';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: "AirPods Pro",
    price: 199.99,
    description: "Noise-cancelling wireless earbuds",
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    description: "Fitness tracking smartwatch",
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 89.99,
    description: "Portable high-quality sound speaker",
    category: "Accessories",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "College Math Textbook",
    price: 59.99,
    description: "Essential for college algebra and calculus",
    category: "Books",
    image: "https://via.placeholder.com/150"
  }
];

const Products = () => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('');

  const handleAdd = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(''), 2000);
  };

  const filteredProducts = products
    .filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (category === 'All' || p.category === category)
    )
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-page">
      <h2>All Products</h2>

      {/* Search, Filter, Sort */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, minWidth: '200px', padding: '0.5rem' }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '0.5rem' }}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} style={{ padding: '0.5rem' }}>
          <option value="">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Message */}
      {message && (
        <div style={{ background: '#d4edda', color: '#155724', padding: '0.5rem 1rem', borderRadius: '5px', marginBottom: '1rem' }}>
          {message}
        </div>
      )}

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <p className="rating">⭐⭐⭐⭐☆</p>
              <button onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
