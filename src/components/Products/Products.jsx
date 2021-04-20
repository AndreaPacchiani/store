import React from 'react';
import { Grid, Typography }from '@material-ui/core';
import Product from './Product/Product';
import useStyle from './styles'




const Products = ({categories, onAddToCart}) =>{
    const classes=useStyle();
    console.log(categories)
    return(
    <div className={classes.content}>
        <main >
            <div className={classes.toolbar} />
            {categories.map(category=>{
                return(
                    <>
                    <section id={category.name}>
                        <Typography variant="h3" component="h2">
                            <br/>
                            {category.name}
                        </Typography>
                        <Grid container justify="center" spacing={4}>
                            {category.productsData.map((product)=>(
                                <Grid item key={product.id} spacing={0} xs={6} sm={6} md={4} lg={3} >
                                    <Product  product={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))}
                        </Grid>
                    </section>
                </>
                );
            })}
            
        </main>
        
    </div>
    );


}

export default Products;
