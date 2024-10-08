import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Link } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import { useLocales } from '../../locales';
import NextLink from 'next/link';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Blogs',
    link: '/blogs',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Books',
    link: 'https://t.me/lost_and_found_orthodox/4',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Courses',
    link: 'https://t.me/lost_and_found_orthodox',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const { translate: t } = useLocales();

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              {t('home.features.subtitle')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              {t('home.features.title')}
              <br />
              {t('home.features.title2')}
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <Image
                  src={card.icon}
                  alt={t(`home.features.${card.title}.title`)}
                  sx={{ mx: 'auto', width: 48, height: 48 }}
                />

                <Link component={NextLink} href={card.link} underline="none">
                  <Typography variant="h5" sx={{ mt: 8, mb: 2 }} href>
                    {t(`home.features.${card.title}.title`)}
                  </Typography>
                </Link>

                <Typography sx={{ color: 'text.secondary' }}>
                  {t(`home.features.${card.title}.description`)}
                </Typography>
              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
