import { Header, Segment, Button, Icon } from 'semantic-ui-react';


function CartItemList() {
  const user = true;

  return (
    <Segment secondary color="teal" inverted textAlign="center" placeholder>
      <Header icon>
        <Icon name="shopping basket" />
        No products in your cart. Add some!
      </Header>
      <div>
        {user ? (
          <Button color="orange">View products</Button>
        ) : (
          <Button color="blue">Login to view Products</Button>
        )}
      </div>
    </Segment>
  );
}

export default CartItemList;
