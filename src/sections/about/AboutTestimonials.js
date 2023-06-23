import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur, bgGradient } from '../../utils/cssStyles';
import { fDate } from '../../utils/formatTime';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------
const TESTIMONIALS = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    dateCreate: new Date('2022-05-25'),
    content: `Excellent Work! Thanks a lot!`,
  },
  {
    name: 'Amanuel T., Addis Ababa',
    rating: 5,
    dateCreate: new Date(),
    content: `The course features are comprehensive and well-structured, allowing me to deepen my understanding of our faith at my own pace. The blogs offer insightful articles that help me explore different aspects of spirituality, while the spiritual calendar keeps me connected to important dates and events. `,
  },
  {
    name: 'Selamawit K., Gondar',
    rating: 5,
    dateCreate: new Date('2023-02-23'),
    content: `As a lifelong member of the Ethiopian Orthodox Tewahedo Church, I've always sought ways to expand my knowledge and spiritual growth. `,
  },
  {
    name: 'Yared M., Lalibela',
    rating: 5,
    dateCreate: new Date(),
    content: `Amazing, really good quality videos!`,
  },
  {
    name: 'Bethlehem A., Axum',
    rating: 5,
    dateCreate: new Date('2022-12-01'),
    content: `The blog sections thought-provoking articles that have broadened my understanding of our faith and challenged me to grow spiritually. The inclusion of a spiritual calendar is a wonderful touch, helping me stay connected to our traditions throughout the year.`,
  },
  {
    name: 'Dawit H., Dire Dawa',
    rating: 5,
    dateCreate: new Date('2021-10-10'),
    content: `The spiritual calendar keeps me connected to our religious traditions and ensures I never miss an important occasion. The chat feature is an excellent tool for seeking guidance and connecting with fellow believers. This platform has truly deepened my knowledge of the Ethiopian Orthodox Tewahedo Church and strengthened my faith.`,
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/images/about/testimonials.jpg',
  }),
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: 0,
    height: 840,
    textAlign: 'left',
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.secondary' }}
                >
                  Testimonials
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  What our students say
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white' }}>
                  Our goal's are 
                  <br />
                  <br />
                  To organize the youth, who are the children of the church, in higher education
                  under the association and provide them with the teachings of the church.
                  <br />
                  <br />
                  To expand evangelism with various means (ministry, publication, audio and video
                  recordings) in cooperation with the pertinent church bodies.
                  <br />
                  <br />
                  To prepare conditions that enable the educated section of the society support the
                  Orthodox Church with his/her knowledge and assets.
                  <br />
                  <br />
                  To enable the members of the association render free and humanitarian service. To
                  preserve the generation of the dignity and fame of the church fathers.
                  <br />
                  <br />
                </Typography>
              </m.div>

              {!isDesktop && (
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <m.div variants={varFade().inUp}>
                    <TestimonialLink />
                  </m.div>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: 'absolute' },
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {isDesktop && (
          <Box sx={{ bottom: 60, position: 'absolute' }}>
            <m.div variants={varFade().inLeft}>
              <TestimonialLink />
            </m.div>
          </Box>
        )}
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    content: PropTypes.string,
    dateCreate: PropTypes.instanceOf(Date),
  }),
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>

      <Typography gutterBottom component="div" variant="caption" sx={{ color: 'grey.500' }}>
        {fDate(dateCreate)}
      </Typography>

      <Rating value={rating} readOnly size="small" />

      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Iconify icon="ic:round-arrow-right-alt" sx={{ ml: 1 }} />
    </Link>
  );
}
