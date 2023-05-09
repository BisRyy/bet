import PropTypes from 'prop-types';
// @mui
import { Box, Stack } from '@mui/material';
// components
import Scrollbar from '../../../../components/scrollbar';
import FileThumbnail from '../../../../components/file-thumbnail';

// ----------------------------------------------------------------------

MailDetailsAttachments.propTypes = {
  attachments: PropTypes.array,
};

export default function MailDetailsAttachments({ attachments }) {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'background.neutral',
        borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Scrollbar>
        <Stack direction="row" spacing={1}>
          {attachments.map((file) => (
            <FileItem key={file.name} file={file} />
          ))}
        </Stack>
      </Scrollbar>
    </Box>
  );
}

// ----------------------------------------------------------------------

FileItem.propTypes = {
  file: PropTypes.object,
};

function FileItem({ file }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 56,
        height: 56,
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.paper',
      }}
    >
      <FileThumbnail tooltip file={file.preview} onDownload={() => console.log('DOWNLOAD')} />
    </Stack>
  );
}
