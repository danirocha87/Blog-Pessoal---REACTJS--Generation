import React from "react";
import "./Home.css";
import { Button, Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Grid container className="caixa">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="titulo"
            >
              Bem vindo ao Blog da Dani
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="apresentacao"
            >
              Estou muito feliz em ver você por aqui!
              Seja bem vindo(a)!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts">
              <Button variant="outlined" className="botao">
                Da uma espiadinha nas minhas postagens!
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="https://i.imgur.com/XOIrcHA.jpg" alt="foto de uma mesa com noteboote e rosas em cima" width="767px" height="470px" />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
