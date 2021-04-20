import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import {Link} from "react-router-dom";


const Cart = ({ cart, empty, update, remove}) => {
  const classes = useStyles();



  const renderEmptyCart = () => (
    <Typography className=" ciao" variant="subtitle1">Non hai prodotti nel carrello, <Link className={classes.link} to="/products">aggiungi qualcosa</Link>!</Typography>
  );


  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
          <CartItem update={update} remove={remove} item={lineItem} />


          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} onClick={empty} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );
  
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Il tuo carrello</Typography>
      { !cart.total_unique_items ? renderEmptyCart() : renderCart() }
      
    </Container>
  );
};

export default Cart;
