import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/getProductById";
import { getProducts } from "../../data/getProducts";
import { Product } from "../../models/Products.model";
import ProductDetail from "./ProductDetail";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const selected = await getProductById(id);
        setProduct(selected);

        const all = await getProducts();
        const related = all
          .filter((p) => p.id !== Number(id))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setRelatedProducts(related);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-10 text-gray-500 text-xl">Loading...</div>
    );

  if (!product)
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Product not found.
      </div>
    );
  return (
    <section >
      <ProductDetail product={product} relatedProducts={relatedProducts}/>
    </section>
  );
};

export default ProductPage;
