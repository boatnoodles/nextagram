import React from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: []
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    // Prevent submission if any of the fields are empty
    const { password, email } = this.state;
    const stateValues = Object.values(this.state);
    stateValues.forEach(value => {
      if (value === "") {
        e.preventDefault();
      } else {
        axios
          .post("https://insta.nextacademy.com/api/v1/login", {
            email,
            password
          })
          .then(response => {
            if (response.status === 201) {
              localStorage.setItem("jwt", response.data.auth_token);
              localStorage.setItem("id", response.data.user.id);
              this.props.setUser(response.data);
            }
          })
          .catch(error => {
            this.setState({
              errorMsg: "Incorrect email or password"
            });
          });
      }
    });
  };

  render() {
    const { email, password, errorMsg } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            invalid={Boolean(errorMsg.length)}
            type="email"
            name="email"
            id="loginEmail"
            placeholder=""
            onChange={this.handleChange}
          />
          <FormFeedback>{errorMsg}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            invalid={Boolean(errorMsg.length)}
            type="password"
            name="password"
            id="loginPassword"
            placeholder=""
            onChange={this.handleChange}
          />
        </FormGroup>
        New Member? Sign up{" "}
        <span className="form-link" onClick={this.props.handleClick}>
          here!
        </span>
        <hr />
        <div className="row">
          <div className="col-3">
            <Button
              color="primary"
              disabled={!isEnabled}
              onClick={e => {
                // First function runs second, causing problems
                this.handleSubmit(e);
                // setTimeout(context.setUser(), 5000);
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default Login;
