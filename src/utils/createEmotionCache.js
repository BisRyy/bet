import createCache from '@emotion/cache';

// ----------------------------------------------------------------------

const isBrowser = typeof document !== 'undefined';

export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'css', insertionPoint });
}
