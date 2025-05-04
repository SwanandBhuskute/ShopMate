import { Product } from "../../models/Products.model";
import { Link } from "react-router-dom";

const HeroSection = (props: { products: Product[] }) => {
  const products: Product[] = props.products;
  const featured: Product[] = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="text-white py-20 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
            Discover Premium Products
            <br />
            <span className="italic text-yellow-400 drop-shadow-md">
              Curated Just for You
            </span>
          </h1>
          <p className="text-base sm:text-xl italic drop-shadow-[2px_2px_3px_rgba(0,0,0,0.2)]">
            Handpicked collections crafted to perfection — from elegance to
            everyday excellence.
            <br />
            <span className="not-italic font-semibold text-white drop-shadow">
              Luxury isn't just a choice — it's a lifestyle.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-6">
            <Link to="/products">
              <button className="btn bg-white-500 text-black border border-black text-lg px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition">
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className="btn bg-black text-white text-lg px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/hero-img.avif"
            alt="hero image"
            className="w-full max-w-[500px] sm:max-w-[600px] h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className="text-center mt-20 px-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow">
          Featured Premium Products
        </h2>
        <p className="text-lg sm:text-md italic text-gray-400 mb-10">
          The finest pieces, handpicked for the refined shopper.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-black/60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105 overflow-hidden cursor-pointer block"
            >
              <figure className="relative w-full h-60 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full bg-yellow-100 object-contain opacity-100 filter saturate-150 transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </figure>
              <div className="px-5 py-6 space-y-3 text-left">
                <h2 className="text-xl font-semibold text-white drop-shadow-sm">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-300">
                  {product.description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-amber-600 text-xl font-bold">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore All Products Button */}
        <div className="mt-12 flex justify-center">
          <Link to="/products">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105 text-lg tracking-wide cursor-pointer">
              Explore All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
