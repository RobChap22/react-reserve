import { Header, Icon, Segment, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

function AccountOrders({ orders }) {
  const router = useRouter()

  return <>
    <Header as="h2" icon>
      <Icon name="folder open"/>
      Order History
    </Header>
    <Segment inverted tertiary color="grey" textAlign="center">
      <Header icon>
        <Icon name="copy outline" />
        No orders yet.
      </Header>
      <div>
        <Button onClick={() => router.push('/')} color="orange" >
          View Products
        </Button>
      </div>
    </Segment>
  </>;
}

export default AccountOrders;
