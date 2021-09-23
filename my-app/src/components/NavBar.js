import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'
 


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Home  <Home />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Posts <Book />
                    </TypoGraphy>
                </ListItemText>
                {/* style={{ textDecoration: 'none', color: 'unset' }} */}
                {/* <NavLink to="/about"  > */}
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Contact <AccountBox />
                        {/* <Link to="/contact" component="Contact">

                        </Link> */}
                    </TypoGraphy>
                </ListItemText>
                {/* </NavLink > */}
            </ListItem >

        </List>
    )
}


export default NavBar;