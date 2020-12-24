
import Head from 'next/head';
import { useRouter } from 'next/router';
// ui
import GlobalStyles from '../ui/global-styles';
// ////////////////////////////////////////////////////////////

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat:wght@300;400;500&display=swap"
        />
        <meta name="revisit" content="14" />
        <meta http-equiv="content-language" content="uk" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Юридична компанія «Anwalt plus»" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="google-site-verification" content="j-9CrH-_vN5HY-u4yki83x243toKjNtNg2r6TDuDmKg" /> */}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} router={router} />
    </>
  );
}

export default MyApp
