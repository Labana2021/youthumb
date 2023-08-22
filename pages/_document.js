import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XT1TR5ED66"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XT1TR5ED66');
          </script>
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
