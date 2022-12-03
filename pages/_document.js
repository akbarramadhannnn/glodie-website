import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            // optimized for english characters (40kb -> 6kb)
            href="/static/fonts/DynaPuff-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            // optimized for english characters (40kb -> 6kb)
            href="/static/fonts/DynaPuff-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            // optimized for english characters (40kb -> 6kb)
            href="/static/fonts/DynaPuff-SemiBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            // optimized for english characters (40kb -> 6kb)
            href="/static/fonts/DynaPuff-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            // optimized for english characters (40kb -> 6kb)
            href="/static/fonts/GloriaHallelujah-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                  font-family: "DynaPuff";
                  src: url("/static/fonts/DynaPuff-Regular.ttf") format("truetype");
                  font-weight: 400;
                  font-style: normal;
                  font-display: swap;
                }`,
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                font-family: "DynaPuff";
                src: url("/static/fonts/DynaPuff-Medium.ttf") format("truetype");
                font-weight: 500;
                font-style: normal;
                font-display: swap;
              }`,
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                font-family: "DynaPuff";
                src: url("/static/fonts/DynaPuff-SemiBold.ttf") format("truetype");
                font-weight: 600;
                font-style: normal;
                font-display: swap;
              }`,
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                font-family: "DynaPuff";
                src: url("/static/fonts/DynaPuff-Bold.ttf") format("truetype");
                font-weight: 700;
                font-style: normal;
                font-display: swap;
              }`,
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                font-family: "Gloria Hallelujah";
                src: url("/static/fonts/GloriaHallelujah-Regular.ttf") format("truetype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }`,
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
