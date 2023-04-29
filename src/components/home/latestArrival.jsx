import React from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip } from "@mui/material";
import data from "../../data/latestArrivalData.json";
import "../../styles/learnMoreBtn.css";

export const LatestArrival = () => {
  return (
    <>
      <Box marginTop={5}>
        <Typography textAlign="center" variant="h4" fontWeight={700}>
          LATEST ARRIVAL
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LaunchIcon fontSize="small" sx={{ marginTop: "3px" }} />
          <Link to="collection/latest">View All</Link>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent="center"
        marginTop="20px"
        p="10px"
      >
        {data.map((item) => (
          <CardActionArea sx={{ maxWidth: "250px" }} key={item.id}>
            <Card sx={{ maxWidth: 250, margin: "auto", boxShadow: 0 }}>
              <Typography
                position="absolute"
                top={10}
                right={10}
                bgcolor="#C8C4C8"
                p={1}
                borderRadius={1}
                fontSize={12}
              >
                New
              </Typography>
              <CardMedia
                component="img"
                alt="shirt"
                height="300"
                image={item.images[0].url}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="title"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  className="description"
                >
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-around" }}>
                <Chip label={item.price} />
                <Link
                  to={`/productDetails/${item.id}`}
                  className="learnMoreBtn"
                >
                  Learn More
                </Link>
              </CardActions>
            </Card>
          </CardActionArea>
        ))}
      </Box>
    </>
  );
};
