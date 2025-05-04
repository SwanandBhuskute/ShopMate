// Pagination.tsx
interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (val: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="join mt-10 flex justify-center">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`join-item btn btn-sm ${
            currentPage === i + 1 ? "btn-active btn-neutral" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
