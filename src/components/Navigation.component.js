import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = ({ onRouteChange, isSignedIn}) => {
//   return (
//     <ul>
//         {
//             isSignedIn ? 
//         (
//             <li>
//             <button onClick={() => onRouteChange("signout")}>Sign Out</button>
//         </li>
//         )
//         :
//         (
//             <>
//             <li>
//             <button onClick={() => onRouteChange("home")}>Sign In</button>
//         </li>
//         <li>
//             <button onClick={() => onRouteChange("register")}>Register</button>
//         </li>
//             </>
//         )
// }
//     </ul>
//   )

return(
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
)
}

export default Navigation