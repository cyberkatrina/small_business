import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
// import HomeContainer from './containers/HomeContainer'
// import About from './components/About'
// import Car from './components/Car'
// import Login from './components/Login'
import Login from './components/LoginComponent'
import Listing from './containers/ListingContainer'
import Details from './containers/DetailsContainer'
import Add from './components/AddComponent'

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