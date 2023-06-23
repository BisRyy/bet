import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image src="/assets/images/home/for_teachers.png" alt="about-vision" />

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          sx={{
            bottom: { xs: 24, md: 40 },
            width: 1,
            opacity: 0.48,
            position: 'absolute',
          }}
        >
          {/* {['ibm', 'lya', 'spotify', 'netflix', 'hbo', 'amazon'].map((logo) => (
            <m.div key={logo} variants={varFade().in}>
              <Image
                alt={logo}
                src={`/assets/icons/brands/ic_brand_${logo}.svg`}
                sx={{
                  m: { xs: 1.5, md: 2.5 },
                  height: { xs: 24, md: 40 },
                }}
              />
            </m.div>
          ))} */}
        </Stack>
      </Box>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mb: 3, textAlign: 'center' }}>
          Necessity
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto' }}>
          To keep the youth in higher institutions who baptized and become children of the Holy
          Spirit from heretics who use various means to trap and deviate to their belief.
          <br />
          <br />
          To design favorable means for students of higher institutions to know and preserve as well
          as pass to the next generation the canon and tradition of the church passed on to them by
          forefathers of the church.
          <br />
          <br />
          To enable the youth overcome the social problems up on graduation and in serving their
          country and the church with their profession. To follow up the youth's adherence and
          practice of the orthodox belief.
        </Typography>
      </m.div>
    </Container>
  );
}
