import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const LoginForm = (props) => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 40%;
      }
    `}</style>
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?{" "}
          <a
            href="#"
            name="signup"
            onClick={() => props.history.push("/signup")}>
            Sign Up
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
