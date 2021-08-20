const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1>List of products</h1>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h2>
            {product.id}, {product.title} - {product.price}
          </h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

export const getStaticProps = async () => {
  console.log("Generating / Regenerating ProductList");
  const res = await fetch(`http://localhost:4000/products`);
  const data = await res.json();
  return {
    props: { products: data },
    revalidate: 10,
  };
};
