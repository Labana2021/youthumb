import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          // Include the AdSense ad unit in the header
          <div class="header-ad">
            <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="YOUR_ADSENSE_CLIENT_ID"
              data-ad-slot="YOUR_ADSENSE_SLOT_ID"
              data-ad-format="auto"></ins>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
