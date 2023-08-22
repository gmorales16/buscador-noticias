import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNoticias from "@/hooks/useNoticias";
import Noticia from "./Noticia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagination, pagina } =
    useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia: any) => (
          <Noticia
            key={noticia.url}
            urlToImage={noticia.urlToImage}
            url={noticia.url}
            title={noticia.title}
            description={noticia.description}
            source={noticia.source}
          />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginY: 5 }}
      >
        <Pagination
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagination}
          hidePrevButton
          hideNextButton
          page={pagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
