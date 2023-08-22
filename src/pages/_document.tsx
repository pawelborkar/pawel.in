import { Analytics } from '@vercel/analytics/react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundColor : '#F1e6c1',}}>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
