import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import {
  Box,
  Card,
  Grid,
  Paper,
  Stack,
  Switch,
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// _mock
import _mock from '../../../_mock';
// layouts
import MainLayout from '../../../layouts/main';
// components
import Image from '../../../components/image';
import Lightbox from '../../../components/lightbox';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const imagesLightbox = [...Array(8)].map((_, index) => ({
  src: _mock.image.cover(index + 1),
  title: 'Flamingo',
  description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
}));

// ----------------------------------------------------------------------

DemoLightboxPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoLightboxPage() {
  const [state, setState] = useState({
    disabledZoom: false,
    disabledVideo: false,
    disabledTotal: false,
    disabledCaptions: true,
    disabledSlideshow: false,
    disabledThumbnails: false,
    disabledFullscreen: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [selectedImage, setSelectedImage] = useState(-1);

  const handleOpenBasic = (imageUrl) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseBasic = () => {
    setSelectedImage(-1);
  };

  return (
    <>
      <Head>
        <title> Extra Components: Lightbox | Minimal UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Lightbox"
            links={[
              {
                name: 'Components',
                href: PATH_PAGE.components,
              },
              { name: 'Lightbox' },
            ]}
            moreLink={['https://www.npmjs.com/package/yet-another-react-lightbox']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Card sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <Box
                gap={1}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                }}
              >
                {imagesLightbox.map((img) => (
                  <Image
                    key={img.src}
                    alt={img.src}
                    src={img.src}
                    ratio="1/1"
                    onClick={() => handleOpenBasic(img.src)}
                    sx={{
                      borderRadius: 1,
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
                <FormControl component="fieldset" variant="standard">
                  <Stack spacing={2}>
                    <FormLabel component="legend" sx={{ typography: 'body2' }}>
                      Controls
                    </FormLabel>

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledZoom"
                          checked={state.disabledZoom}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Zoom"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledTotal"
                          checked={state.disabledTotal}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Total"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledVideo"
                          checked={state.disabledVideo}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Video"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledCaptions"
                          checked={state.disabledCaptions}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Captions"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledSlideshow"
                          checked={state.disabledSlideshow}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Slideshow"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledThumbnails"
                          checked={state.disabledThumbnails}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Thumbnails"
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          name="disabledFullscreen"
                          checked={state.disabledFullscreen}
                          onChange={handleChange}
                        />
                      }
                      label="Disabled Fullscreen"
                    />
                  </Stack>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Lightbox
        disabledZoom={state.disabledZoom}
        disabledTotal={state.disabledTotal}
        disabledVideo={state.disabledVideo}
        disabledCaptions={state.disabledCaptions}
        disabledSlideshow={state.disabledSlideshow}
        disabledThumbnails={state.disabledThumbnails}
        disabledFullscreen={state.disabledFullscreen}
        index={selectedImage}
        open={selectedImage >= 0}
        close={handleCloseBasic}
        slides={[
          ...imagesLightbox,
          {
            type: 'video',
            width: 1280,
            height: 720,
            poster:
              'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
            sources: [
              {
                src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                type: 'video/mp4',
              },
            ],
          },
        ]}
      />
    </>
  );
}
