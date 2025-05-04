import { useState, useEffect } from "react";
import { getProducts } from "../../data/getProducts";
import { Product } from "../../models/Products.model";
import HeroSection from "../../components/heroSection/heroSection";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section>
      {loading ? (
        <div className="text-center text-lg text-gray-500">
          Loading products...
        </div>
      ) : (
        <HeroSection products={products} />
      )}
    </section>
  );
};

export default HomePage;
