import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

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
      <script strategy="afterIntercative" src="https://www.googletagmanager.com/gtag/js?id=G-XT1TR5ED66" />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${G - XT1TR5ED66}');
    `}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
