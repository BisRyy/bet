import PropTypes from 'prop-types';
// @mui
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
  onSort: PropTypes.func,
  sortBy: PropTypes.string,
  sortOptions: PropTypes.array,
};

export default function BlogPostsSort({ sortBy, sortOptions, onSort }) {
  return (
    <TextField
      select
      size="small"
      value={sortBy}
      onChange={onSort}
      SelectProps={{
        sx: { typography: 'body2' },
      }}
    >
      {sortOptions.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            mx: 1,
            borderRadius: 0.75,
            typography: 'body2',
            textTransform: 'capitalize',
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
