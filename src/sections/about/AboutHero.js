import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/eotcmk.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <TextAnimate
            text="About"
            sx={{
              color: 'primary.main',
            }}
            variants={varFade().inRight}
          />

          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
            <TextAnimate text="Mahbere" />
            <TextAnimate text="Kidusan" />
          </Stack>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h5"
              sx={{
                m: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              The association was named Mahibre Kidusan (an association in the name of Saints)
              Saints would be commemorated in that they abounded the secular world and sacrificed
              their lives to the orthodox belief for whom the prophets prophesized and apostles
              evangelized.
            </Typography>
          </m.div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
