import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import ProductList from '../../components/ProductList';

const Main = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch('http://localhost:3003/products')  
      .then((res) => res.json())
      .then((products) => {
        console.log('Productos obtenidos:', products);
        setProducts(products);
      })
      .catch((error) => console.error('Error al obtener los productos:', error));
  };

  useEffect(() => {
    getProducts();  
  }, []);  

  return (
    <div>
      <ProductList title="productos" products={products} />
      <div>
        {products.map((product) => (
          <div key={product.id}>
       <Link to={`/detail/${product._id}`}>Ver detalles del producto {product.id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

