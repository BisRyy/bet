import PropTypes from 'prop-types';
// @mui
import { TableRow, TableCell } from '@mui/material';

// ----------------------------------------------------------------------

TableEmptyRows.propTypes = {
  height: PropTypes.number,
  emptyRows: PropTypes.number,
};

export default function TableEmptyRows({ emptyRows, height }) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
