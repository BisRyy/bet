import PropTypes from 'prop-types';
// @mui
import { LoadingButton } from '@mui/lab';
import { alpha } from '@mui/material/styles';
import { Box, Button, Container, Typography, DialogActions, Dialog, Divider } from '@mui/material';
// components
import Image from '../../../components/image';
import Markdown from '../../../components/markdown';
import Scrollbar from '../../../components/scrollbar';
import EmptyContent from '../../../components/empty-content';

// ----------------------------------------------------------------------

BlogNewPostPreview.propTypes = {
  open: PropTypes.bool,
  isValid: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
  isSubmitting: PropTypes.bool,
};

export default function BlogNewPostPreview({
  values,
  isValid,
  isSubmitting,
  open,
  onClose,
  onSubmit,
}) {
  const { title = '', content = '', description = '' } = values;

  const cover = typeof values.cover === 'string' ? values.cover : values.cover?.preview;

  const hasContent = title || description || content || cover;

  const hasHero = title || cover;

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Preview
        </Typography>

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton
          type="submit"
          variant="contained"
          disabled={!isValid}
          loading={isSubmitting}
          onClick={onSubmit}
        >
          Post
        </LoadingButton>
      </DialogActions>

      <Divider />

      {hasContent ? (
        <Scrollbar>
          {hasHero && <PreviewHero title={title} cover={cover} />}
          <Container sx={{ mt: 5, mb: 10 }}>
            <Typography variant="h6" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown children={content} />
          </Container>
        </Scrollbar>
      ) : (
        <EmptyContent title="Empty content" />
      )}
    </Dialog>
  );
}

// ----------------------------------------------------------------------

PreviewHero.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};

function PreviewHero({ title, cover }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Container
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
          pt: { xs: 3, lg: 10 },
        }}
      >
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </Container>

      <Box
        sx={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 8,
          position: 'absolute',
          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
        }}
      />
      <Image alt="cover" src={cover} ratio="16/9" />
    </Box>
  );
}
