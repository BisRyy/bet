// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// _mock
import { _socials } from '../../_mock/arrays';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
import Label from '../../components/label';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Beteliq',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'dev@bisrat.tech', href: 'mailto:dev@bisrat.tech' },
      { name: 'AASTU, Addis Ababa, Ethiopia', href: '#' },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo />

        <Typography variant="caption" component="div">
          <Link href="https://github.com/bisryy/bet" target="_blank">
            Open Source{' '}
          </Link>
          © No rights reserved. 2017 / 2024.
        </Typography>
        <Typography variant="caption" component="div">
          <br /> Made by &nbsp;
          <Link href="https://bisry.me/" target="_blank">
            Bisrat Kebere{' '}
          </Link>
        </Typography>
      </Container>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="center"
        sx={{
          mt: 1,
          mb: { xs: 5, md: 3 },
        }}
      >
        {_socials.map((social) => (
          <IconButton key={social.name} href={social.path} target="_blank">
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              The "Bete Liq" Education platform is a web application designed to provide spiritual
              education to members of the Ethiopian Orthodox Tewahedo Church. The platform is
              intended to serve as a digital learning resource, providing a wide range of spiritual
              content and educational materials for users to access from the comfort of their homes.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={NextLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2017 / 2024. No rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return isHome ? simpleFooter : mainFooter;
}
