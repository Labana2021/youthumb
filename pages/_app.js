import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import GoogleAnalytics from "@bradgarropy/next-google-analytics/dist/types/components/GoogleAnalytics/GoogleAnalytics";

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

      <GoogleAnalytics measurementId="G-XT1TR5ED66" />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
