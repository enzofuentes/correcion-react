import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Detail = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  const getProduct = () => {
    fetch(`http://localhost:3003/products/${id}`)
    .then(res=> res.json())
    .then (product => {
      setProduct(product); 
    })
    .catch(error =>console.log(error))
    
}
useEffect(getProduct, [id]);
  

//useEffect(() => {
    // Aquí debes hacer una nueva llamada a la API para obtener los detalles del producto usando el ID
    // Puedes usar una URL similar a `http://localhost:3003/products/detalle/${id}`
    // y luego actualizar el estado con la información del producto obtenida
  
  //}, [id]);

  return (
    <div className="container">
      <h2>Detalles del Producto</h2>
      <p>Nombre: {product.name}</p>
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* ... Mostrar otros detalles del producto */}
    </div>
  );
};

export default Detail;
