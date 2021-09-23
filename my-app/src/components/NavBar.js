// import React from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import TypoGraphy from '@material-ui/core/Typography'
// import { Home, Book, AccountBox } from '@material-ui/icons'
 


// function NavBar(props) {

//     return (
//         <List component="nav">
//             <ListItem component="div" >

//                 <ListItemText inset>
//                     <TypoGraphy color="inherit" variant="subtitle1">
//                         Home  <Home />
//                     </TypoGraphy>
//                 </ListItemText>


//                 <ListItemText inset>
//                     <TypoGraphy color="inherit" variant="subtitle1">
//                         Posts <Book />
//                     </TypoGraphy>
//                 </ListItemText>
//                 {/* style={{ textDecoration: 'none', color: 'unset' }} */}
//                 {/* <NavLink to="/about"  > */}
//                 <ListItemText inset>
//                     <TypoGraphy color="inherit" variant="subtitle1">
//                         Contact <AccountBox />
//                         {/* <Link to="/contact" component="Contact">

//                         </Link> */}
//                     </TypoGraphy>
//                 </ListItemText>
//                 {/* </NavLink > */}
//             </ListItem >

//         </List>
//     )
// }


// export default NavBar;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">React Button</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <Nav.Link href="/Products">Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);