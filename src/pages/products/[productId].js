import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is dynamic page of products {router.query.productId}</h1>
    </div>
  );
};

export default ProductDetails;
