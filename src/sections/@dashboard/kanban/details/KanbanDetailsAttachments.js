import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import { Stack } from '@mui/material';
// components
import { MultiFilePreview, UploadBox } from '../../../../components/upload';

// ----------------------------------------------------------------------

KanbanDetailsAttachments.propTypes = {
  attachments: PropTypes.array,
};

export default function KanbanDetailsAttachments({ attachments }) {
  const [files, setFiles] = useState(attachments);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles([...files, ...newFiles]);
    },
    [files]
  );

  const handleRemoveFile = (inputFile) => {
    const filtered = files.filter((file) => file !== inputFile);
    setFiles(filtered);
  };

  return (
    <Stack direction="row" flexWrap="wrap">
      <MultiFilePreview
        thumbnail
        files={files}
        onRemove={(file) => handleRemoveFile(file)}
        sx={{ width: 64, height: 64 }}
      />

      <UploadBox onDrop={handleDrop} />
    </Stack>
  );
}
