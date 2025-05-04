// SearchBar.tsx
interface Props {
    searchTerm: string;
    setSearchTerm: (val: string) => void;
  }
  
  const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full rounded-xl"
        />
      </div>
    );
  };
  
  export default SearchBar;
  