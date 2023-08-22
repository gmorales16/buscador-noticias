import {
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

interface NoticiaProps {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
  source: {
    name: string;
  };
}

const Noticia = (props: NoticiaProps) => {
  const { urlToImage, url, title, description, source } = props;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={250}
          />
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" component="div">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={"100%"}
            textAlign={"center"}
            sx={{ textDecoration: "none" }}
          >
            Leer Noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
