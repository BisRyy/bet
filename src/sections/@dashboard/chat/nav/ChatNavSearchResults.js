import PropTypes from 'prop-types';
// @mui
import { Avatar, Typography, ListItemButton } from '@mui/material';
//
import SearchNotFound from '../../../../components/search-not-found';

// ----------------------------------------------------------------------

ChatNavSearchResults.propTypes = {
  searchResults: PropTypes.array,
  onSelectContact: PropTypes.func,
  searchContacts: PropTypes.string,
};

export default function ChatNavSearchResults({ searchContacts, searchResults, onSelectContact }) {
  const isNotFound = !searchResults.length && !!searchContacts;

  return (
    <>
      <Typography
        paragraph
        variant="h6"
        sx={{
          px: 2.5,
        }}
      >
        Contacts
      </Typography>

      {isNotFound ? (
        <SearchNotFound
          query={searchContacts}
          sx={{
            p: 3,
            mx: 'auto',
            width: `calc(100% - 40px)`,
            bgcolor: 'background.neutral',
          }}
        />
      ) : (
        <>
          {searchResults.map((result) => (
            <ListItemButton
              key={result.id}
              onClick={() => onSelectContact(result)}
              sx={{
                px: 2.5,
                py: 1.5,
                typography: 'subtitle2',
              }}
            >
              <Avatar alt={result.name} src={result.avatar} sx={{ mr: 2 }} />
              {result.name}
            </ListItemButton>
          ))}
        </>
      )}
    </>
  );
}
