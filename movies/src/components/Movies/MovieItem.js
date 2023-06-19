import React from "react";
import {
  Card,
  Typography,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        width: 250,
        height: 320,
        borderRadius: 5,
        margin: 2,
        ":hover": { boxShadow: "10px 10px 20px #ccc" },
      }}
    >
      <img height={"50%"} width={"100%"} src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          to={`/booking/${id}`}
          sx={{ margin: "auto" }}
          size="small"
          variant="contained"
          disableElevation
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
