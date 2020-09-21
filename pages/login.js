import { Form, Segment, Button, Message, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import React from 'react';
import catchErrors from '../utils/catchErrors';


const INITIAL_USER = {
  email: "",
  password: ""
}


function Login() {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');


  React.useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user])

  function handleChange(e) {
    const { name, value} = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    try {
      setLoading(true);
      setError('');
      console.log(user);
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false);
    }
  }

  return <>
    <Message
      attached
      icon="privacy"
      header="Welcome Back!"
      content="Login with email and password."
      color="teal"
    />

    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Segment>
        <Message
          error
          header="Ruh-roh"
          content={error}
        />
        <Form.Input
          fluid
          icon="envelope"
          iconPosition="left"
          label="Email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          label="Password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={user.password}
          type="password"
        />
        <Button
          icon="sign in"
          type="submit"
          color="orange"
          content="Login"
          disabled={disabled || loading}
        />
      </Segment>
    </Form>
    <Message warning attached="bottom">
      <Icon name='help' />
      New user?{" "}
      <Link href="/signup">
        <a>Sign up here</a>
      </Link>{" "}instead.
    </Message>
  </>;
}


export default Login;
