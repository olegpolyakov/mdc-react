import DataTable from './DataTable';
import DataTableCell from './DataTableCell';
import DataTableContent from './DataTableContent';
import DataTableFooter from './DataTableFooter';
import DataTableHeader from './DataTableHeader';
import DataTableHeaderCell from './DataTableHeaderCell';
import DataTableHeaderRow from './DataTableHeaderRow';
import DataTablePagination from './DataTablePagination';
import DataTableRow from './DataTableRow';

DataTable.Cell = DataTableCell;
DataTable.Content = DataTableContent;
DataTable.Footer = DataTableFooter;
DataTable.Header = DataTableHeader;
DataTable.HeaderCell = DataTableHeaderCell;
DataTable.HeaderRow = DataTableHeaderRow;
DataTable.Pagination = DataTablePagination;
DataTable.Row = DataTableRow;

export {
    DataTable as default,
    DataTableCell,
    DataTableContent,
    DataTableFooter,
    DataTableHeader,
    DataTableHeaderCell,
    DataTableHeaderRow,
    DataTablePagination,
    DataTableRow
};