import { Product } from "../../models/Products.model";

interface Props {
  products: Product[];
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (val: [number, number]) => void;
  sortOrder: string;
  setSortOrder: (val: string) => void;
  resetFilters: () => void;
}

const FiltersSidebar = ({
  products,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  resetFilters,
}: Props) => {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleSortOrder = (order: string) => {
    setSortOrder(sortOrder === order ? "" : order);
  };

  return (
    <aside className="w-full lg:w-64 space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow">
      <h3 className="text-xl font-bold text-gray-800">Filters</h3>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseInt(e.target.value)])
          }
          className="range range-primary"
        />
        <div className="text-sm text-gray-600 mt-1">Under ${priceRange[1]}</div>
      </div>

      {/* Sort Buttons */}
      <div>
        <h4 className="font-semibold mb-2">Sort By</h4>
        <div className="flex flex-col gap-2">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={sortOrder === "lowToHigh"}
              onChange={() => toggleSortOrder("lowToHigh")}
            />
            <span className="label-text">Price: Low to High</span>
          </label>
          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={sortOrder === "highToLow"}
              onChange={() => toggleSortOrder("highToLow")}
            />
            <span className="label-text">Price: High to Low</span>
          </label>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-semibold mb-2">Categories</h4>
        {categories.map((cat) => (
          <div key={cat} className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              <span className="label-text">{cat}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <button
        className="btn btn-outline btn-sm mt-4 w-full"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FiltersSidebar;
