// ProductGallery.tsx
import { Product } from "../../models/Products.model";
import { Link } from "react-router-dom";

const ProductGallery = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="card bg-white shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] rounded-xl overflow-hidden"
        >
          <figure className="bg-orange-200 p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 object-contain mx-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-900">{product.title}</h2>
            <p className="text-sm text-gray-500">
              {product.description.slice(0, 50)}...
            </p>
            <div className="card-actions justify-between mt-4">
              <span className="text-amber-600 text-lg font-bold">${product.price}</span>
              {/* <button className="btn btn-primary btn-sm">Buy</button> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGallery;
