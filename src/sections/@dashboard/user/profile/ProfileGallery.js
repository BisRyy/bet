import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, IconButton, Typography, Stack } from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import { bgBlur } from '../../../../utils/cssStyles';
// components
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';
import Lightbox from '../../../../components/lightbox';

// ----------------------------------------------------------------------

ProfileGallery.propTypes = {
  gallery: PropTypes.array,
};

export default function ProfileGallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(-1);

  const imagesLightbox = gallery.map((img) => ({
    src: img.imageUrl,
  }));

  const handleOpenLightbox = (imageUrl) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };

  return (
    <>
      <Typography variant="h4" sx={{ my: 5 }}>
        Gallery
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {gallery.map((image) => (
          <GalleryItem
            key={image.id}
            image={image}
            onOpenLightbox={() => handleOpenLightbox(image.imageUrl)}
          />
        ))}
      </Box>

      <Lightbox
        index={selectedImage}
        slides={imagesLightbox}
        open={selectedImage >= 0}
        close={handleCloseLightbox}
      />
    </>
  );
}

// ----------------------------------------------------------------------

GalleryItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  image: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    postAt: PropTypes.instanceOf(Date),
  }),
};

function GalleryItem({ image, onOpenLightbox }) {
  const theme = useTheme();

  const { imageUrl, title, postAt } = image;

  return (
    <Card sx={{ cursor: 'pointer', position: 'relative' }}>
      <Image alt="gallery" ratio="1/1" src={imageUrl} onClick={() => onOpenLightbox(imageUrl)} />

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{
          ...bgBlur({
            color: theme.palette.grey[900],
          }),
          width: 1,
          left: 0,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
          p: theme.spacing(3, 1, 3, 3),
        }}
      >
        <Stack flexGrow={1} spacing={1}>
          <Typography variant="subtitle1">{title}</Typography>

          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {fDate(postAt)}
          </Typography>
        </Stack>

        <IconButton color="inherit">
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Stack>
    </Card>
  );
}
