import React from 'react'

import "./style.css"

import { Carousel } from 'react-bootstrap'
import { Grid } from '@material-ui/core';
const Homepage = () => {
    return (
        <div >
            <Carousel interval={3000} >
            
                <Carousel.Item id="item1" className="Item">
                   
                <Carousel.Caption>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >

                <Grid item xs={3}>
                    
                {/* <Button component={Link} to="/products" size="large" variant="outlined" style={{fontSize:30, height:300 }} color="primary">Inizia ad acquistare</Button> */}
                <h1><a href="#Palestra" className="LnkC">Palestra</a></h1>
                </Grid>   

            </Grid> 
                </Carousel.Caption>    
                    
                </Carousel.Item>
                <Carousel.Item id="item2" className="Item">
                  
                    <Carousel.Caption>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >

                <Grid item xs={3}>
                    
                {/* <Button component={Link} to="/products" size="large" variant="outlined" style={{fontSize:30, height:300}} color="primary">Inizia ad acquistare</Button> */}
                <h1><a href="#Nuoto" className="LnkC">Nuoto</a></h1>
                </Grid>   

            </Grid> 
                </Carousel.Caption>

                    
                </Carousel.Item>
                <Carousel.Item id="item3" className="Item">
                    
                    <Carousel.Caption>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >

                <Grid item xs={3}>
                    
                {/* <Button component={Link} to="#Sport"  size="large" variant="outlined" style={{fontSize:30, height:300}} color="primary">Inizia ad acquistare</Button> */}
                <h1><a href="#Sport" className="LnkC">Sport</a></h1>
                </Grid>   

            </Grid> 
                </Carousel.Caption>

                    
                </Carousel.Item>
            </Carousel>
            <hr id="Riga"/>
            
        </div>
    )
}

export default Homepage
