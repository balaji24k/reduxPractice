import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="text-color-white" >
              <NavLink className="m-2" to={"/profile"} >Profile</NavLink>
              <NavLink className="m-2" to={"/profile"} >Projects</NavLink>
              <NavLink className="m-2" to={"/profile"} >Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default Navigation;