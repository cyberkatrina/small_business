import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
// import MenuIcon from "@mui/icons-material/Menu";

const checkAuth = () => {
  let cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const Navigation = (props) => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" style={{backgroundColor: '#3CB371'}}>
      <Toolbar>
        {/* <IconButton color="inherit">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {checkAuth() ?
            <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            <Link to="/login">Logout</Link>
          </li>
          
          :
          <li className="nav-list-item">
              <Link to="/login">Login</Link>
          </li> 
        }
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;