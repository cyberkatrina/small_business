import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Grid } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // set cookie here
    document.cookie = `loggedIn=true;max-age=600`
    props.changeUser(state.username)
    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form style={{paddingTop: '50px'}} className="login-form" onSubmit={login}>
        <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                required
                onChange={handleTextChange}
                value={state.username}
                name="username"
                label="Username"
                type="text"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                required
                onChange={handleTextChange}
                value={state.password}
                name="password"
                label="Password"
                type="password"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                className="login-button"
                variant="contained"
                style={{backgroundColor: 'lightgray', color: 'black', marginTop: '10px'}}
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Login;