import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useEffect } from 'react';
import { initGA, logPageView } from 'analytics.js';
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://www.youtubethumbnailsdownloads.com"
        openGraph={{
          url: "https://www.youtubethumbnailsdownloads.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />


      <Component {...pageProps} />
    </Fragment>

  );
  function MyApp({ Component, pageProps }) {
    useEffect(() => {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }, []);

    return <Component {...pageProps} />;
  }
}

export default MyApp;
