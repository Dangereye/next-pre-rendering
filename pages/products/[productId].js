import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>
        {product.id}, {product.title} - {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default Product;

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`);
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();
  return { props: { product: data }, revalidate: 10 };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
};
