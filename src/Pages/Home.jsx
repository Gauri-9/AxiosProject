import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to our e-commerce website!</h1>
        <p>Discover the latest trends and products</p>
        <button>Shop Now</button>
      </div>
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories">
          <div className="category">
            <img src="https://picsum.photos/200/300" alt="Category 1" />
            <h3>Category 1</h3>
          </div>
          <div className="category">
            <img src="https://picsum.photos/200/301" alt="Category 2" />
            <h3>Category 2</h3>
          </div>
          <div className="category">
            <img src="https://picsum.photos/200/302" alt="Category 3" />
            <h3>Category 3</h3>
          </div>
        </div>
      </div>
      <div className="products-section">
        <h2>Featured Products</h2>
        <div className="products">
          <div className="product">
            <img src="https://picsum.photos/200/303" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/304" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
          </div>
          <div className="product">
            <img src="https://picsum.photos/200/305" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
          </div>
        </div>
      </div>
      <div className="call-to-action-section">
        <h2>Sign up for our newsletter</h2>
        <p>Stay up to date with the latest news and promotions</p>
        <input type="email" placeholder="Enter your email" />
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Home;