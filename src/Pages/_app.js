import React from 'react';
import '../index.css';
import { OccurrenceProvider } from '../contexts/OccurrenceContext';

function MyApp({ Component, pageProps }) {
  return (
    <OccurrenceProvider>
      <Component {...pageProps} />
    </OccurrenceProvider>
  );
}

export default MyApp;
