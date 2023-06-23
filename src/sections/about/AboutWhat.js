import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';
// _mock_
import { _skills } from '../../_mock/arrays';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="/assets/images/eotc.png"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="/assets/images/eotcmk.jpg"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                History
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                }}
              >
                In 1977 E.C (Ethiopian Calendar) few students of higher education initiated the
                youth in the compass to become members of Sunday school and know the teachings of
                the churches. Later, this effort had been strengthened by students trained in the
                Zeaway Hamere Berehan St.Gebreil Clergy Training Monastery by the Then Arch Bishop
                of Shewa Abune Gorgorious II. The movements continued in Bilatie military camp that
                brought all students of higher institutions in the country in 1983 E.C after a year,
                with the blessing of the church fathers the associations was set up by the name
                “Mahibre Kidusan” under the Sunday School Department of the Ethiopian Orthodox
                Tewahedo Church. Since then the associations has been proving spiritual service.
              </Typography>
            </m.div>

            {/* <Box sx={{ my: 5 }}>
              {_skills.map((progress) => (
                <m.div key={progress.label} variants={varFade().inRight}>
                  <ProgressItem progress={progress} />
                </m.div>
              ))}
            </Box> */}

            <m.div variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
              >
                Check out our work
              </Button>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
