import React from 'react'
import { Grid } from '@material-ui/core';
import "./style.css";

const Footer = () => {
    return (
        
            <Grid container align="center" className="footer animate__animated animate__fadeIn animate__delay-3s" spacing={4}>
                <Grid xs={4}  item>
                    Chi siamo?
                    <br/>
                    Dove siamo?
                    <br/>
                    Telefono: 392869053
                    
                </Grid> 
                <Grid xs={4}  item>
                    © Copyright - 2021 
                    <br/> Andrea Pacchiani 
                    <br/> Federico Placentino 
                    <br/> Riccardo Mingon
                </Grid> 
                <Grid xs={4}  item>
                    ciao
                </Grid> 
            </Grid>
        
    )
}

export default Footer
