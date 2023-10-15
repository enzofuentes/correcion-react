//import { useRef } from "react";
//import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
  return (
    <div className="producto">
      <figure>
        <img src={`http://localhost:3003/images/products/${product.image}`} alt={product.name} width="200" />
      </figure>
    <div className="informacion producto">
      <h3 id="nombredemercancia">{product.name}</h3>
      <p id="precio">${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  </div>
);
};
export default CardProduct;



