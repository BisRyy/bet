// next
import Head from 'next/head';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// _mock_
import {
  _appFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _appInvoices,
  _analyticPost
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
// assets
import { SeoIllustration } from '../../assets/illustrations';
import { AnalyticsNewsUpdate } from '../../sections/@dashboard/general/analytics';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

GeneralAppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  const { user } = useAuthContext();

  const { translate } = useLocales();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> General: App | Bete Liq</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`${translate("auth.welcome")} \n ${user?.displayName}`}
              description={translate('auth.welcomeDescription')}
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AnalyticsNewsUpdate title="News Update" list={_analyticPost} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
