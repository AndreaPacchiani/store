import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import {Grid} from '@material-ui/core'
import useStyles from './style';

import {Link} from "react-router-dom";

const NavBar = ({totalItems}) => {
    const classes= useStyles();
    return (
        <div>
            <AppBar position="fixed"  color="inherit">
                <Toolbar>
                    <Typography  variant="h6" className={classes.appBar} color="inherit">
                        
                        <Grid  container>
                            <div className={classes.toolbar}/>
                            <Grid component={Link} to="/" item xs={1}>
                                <img style={{height: "70px", width: "auto" }}  src="./favicon.ico" alt="logo" height="30px"  />
                            </Grid>
                            

                        {/* <Grid item  xs={4} >
                            <Typography align="center" variant="h6" >Nome Store</Typography>
                        </Grid>    */}

                        </Grid> 
                        
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Mostra i prodotti nel carrello" color="inherit" component={Link} to="/cart" >
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCartSharpIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
