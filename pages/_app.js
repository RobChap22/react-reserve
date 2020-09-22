import App from "next/app";
import axios from 'axios';
import { parseCookies } from 'nookies';
import Layout from '../components/_App/Layout';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';



class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute = cxt.pathname === '/account' || cxt.pathname === '/create'
      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
    } else {
      try {
        const url = `${baseUrl}/api/account`;
        const payload = { headers: { Authorization: token } };
        const response = await axios.get(url, payload);
        const user = response.data;
        pageProps.user = user;
      } catch (error) {
        console.error("Error getting current user", error);
      }
    }

    return { pageProps };
  }


  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps} >
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
