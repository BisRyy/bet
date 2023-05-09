import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Stack,
  Dialog,
  Button,
  TextField,
  Typography,
  ListItemButton,
  InputAdornment,
} from '@mui/material';
// components
import Iconify from '../../../../components/iconify';
import SearchNotFound from '../../../../components/search-not-found';

// ----------------------------------------------------------------------

InvoiceAddressListDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.func,
  addressOptions: PropTypes.array,
};

export default function InvoiceAddressListDialog({
  open,
  selected,
  onClose,
  onSelect,
  addressOptions,
}) {
  const [searchAddress, setSearchAddress] = useState('');

  const dataFiltered = applyFilter(addressOptions, searchAddress);

  const isNotFound = !dataFiltered.length && !!searchAddress;

  const handleSearchAddress = (event) => {
    setSearchAddress(event.target.value);
  };

  const handleSelectAddress = (address) => {
    onSelect(address);
    setSearchAddress('');
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 2.5, px: 3 }}
      >
        <Typography variant="h6"> Select address </Typography>

        <Button
          size="small"
          startIcon={<Iconify icon="eva:plus-fill" />}
          sx={{ alignSelf: 'flex-end' }}
        >
          Add New
        </Button>
      </Stack>

      <Stack sx={{ p: 2.5 }}>
        <TextField
          value={searchAddress}
          onChange={handleSearchAddress}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {isNotFound ? (
        <SearchNotFound query={searchAddress} sx={{ px: 3, pt: 5, pb: 10 }} />
      ) : (
        <Stack sx={{ p: 1.5, pt: 0, maxHeight: 80 * 8, overflowX: 'hidden' }}>
          {dataFiltered.map((address) => (
            <ListItemButton
              key={address.id}
              selected={selected(address.id)}
              onClick={() => handleSelectAddress(address)}
              sx={{
                p: 1.5,
                borderRadius: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                },
              }}
            >
              <Typography variant="subtitle2">{address.name}</Typography>

              <Typography
                variant="caption"
                component="div"
                sx={{
                  my: 0.5,
                  color: 'info.main',
                  fontWeight: 'fontWeightMedium',
                }}
              >
                {address.company}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {address.address}
              </Typography>
            </ListItemButton>
          ))}
        </Stack>
      )}
    </Dialog>
  );
}

// ----------------------------------------------------------------------

function applyFilter(array, query) {
  if (query) {
    return array.filter(
      (address) =>
        address.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        address.company.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        address.address.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return array;
}
