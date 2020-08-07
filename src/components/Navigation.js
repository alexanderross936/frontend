import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Menu, ButtonGroup, MenuItem, MenuList, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Router from '../Router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

// import LoggedIn from './LoggedIn';
// Import { Link } here //

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
        
    const authLinks = 
        <Fragment>
            <ButtonGroup>
                <MenuItem>
            <Link to="/sum" style= {{ textDecoration: 'none' }}><Button color="white">Ingredients List</Button></Link>
                </MenuItem>
                <MenuItem>
            <Link to="/recipes_list" style= {{ textDecoration: 'none' }}><Button color="white">Recipes List</Button></Link>
                </MenuItem>
                </ButtonGroup>
                <MenuItem>
            <Link to="/add_recipe" style= {{ textDecoration: 'none' }}><Button color="white">Add Recipe</Button></Link>
                </MenuItem>
                <MenuItem>
            <Link to="/add_ingredients" style= {{ textDecoration: 'none' }}><Button color="white">Add Ingredients</Button></Link>
                </MenuItem>
                <MenuItem>
            <a onClick={logout} href='#!'>
                <span className="hide-sm" style= {{ textDecoration: 'none' }}><Button color="white">Logout</Button></span></a>
                </MenuItem>
                </Fragment>

        const guestLinks = (
            <Fragment>
            {/* // <ul className = "nav-list"> */}
            <MenuItem>
            <Link to="/login" style= {{ textDecoration: 'none' }}><Button color="white">Login</Button></Link>
            </MenuItem>
            <MenuItem>
            <Link to="/register" style= {{ textDecoration: 'none' }}><Button color="white">Register</Button></Link>
            </MenuItem>
            {/* </ul> */}
            </Fragment>

        )
        return (
            <React.Fragment>
<AppBar position="relative">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{ flexGrow: "1" }}>
                   Kitchen Inventory
                </Typography>
            
                {/* <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li> */}
                       {!loading && (<Fragment>
                           {isAuthenticated ? authLinks : guestLinks}
                       </Fragment>)}
                {/* </ul> */}
              

            </Toolbar>
        </AppBar>
            </React.Fragment>

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