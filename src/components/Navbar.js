// LIBRARIES
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
// USER-DEFINED COMPONENTS
import SignOut from "../containers/SignOut";
// IMAGES
import Camera from "../images/camera.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="navBarDiv">
        <Navbar
          color="white"
          light
          expand="md"
          className="d-flex justify-content-space flex-row"
        >
          <NavbarBrand
            id="navBarMiddle"
            href="/"
            style={navBar}
            className="d-flex align-items-center col-3 col-sm-5"
          >
            <div
              className="d-flex justify-content-center align-items-center ml-0 pl-0"
              id="icontainer"
            >
              <img className="mr-2" src={Camera} id="icon" alt="Camera logo" />
            </div>
            Meistagram
          </NavbarBrand>

          <FormGroup className="my-auto mx-auto col-2" id="searchBar">
            <Form>
              <Input
                type="text"
                placeholder="Search"
                className="navBarSearch"
              />
            </Form>
          </FormGroup>

          <NavbarToggler onClick={this.toggle} />
          <Collapse className="col-sm-5" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  Discover
                </NavLink>
              </NavItem>
              {this.props.anon !== null ? (
                <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Notifications
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Follow Requests</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Likes</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="nav-links" nav caret>
                      My Profile
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link className="nav-links" to="/profile">
                          Profile Page
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="divider" />
                      <DropdownItem>
                        <Link className="nav-links" to="/">
                          <SignOut setUser={this.props.setUser} />
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : null}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const navBar = {
  fontFamily: "Billabong",
  fontSize: "2em"
};

export default NavBar;

/* <div>
Icons made by{" "}
<a href="https://www.flaticon.com/authors/coucou" title="Coucou">
  Coucou
</a>{" "}
from{" "}
<a href="https://www.flaticon.com/" title="Flaticon">
  www.flaticon.com
</a>{" "}
is licensed by{" "}
<a
  href="http://creativecommons.org/licenses/by/3.0/"
  title="Creative Commons BY 3.0"
  target="_blank"
>
  CC 3.0 BY
</a>
</div> */
//}

// <div>
//   Icons made by{" "}
//   <a href="https://www.freepik.com/" title="Freepik">
//     Freepik
//   </a>{" "}
//   from{" "}
//   <a href="https://www.flaticon.com/" title="Flaticon">
//     www.flaticon.com
//   </a>{" "}
//   is licensed by{" "}
//   <a
//     href="http://creativecommons.org/licenses/by/3.0/"
//     title="Creative Commons BY 3.0"
//     target="_blank"
//   >
//     CC 3.0 BY
//   </a>
// </div>;
