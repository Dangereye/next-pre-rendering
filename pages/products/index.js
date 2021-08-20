import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h2>List of Products</h2>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <a>
              <h3>
                {product.id}, {product.title} - {product.price}
              </h3>
            </a>
          </Link>
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
