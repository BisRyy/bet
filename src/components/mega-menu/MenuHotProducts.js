import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Link, Typography, Box } from '@mui/material';

// ----------------------------------------------------------------------

MenuHotProducts.propTypes = {
  tags: PropTypes.array,
};

export default function MenuHotProducts({ tags, ...other }) {
  return (
    <Box {...other}>
      <Typography variant="caption" fontWeight="fontWeightBold">
        Hot Products:
      </Typography>
      &nbsp;
      {tags.map((tag, index) => (
        <Link
          key={tag.name}
          component={NextLink}
          href={tag.path}
          underline="none"
          variant="caption"
          sx={{
            color: 'text.secondary',
            transition: (theme) => theme.transitions.create('all'),
            '&:hover': { color: 'primary.main' },
          }}
        >
          {index === 0 ? tag.name : `, ${tag.name} `}
        </Link>
      ))}
    </Box>
  );
}
