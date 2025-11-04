import { useEffect, useMemo, useState } from "react";
import ChevronLeft from "../../../assets/chevron_left.svg?react";
import ChevronRight from "../../../assets/chevron_right.svg?react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChangePage?: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChangePage }: PaginationProps) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const range = isMobile ? 3 : 5;

  const visiblePages = useMemo(() => {
    const half = Math.floor(range / 2);
    let start = Math.max(1, page - half);
    let end = start + range - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - range + 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPages, isMobile]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onChangePage?.(newPage);
  };

  return (
    <div className="w-full bg-background flex justify-center items-center p-4 overflow-x-auto">
      <div
        className="
          flex items-center justify-center gap-2
          w-full max-w-[500px] md:max-w-max
          flex-wrap sm:flex-nowrap
        "
      >
        <button
          disabled={page === 1}
          className={`shrink min-w-8 sm:min-w-16 
            ${page === 1
              ? "bg-primary-disabled text-foreground-disabled"
              : "bg-primary text-foreground"
            }`}
          onClick={() => handlePageChange(page - 1)}
        >
          <ChevronLeft />
        </button>

        {visiblePages[0] > 1 && (
          <button
            className="shrink min-w-8 sm:min-w-10 md:min-w-[54px] px-2 py-1 bg-primary text-foreground"
            onClick={() => handlePageChange(visiblePages[0] - 1)}
          >
            ...
          </button>
        )}

        {visiblePages.map((p) => {
          
          const width = 50 + (Math.max(0, String(p).length - 1) * 4);

          return (
            <button
              key={p}
              disabled={p === page}
              className={`flex-1 min-w-8 transition-all box-border 
              ${p === page
                  ? "bg-primary-disabled text-foreground-disabled"
                  : "bg-primary text-foreground"
                }`}
              style={{maxWidth: `${width}px`}}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </button>
          )
        })}

        {visiblePages.at(-1)! < totalPages && (
          <button
            className="shrink min-w-8 sm:min-w-10 md:min-w-[54px] px-2 py-1 bg-primary text-foreground"
            onClick={() => handlePageChange(visiblePages.at(-1)! + 1)}
            style={{minWidth: page < range ? '54px' : undefined}}
          >
            ...
          </button>
        )}

        <button
          disabled={page === totalPages}
          className={`shrink min-w-8 sm:min-w-16  
            ${page === totalPages
              ? "bg-primary-disabled text-foreground-disabled"
              : "bg-primary text-foreground"
            }`}
          onClick={() => handlePageChange(page + 1)}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
