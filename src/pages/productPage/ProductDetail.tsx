import { Product } from "../../models/Products.model";
import { Link } from "react-router-dom";
import { FaTruck, FaStar, FaRegStar } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiOutlineSafetyCertificate, AiOutlineBarcode } from "react-icons/ai";

const ProductDetail = (props: {
  product: Product;
  relatedProducts: Product[];
}) => {
  const product: Product = props.product;
  const relatedProducts: Product[] = props.relatedProducts;

  return (
    <div className="bg-gray-500 text-white p-4">
      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="bg-white w-full rounded-xl overflow-hidden border border-gray-200">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <p className="text-lg ">{product.description}</p>
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-3xl font-bold text-black">
                ${product.price}
              </span>
              {/* <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition-all duration-300">
                Buy Now
              </button> */}
            </div>

            <ul className="text-base space-y-1 ">
              {product.brand && (
                <li>
                  <strong>Brand:</strong> {product.brand}
                </li>
              )}
              {product.category && (
                <li>
                  <strong>Category:</strong> {product.category}
                </li>
              )}
              {product.sku && (
                <li>
                  <strong>SKU:</strong> {product.sku}
                </li>
              )}
              {typeof product.stock === "number" && (
                <li>
                  <strong>Stock:</strong> {product.stock}
                </li>
              )}
              {typeof product.weight === "number" && (
                <li>
                  <strong>Weight:</strong> {product.weight}g
                </li>
              )}
              {product.dimensions?.width &&
                product.dimensions?.height &&
                product.dimensions?.depth && (
                  <li>
                    <strong>Size:</strong> {product.dimensions.width} ×{" "}
                    {product.dimensions.height} × {product.dimensions.depth} cm
                  </li>
                )}
            </ul>
            {/* 🆕 Extra Info Grid */}
            <div className="mt-1">
              <div className="rounded-xl shadow-lg border border-gray-100 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {/* Shipping Info */}
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-amber-600">
                      <FaTruck className="text-2xl" />
                      <span className="text-sm text-gray-700">
                        {product.shippingInformation}
                      </span>
                    </div>
                  </div>

                  {/* Return Policy */}
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-600">
                      <BsArrowReturnLeft className="text-2xl" />
                      <span className="text-sm text-gray-700">
                        {product.returnPolicy}
                      </span>
                    </div>
                  </div>

                  {/* Warranty Info */}
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-600">
                      <AiOutlineSafetyCertificate className="text-2xl" />
                      <span className="text-sm text-gray-700">
                        {product.warrantyInformation}
                      </span>
                    </div>
                  </div>

                  {/* Barcode / QR */}
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-purple-600">
                      <AiOutlineBarcode className="text-2xl" />
                      <span className="text-sm text-gray-700 mb-2">
                        <strong>Barcode:</strong> {product.meta.barcode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.reviews.map((review, idx) => (
              <div
                key={idx}
                className="border border-gray-100 p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      {review.reviewerName}
                    </div>
                    <div className="flex items-center text-yellow-500 mt-1">
                      {[...Array(5)].map((_, index) =>
                        index < review.rating ? (
                          <FaStar key={index} className="w-5 h-5" />
                        ) : (
                          <FaRegStar
                            key={index}
                            className="w-5 h-5 text-gray-300"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
                <div className="text-sm text-gray-400 mt-3">
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mb-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-extrabold">
            You might also like
          </h3>
          <p className="mt-2 text-xl">
            Similar picks from our store curated for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((rp) => (
            <Link key={rp.id} to={`/products/${rp.id}`}>
              <div className="card bg-base-100 w-96 shadow-sm mx-auto transition-transform duration-500 hover:scale-105 cursor-pointer">
                <figure className="bg-orange-200">
                  <img
                    src={rp.thumbnail}
                    alt={rp.title}
                    className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110"
                  />
                </figure>
                <div className="card-body flex flex-row items-center justify-between">
                  <h2 className="card-title text-gray-800">
                    {rp.title.slice(0,20)}...
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary text-sm">Buy Now</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
