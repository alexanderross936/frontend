import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Router from '../Router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

// import LoggedIn from './LoggedIn';
// Import { Link } here //

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
        const authLinks = (
            <ul>
            <li className="nav-list-item">
            <Link to="/ingredients_list">Ingredients List</Link>
        </li>
        <li className="nav-list-item">
            <Link to="/recipes_list">Recipes List</Link>
        </li>
        <li className="nav-list-item">
            <Link to="/add_recipe">Add Recipe</Link>
        </li>
        <li className="nav-list-item">
            <Link to="/add_ingredients">Add Ingredients</Link>
        </li>
        <li>
            <a onClick={logout} href='#!'>
                <i className="fas fa-sign-out-alt"></i>
                <span className="hide-sm">Logout</span></a>
        </li>
        </ul>
        )

        const guestLinks = (
            <ul>
            <li className="nav-list-item">
            <Link to="/login">Login</Link>
        </li>
        <li className="nav-list-item">
            <Link to="/register">Register</Link>
        </li>
            </ul>

        )
        return (
<AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                   Kitchen Inventory
                </Typography>
            
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                       {!loading && (<Fragment>
                           {isAuthenticated ? authLinks : guestLinks}
                       </Fragment>)}
                </ul>
              

            </Toolbar>
        </AppBar>
    )
        
    }

// Navigation.propTypes = {
//     logout: PropTypes.func.isRequired,
//     auth: PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
    auth: state.auth

})

export default connect(mapStateToProps, {logout})(Navigation);