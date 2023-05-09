import { useState } from 'react';
// next
import Head from 'next/head';
// @mui
import {
  Box,
  Stack,
  Switch,
  Divider,
  Container,
  Typography,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// layouts
import MainLayout from '../../../layouts/main';
// components
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections
import { ReactHookForm } from '../../../sections/_examples/extra/form';

// ----------------------------------------------------------------------

DemoFormValidationPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function DemoFormValidationPage() {
  const [debug, setDebug] = useState(true);

  const handleChangeDebug = (event) => {
    setDebug(event.target.checked);
  };

  return (
    <>
      <Head>
        <title> Extra Components: Form Validation | Minimal UI</title>
      </Head>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Form Validation"
            links={[
              { name: 'Components', href: PATH_PAGE.components },
              { name: 'Form Validation' },
            ]}
            moreLink={['https://react-hook-form.com/', 'https://github.com/jquense/yup']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4"> React Hook Form + Yup </Typography>
          <FormControlLabel
            control={<Switch checked={debug} onChange={handleChangeDebug} />}
            label="Show Debug"
            labelPlacement="start"
          />
        </Stack>

        <Divider sx={{ my: 5 }} />

        <ReactHookForm debug={debug} />
      </Container>
    </>
  );
}
