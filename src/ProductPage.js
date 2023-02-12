import React, { useState } from 'react';
import './ProductPage.css';

const Product = ({ name, price, imageUrl, id, addToCart }) => (
  <div className="product">
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
    <p>{price}</p>
    <button onClick={() => addToCart(id)}>Add to Cart</button>
  </div>
);

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: '$10',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$20',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$40',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Product 5',
      price: '$50',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ]);

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    setCart([...cart, product]);
  };

  return (
    <div className="product-page">
      <div className="products">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            id={product.id}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
