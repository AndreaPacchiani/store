import React from 'react'
import { Grid, Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';

import useStyles from './styles'
import {Link} from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';




const SingleProduct = ({ onAddToCart }) => {
  const classes= useStyles();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, media, quantity, description } = response;
    setProduct({
      id,
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  const handleQuantity = (param) => {
    if(quantity+param>0){
      setQuantity(quantity+param)
    }
    
  };

  return (
    
    <Container className="product-view">
      <Box className={classes.button} component="span" m={1}>
        <KeyboardBackspaceIcon color="primary" className="back" component={Link} to="/products"/>
      </Box>
      <Grid container spacing={4}  className={classes.mainProd}>
        <Grid item xs={12} md={8} >
          <img src={product.src} alt={product.name} className={classes.media}/>
        </Grid>
        <Grid item xs={12} md={4}  className={classes.container}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>

          <Typography variant="h3">Prezzo del prodotto: {product.price}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button size="small" variant="contained" onClick={() => {
                  handleQuantity(1);
                }}
              >
                +
              </Button>
              <Typography variant="h3">
                Quantità: {quantity}
              </Typography>
              
              <Button size="small" color="secondary" variant="contained" onClick={() => {
                  handleQuantity(-1);
                }}
              >
                -
              </Button>
            </Grid>
            
            
            <Grid item xs={12}>
              <Button size="large" onClick={() => {
                    onAddToCart(product.id, quantity);
                }}
              >
                <ShoppingCart /> Aggiungi al carrello
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     
    </Container>
  );
}

export default SingleProduct
