import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from '../components/res/logo.png'

class NBAR extends Component {
   state = {
       value: 0
   };

   setNewValue = () => {
       this.setState({value: 1});
   };
    render() {
       return  <Navbar style={{background:'black',boxShadow: '1px 1px 2px black, 0 0 35px #FF7800, 0 0 10px #FF983D',minHeight:'5vh'}} expand="lg" >
       <Container fluid style={{background:'black'}}>
        <Navbar.Brand href="#"><img style={{color:'black'}}
              src={LOGO}
              width="120vh"
              height="80vh"
              alt="Baza Filmowa"/>
        </Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll"  style={{background:'#FF7800'}}/>
         <Navbar.Collapse id="navbarScroll" >
           <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll
           >
             <Nav.Link href="#action1" style={{color:'#FF7800'}}>Home</Nav.Link>
             <Nav.Link href="#action2" style={{color:'#FF7800'}}>Link</Nav.Link>
           </Nav>
           <Form className="d-flex"  >
             <Form.Control
               type="search"
               placeholder="Search"
               className="me-2"
               aria-label="Search"
               style={{marginTop: '5px'}}
             />
             <Button variant="outline-success" style={{background:'#CA5F00',marginRight: '5px',marginTop: '5px', border:'black',color:'white'}}>Search</Button>
           </Form>
           
           <Nav class="d-flex align-items-center" style={{ marginLeft: '1vh'}}>
                <Button type="button"  style={{ marginRight: '5px' ,marginTop: '5px' ,background:'#FF983C',border:'black'}}>
                Login
                </Button>
                <Button type="button" style={{ marginTop: '5px',background:'#FF7800',border:'black'}} >
                Sign up for free
                </Button>
                
        </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   }
}

export default NBAR;