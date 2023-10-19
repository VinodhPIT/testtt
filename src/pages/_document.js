// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QTM31PVEF"></script>
          <script
       async  src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo&libraries=places`}
        type="text/javascript"
      ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-1QTM31PVEF');
              `,
            }}
          />
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
