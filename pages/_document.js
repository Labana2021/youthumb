import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "@bradgarropy/next-google-analytics/dist/types/components/GoogleAnalytics/GoogleAnalytics";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
                 //- Google Tag Manager
          <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MBF5T3ZX');</script>
         // End Google Tag Manager
          <GoogleAnalytics measurementId="G-XT1TR5ED66" />
          <meta name="description" content="Your YouTube thumbnail download grabber saver description here" />
          <meta name="keywords" content="YouTube, thumbnail, download, grabber, saver" />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content="YouTube Thumbnail Grabber Saver" />
          <meta property="og:description" content="Download and save YouTube thumbnails easily with our grabber and saver tool." />
          <meta property="og:image" content="URL_TO_YOUR_THUMBNAIL_IMAGE" />
          <meta property="og:url" content="https://www.youtubethumbnailsdownloads.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="YouTube Thumbnail Grabber Saver" />
          <meta name="twitter:description" content="Download and save YouTube thumbnails easily with our grabber and saver tool." />
          <meta name="twitter:image" content="URL_TO_YOUR_THUMBNAIL_IMAGE" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

        </Head>
        <body>
          <Main />



          <NextScript />
         //- Google Tag Manager (noscript)
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBF5T3ZX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          // End Google Tag Manager (noscript)
        </body>
      </Html>
    );
  }
}

export default MyDocument;
