import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   const user = false
   return (
      <AppBar color={"secondary"} position="static">
         <Toolbar >
            <Grid container justify={"flex-end"}>
               {user
                  ?
                  <Button variant={'outlined'}>Out</Button>
                  :
                  <NavLink>
                     <Button variant={'outlined'}>Login</Button>
                  </NavLink>
               }
            </Grid>
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
