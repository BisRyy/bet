import { Dialog } from '@mui/material';
import { useState } from 'react';

export default function BookView({ open, setOpen, pdf }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} closeAfterTransition fullWidth maxWidth="lg">
      <iframe
        src="/assets/eotc.pdf"
        width="100%"
        height="1000"
        frameborder="0"
        allowtransparency="true"
        allowfullscreen="true"
        title="pdf"
      />
    </Dialog>
  );
}
