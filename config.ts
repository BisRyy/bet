// API
// ----------------------------------------------------------------------

export const HOST_API =
  process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_API || '' : process.env.DEV_API ? process.env.DEV_API : '';
