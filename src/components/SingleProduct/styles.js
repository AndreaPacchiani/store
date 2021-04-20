import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(()=>({
    root:{
        maxWidth: '100%',
    },
    media:{
        paddingTop: '25%',  //16:9
        paddingLeft: '20px',
        width: '350px',
        height: "auto"

    },
    container:{
        marginTop: '20%',
    },
    button:{
        border:"1px solid red",
    },
    mainProd:{
        height: "400px"
    }

    
}));