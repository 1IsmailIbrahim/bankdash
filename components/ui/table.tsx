import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "../icons";
import { Input } from "./input";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("bg-[#F4F7FC]", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    isEven?: boolean;
  }
>(({ className, isEven, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-[#e6eff5] hover:bg-[#f5f7fa]/50 transition-colors",
      isEven ? "bg-white" : "bg-[#F9FAFC]",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "text-left p-4 text-gray-700 text-sm font-medium border-b border-[#e6eff5]",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export type SortDirection = "asc" | "desc" | null;

interface SortableTableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
}

const SortableTableHead = React.forwardRef<
  HTMLTableCellElement,
  SortableTableHeadProps
>(
  (
    { className, children, sortable = false, sortDirection, onSort, ...props },
    ref
  ) => {
    if (!sortable) {
      return (
        <TableHead ref={ref} className={className} {...props}>
          {children}
        </TableHead>
      );
    }

    return (
      <th
        ref={ref}
        className={cn(
          "text-left p-4 text-gray-700 text-sm font-medium border-b border-[#e6eff5] cursor-pointer hover:bg-[#f0f4f8] select-none transition-colors",
          className
        )}
        onClick={onSort}
        {...props}
      >
        <div className="flex items-center gap-2">
          {children}
          <div className="flex flex-col">
            {sortDirection === null && (
              <ChevronsUpDown className="w-3 h-3 text-gray-400" />
            )}
            {sortDirection === "asc" && (
              <ChevronUp className="w-3 h-3 text-blue-600" />
            )}
            {sortDirection === "desc" && (
              <ChevronDown className="w-3 h-3 text-blue-600" />
            )}
          </div>
        </div>
      </th>
    );
  }
);
SortableTableHead.displayName = "SortableTableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle", className)} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

// Enhanced SortableTable component with built-in sorting logic
interface SortConfig {
  field: string;
  direction: SortDirection;
}

interface ColumnDef<T = Record<string, unknown>> {
  key: string;
  header: React.ReactNode;
  sortable?: boolean;
  render?: (item: T, index: number) => React.ReactNode;
  className?: string;
}

interface SortableTableProps<T = Record<string, unknown>> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
  onDataChange?: (sortedData: T[]) => void;
  rowsPerPage?: number;
  showPagination?: boolean;
}

function SortableTable<T extends Record<string, unknown>>({
  data,
  columns,
  className,
  onDataChange,
  rowsPerPage = 10,
  showPagination = true,
}: SortableTableProps<T>) {
  const [sortConfig, setSortConfig] = React.useState<SortConfig>({
    field: "",
    direction: null,
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  const sortedData = React.useMemo(() => {
    if (!sortConfig.field || !sortConfig.direction) {
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];

      let aVal: string | number;
      let bVal: string | number;

      // Handle different data types
      if (typeof aValue === "string" && typeof bValue === "string") {
        aVal = aValue.toLowerCase();
        bVal = bValue.toLowerCase();
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        aVal = aValue;
        bVal = bValue;
      } else {
        // Convert to string for comparison
        aVal = String(aValue).toLowerCase();
        bVal = String(bValue).toLowerCase();
      }

      if (aVal < bVal) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aVal > bVal) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  React.useEffect(() => {
    if (onDataChange) {
      onDataChange(sortedData);
    }
  }, [sortedData, onDataChange]);

  // Pagination calculations
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = sortedData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleSort = (field: string) => {
    setSortConfig((prev) => {
      if (prev.field === field) {
        // Cycle through: asc -> desc -> null
        if (prev.direction === "asc") {
          return { field, direction: "desc" };
        } else if (prev.direction === "desc") {
          return { field: "", direction: null };
        }
      }
      return { field, direction: "asc" };
    });

    // Reset to first page when sorting changes
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-6 border-b border-[#e6eff5] bg-[#F4F7FC]">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#718ebf] bg-white dark:bg-white border-2 border-gray-300 shadow-md"
          >
            <FilterIcon />
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718ebf] w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-80 border-none text-[#718ebf] bg-white dark:bg-white border-2 border-gray-300 dark:border-2 dark:border-gray-300 shadow-md"
            />
          </div>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          <Plus className="w-4 h-4 mr-1" />
          Add customer
        </Button>
      </div>

      <Table className={className}>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <SortableTableHead
                key={column.key}
                sortable={column.sortable}
                sortDirection={
                  sortConfig.field === column.key ? sortConfig.direction : null
                }
                onSort={() => column.sortable && handleSort(column.key)}
                className={column.className}
              >
                {column.header}
              </SortableTableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {(showPagination ? currentPageData : sortedData).map(
            (item, index) => (
              <TableRow key={String(item.id) || index} isEven={index % 2 === 0}>
                {columns.map((column) => (
                  <TableCell key={column.key} className={column.className}>
                    {column.render
                      ? column.render(item, index)
                      : String(item[column.key] || "")}
                  </TableCell>
                ))}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      {showPagination && sortedData.length > rowsPerPage && (
        <div className="flex items-center justify-between p-6 border-t border-[#e6eff5]">
          <div className="text-[#718ebf] text-sm">
            {startIndex + 1}-{Math.min(endIndex, sortedData.length)} of{" "}
            {sortedData.length}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#718ebf] text-sm mr-4">
              Rows per page: {rowsPerPage}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#718ebf] border-2 border-gray-300 shadow-md size-6"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-[#343C6A] text-sm px-2">
              {currentPage}/{totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#718ebf] border-2 border-gray-300 shadow-md size-6"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  SortableTableHead,
  SortableTable,
  TableRow,
  TableCell,
  TableCaption,
};
