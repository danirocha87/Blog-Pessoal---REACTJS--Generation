import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material'


function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#FFB6C1", height: "120px" }}>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/daniela.rocha.391420" target="_blank">
                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a href="https://www.instagram.com/daniela_oliver.rocha//" target="_blank">
                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/in/daniela-rocha-a6337932/" target="_blank">
                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#FFB6C1", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Daniela Rocha</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;