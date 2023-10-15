import CardProduct from "./CardProduct";

const ProductList = ({  title, products }) => {
  return (
    <div>
      <h2 id="productos">
        <em> ultimos {title}!</em>
      </h2> 

      <div className="todoslosproductos">
        {products.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


