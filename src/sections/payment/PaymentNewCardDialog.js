import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import {
  Stack,
  Button,
  Dialog,
  TextField,
  IconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  InputAdornment,
} from '@mui/material';
// components
import Iconify from '../../components/iconify';
import MenuPopover from '../../components/menu-popover';

// ----------------------------------------------------------------------

PaymentNewCardDialog.propTypes = {
  onClose: PropTypes.func,
};

export default function PaymentNewCardDialog({ onClose, ...other }) {
  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <Dialog maxWidth="xs" onClose={onClose} {...other}>
        <DialogTitle> Add new card </DialogTitle>

        <DialogContent sx={{ overflow: 'unset' }}>
          <Stack spacing={3}>
            <TextField fullWidth label="Name on card" />

            <TextField fullWidth label="Card number" />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="MM/YY" />

              <TextField
                label="CVV"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" edge="end" onClick={handleOpenPopover}>
                        <Iconify icon="eva:info-fill" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="contained" onClick={onClose}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="bottom-center"
        sx={{ maxWidth: 200, typography: 'body2', textAlign: 'center' }}
      >
        Three-digit number on the back of your VISA card
      </MenuPopover>
    </>
  );
}
