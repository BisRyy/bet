import PropTypes from 'prop-types';
// @mui
import { Box, Card, Rating, CardHeader, Typography, Stack } from '@mui/material';
// utils
import { fCurrency, fShortenNumber } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/label';
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';

// ----------------------------------------------------------------------

AppTopRelated.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default function AppTopRelated({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((app) => (
            <ApplicationItem key={app.id} app={app} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

ApplicationItem.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    review: PropTypes.number,
    system: PropTypes.string,
    shortcut: PropTypes.string,
  }),
};

function ApplicationItem({ app }) {
  const { shortcut, system, price, rating, review, name } = app;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 48,
          height: 48,
          flexShrink: 0,
          display: 'flex',
          borderRadius: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.neutral',
        }}
      >
        <Box component="img" src={shortcut} sx={{ width: 24, height: 24 }} />
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">{name}</Typography>
        <Stack direction="row" alignItems="center" sx={{ mt: 0.5, color: 'text.secondary' }}>
          <Iconify
            width={16}
            icon={system === 'Mac' ? 'ant-design:apple-filled' : 'ant-design:windows-filled'}
          />

          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            {system}
          </Typography>

          <Label variant="soft" color={price === 0 ? 'success' : 'error'}>
            {price === 0 ? 'Free' : fCurrency(price)}
          </Label>
        </Stack>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        <Rating readOnly size="small" precision={0.5} name="reviews" value={rating} />
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
          {fShortenNumber(review)} reviews
        </Typography>
      </Stack>
    </Stack>
  );
}
