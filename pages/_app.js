import GlobalStyles from "../styles/GlobalStyles";
import NextHead from "next/head";
import Layout from "../layout";
import App from "next/app";
import "../styles/globals.css";

class myApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NextHead>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </NextHead>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default myApp;
