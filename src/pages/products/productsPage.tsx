import { useEffect, useState } from "react";
import { getProducts } from "../../data/getProducts";
import { Product } from "../../models/Products.model";
import FiltersSidebar from "./filtersSidebar";
import Pagination from "./pagination";
import SearchBar from "./searchBar";
import ProductGallery from "./ProductGallery";

const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");

  const productsPerPage = 8;

  // Fetch products
  useEffect(() => {
    getProducts().then((data) => {
      setAllProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  // Filter and sort logic
  useEffect(() => {
    let result = allProducts;

    if (searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortOrder === "lowToHigh") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchTerm, selectedCategories, priceRange, sortOrder, allProducts]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="bg-gray-500 mx-auto px-4 lg:px-8 py-10 flex flex-col lg:flex-row gap-6">
      <FiltersSidebar
        products={allProducts}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        resetFilters={() => {
          setSelectedCategories([]);
          setPriceRange([0, 500]);
          setSearchTerm("");
          setSortOrder("");
        }}
      />

      <div className="flex-1">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductGallery products={currentProducts} />
        <Pagination
          totalItems={filteredProducts.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
