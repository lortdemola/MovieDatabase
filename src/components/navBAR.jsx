import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from '../components/res/logo.png'

const NBAR  = (props) => {
   const [value,setvalue] = React.useState(0)
   let buttonADD;
   let buttonLOG;
   const someFunction = () => {
    
    window.localStorage.removeItem('userID')
    window.localStorage.removeItem('role') 
    window.location.href="/";
  };
  
      if(window.localStorage.getItem('userID') == null){
        buttonADD = <></>
        buttonLOG = <Nav class="d-flex align-items-center" style={{ marginLeft: '1vh'}}>
        <Button type="button" href='/signin'  style={{ marginRight: '5px' ,marginTop: '5px' ,background:'#FF983C',border:'black'}}>
        Login
        </Button>
        <Button type="button" href='/signup' style={{ marginTop: '5px',background:'#FF7800',border:'black'}} >
        Sign up for free
        </Button>
      </Nav>
      }else {
        buttonADD = <Nav.Link href="/add" style={{color:'#FF7800'}}>Add Movie</Nav.Link>
        
        buttonLOG = <Button type="button" onClick={ someFunction} style={{ marginTop: '5px',background:'#FF7800',border:'black'}} >
        Logout
        </Button>
      }
       return  <Navbar style={{background:'black',boxShadow: '1px 1px 2px black, 0 0 35px #FF7800, 0 0 10px #FF983D',minHeight:'10vh'}} expand="lg" >
       <Container fluid style={{background:'black'}}>
        <Navbar.Brand href="/"><img style={{color:'black'}}
              src={LOGO}
              width="120vh"
              height="80vh"
              alt="Baza Filmowa"/>
        </Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll"  style={{background:'#FF7800'}}/>
         <Navbar.Collapse id="navbarScroll" >
           <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' ,width:'23vh' }}
             navbarScroll
           >
             <Nav.Link href="/" style={{color:'#FF7800'}}>Home</Nav.Link>
             {buttonADD}
           </Nav>
           <Form class="d-flex align-items-center" style={{display:'flex',paddingLeft:'17%'}} >
             <Form.Control
               type="search"
               placeholder="Search"
               className="me-3"
               aria-label="Search"
               style={{marginTop: '5px',width:'30vw'}}
             />
             <Button variant="outline-success" style={{background:'#CA5F00',width:'15vw',marginLeft:'15%',marginRight: '5px',marginTop: '5px', border:'black',color:'white'}}>Search</Button>
           </Form>
           
           {buttonLOG}
         </Navbar.Collapse>
       </Container>
     </Navbar>
}


export default NBAR;