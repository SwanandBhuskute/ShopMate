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
          <figure className="bg-yellow-100 p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 object-contain mx-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-900">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.description.slice(0, 50)}...</p>
            <div className="card-actions justify-between mt-4">
              <span className="text-amber-600 font-bold">${product.price}</span>
              {/* <button className="btn btn-primary btn-sm">Buy</button> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGallery;






// import { Product } from "../../models/Products.model";
// import { Link } from "react-router-dom";

// const ProductGallery = (props: { products: Product[] }) => {
//   const products: Product[] = props.products;

//   return (
//     <section className="bg-gradient-to-b from-[#ece9e6] via-[#ffffff] to-[#e5e5e5] py-15 px-4 sm:px-6 lg:px-20 text-gray-900 font-[Inter]">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl sm:text-5xl font-bold tracking-wide text-gray-800 drop-shadow-sm">
//           Experience Elegance
//         </h2>
//         <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
//           Browse our handpicked premium collection — for those who settle only
//           for the finest.
//         </p>
//       </div>

//       <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
//         {products.map((product) => (
//           <Link
//             key={product.id}
//             to={`/products/${product.id}`}
//             className="card bg-base-400 w-full shadow-xl mx-auto transition-transform duration-500 hover:scale-103 cursor-pointer"
//           >
//             <figure className="bg-orange-200">
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-36 sm:h-48 object-contain transition-transform duration-500 hover:scale-110"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title text-gray-800">{product.title}</h2>
//               <p className="text-sm text-gray-600 italic">
//                 {product.description.slice(0, 60)}...
//               </p>
//               <div className="card-actions justify-between pt-4">
//                 <span className="text-amber-600 font-bold text-lg">
//                   ${product.price}
//                 </span>
//                 <button className="btn btn-primary btn-sm text-sm">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductGallery;
