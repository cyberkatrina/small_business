import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Login from './containers/LoginContainer'
import Listing from './containers/ListingContainer'
import Details from './containers/DetailsContainer'
import Add from './containers/AddContainer'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    let cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}


// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        checkAuth() ? <Component {...rest}/> : <Navigate to='/login'/>
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Listing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/add" element={<ProtectedRoute component={Add}/>} />
        </Routes>
    );
};

export default Router;