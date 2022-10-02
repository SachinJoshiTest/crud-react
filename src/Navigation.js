import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
    constructor(props) {
        console.log("Constructor is called before anything else");
        super(props);
      }
    
      componentDidMount() {
        console.log("Component mounting");
      }
    
      componentDidUpdate() {
        console.log("Component is updated");
      }
    
      componentWillUnmount() {
        console.log("Component is being unmounted");
      }
    
      render() {
      return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/crud-react/home">Book Management</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/crud-react/home">Home</Nav.Link>
                <Nav.Link href="/crud-react/users">Users</Nav.Link>
                <Nav.Link href="/crud-react/pricing">Pricing</Nav.Link>
                <Nav.Link href="/crud-react/aboutus">Aboutus</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
            
      );
    }
}
export default Navigation;
