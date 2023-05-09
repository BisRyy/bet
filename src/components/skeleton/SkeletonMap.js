// @mui
import { Stack, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonMap({ ...other }) {
  return (
    <Stack spacing={8} {...other}>
      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          sx={{ width: 1, height: 560, borderRadius: 2 }}
        />
      ))}
    </Stack>
  );
}
