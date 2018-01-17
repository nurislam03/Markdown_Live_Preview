import React, { Component } from 'react';
import {
    Navbar,
    NavItem,
    Nav
} from 'react-bootstrap';

function PageHead() {
    const navbarInstance = (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Markdown Live Preview</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Welcome
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    return(
        navbarInstance
    );
}


class PageHeader extends Component {
    render() {
        return (
          <PageHead />
        );
    }
}

export default PageHeader;
