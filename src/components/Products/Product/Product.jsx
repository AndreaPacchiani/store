import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import useStyles from './styles'
import {Link} from "react-router-dom";
import './style.css'

const Product = ({product, onAddToCart}) => {
    const classes= useStyles();


    // return <div>test</div>

    return (
        <div className={"animate__animated animate__fadeIn " +classes.prodotto}>
            <br/>
            <Card className={classes.root}>
                
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent className="animate__animated animate__fadeIn animate__delay-1s descrizione">
                    <div className={classes.cardContent}>
                        <Typography variant="h6" gutterBottom >
                            {product.name}
                        </Typography>
                        <Typography variant="h6" >
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography  dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
                </CardContent>
                
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton onClick={()=>onAddToCart(product.id, 1)} >
                        <AddShoppingCartSharpIcon/>
                    </IconButton>
                    <Typography id="view"  component={Link} to={"product-view/"+product.id} variant="button">Visualizza</Typography>
                </CardActions>
                
                
            </Card>
        </div>
    )
}

export default Product
