import AccountHeader from '../components/Account/AccountHeader';
import AccountOrders from '../components/Account/AccountOrders';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';


function Account({ user, orders }) {
  return <>
    <AccountHeader {...user} />
    <AccountOrders orders={orders} />
  </>;
}

Account.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { orders: [] };
  }

  const url = `${baseUrl}`
  const payload = {headers: { Authorization: token }};

  return { orders: [] };
}

export default Account;
