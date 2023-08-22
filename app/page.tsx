"use client";

import { Container, Grid, Typography } from "@mui/material";
import Formulario from "@/components/Formulario";
import { NoticiasProvider } from "@/context/NoticiasProvider";
import ListadoNoticias from "@/components/ListadoNoticias";

export default function Home() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h1">
            Buscador De Noticias
          </Typography>
        </header>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item md={6} xs={12} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
      <ListadoNoticias />
    </NoticiasProvider>
  );
}
