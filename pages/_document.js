import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="application-name" content="Nautical ColReg Quizzer" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Maritime ColReg Quizzer" />
        <meta name="description" content="Take A Quick Random Quiz On The International Maritime Collision Regulations (Also known as Rules of the Roads)." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#dde8f0" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#018abd" />

        <link rel="apple-touch-icon" href="/icon-512x512.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://colreg.vercel.app" />
        <meta name="twitter:title" content="Maritime ColReg Quizzer" />
        <meta name="twitter:description" content="Take A Quick Random Quiz On The International Maritime Collision Regulations (Also known as Rules of the Roads)." />
        <meta name="twitter:image" content="https://colreg.vercel.app/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@TheIbrahim_O" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maritime ColReg Quizzer" />
        <meta property="og:description" content="Take A Quick Random Quiz On The International Maritime Collision Regulations (Also known as Rules of the Roads)." />
        <meta property="og:site_name" content="Maritime ColReg Quizzer" />
        <meta property="og:url" content="https://colreg.vercel.app" />
        <meta property="og:image" content="https://colreg.vercel.app/icons/icon-192x192.png" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
