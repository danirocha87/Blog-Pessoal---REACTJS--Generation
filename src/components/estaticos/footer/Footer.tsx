import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent =  <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className="box1">
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://web.facebook.com/daniela.rocha.391420" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className="redes"/>
                    </a>
                    <a href="https://www.instagram.com/daniela_oliver.rocha/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="redes" />
                    </a>
                    <a href="https://www.linkedin.com/in/daniela-rocha-a6337932/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="redes" />
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className="textos">© 2022 Copyright:</Typography>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>  {footerComponent} </>
    )
}

export default Footer;