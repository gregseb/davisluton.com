import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import RouteNavItem from './components/RouteNavItem';
import './App.css';
import Routes from "./Routes";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {}

    render() {
        const childProps = {};


        return (
            !this.state.isAuthenticating &&
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                <div class="SiteName">Davis Luton</div>
                                <div className="Slogan">graphic design</div>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {this.state.isAuthenticated
                                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                                : [
                                    <RouteNavItem key={1} href="/work">Work</RouteNavItem>,
                                    <RouteNavItem key={2} href="/about">About</RouteNavItem>,
                                    <RouteNavItem key={3} href="/contact">Contact</RouteNavItem>
                                ]}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Routes childProps={childProps} />
            </div>
        );
    }
}

export default withRouter(App);
