import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
// @mui
import { Stack, InputBase, IconButton, InputAdornment } from '@mui/material';
// utils
import uuidv4 from '../../../../utils/uuidv4';
// components
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

const CURRENT_USER_ID = '8864c717-587d-472a-929a-8e5f298024da-0';

ChatMessageInput.propTypes = {
  sx: PropTypes.object,
  onSend: PropTypes.func,
  disabled: PropTypes.bool,
  conversationId: PropTypes.string,
};

export default function ChatMessageInput({ disabled, conversationId, onSend, sx, ...other }) {
  const fileInputRef = useRef(null);

  const [message, setMessage] = useState('');

  const handleClickAttach = () => {
    fileInputRef.current?.click();
  };

  const handleSend = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter');
      if (onSend && message && conversationId) {
        onSend({
          conversationId,
          messageId: uuidv4(),
          message,
          contentType: 'text',
          attachments: [],
          createdAt: new Date(),
          senderId: CURRENT_USER_ID,
        });
      }
      setMessage('');
    }
  };

  return (
    <>
      <InputBase
        value={message}
        onKeyUp={handleSend}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type a message"
        startAdornment={
          <InputAdornment position="start">
            <IconButton size="small">
              <Iconify icon="eva:smiling-face-fill" />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <Stack direction="row" spacing={1} sx={{ flexShrink: 0, mr: 1.5 }}>
            <IconButton disabled={disabled} size="small" onClick={handleClickAttach}>
              <Iconify icon="ic:round-add-photo-alternate" />
            </IconButton>

            <IconButton disabled={disabled} size="small" onClick={handleClickAttach}>
              <Iconify icon="eva:attach-2-fill" />
            </IconButton>

            <IconButton disabled={disabled} size="small">
              <Iconify icon="eva:mic-fill" />
            </IconButton>
          </Stack>
        }
        sx={{
          pl: 1,
          height: 56,
          flexShrink: 0,
          borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
          ...sx,
        }}
        {...other}
      />

      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </>
  );
}
