import React from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  CardActionArea,
  Chip,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import LearnMoreBtn from "./learnMoreBtn";
import data from "../../data/allProducts.json";

export const LatestArrival = () => {
  const latestItems = data.slice(-4);
  return (
    <>
      <Box marginTop={5}>
        <Typography textAlign="center" variant="h5" fontWeight={700}>
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
        gap={3}
      >
        {latestItems.map((item) => (
          <CardActionArea sx={{ maxWidth: "250px" }} key={item.id}>
            <Card sx={{ maxWidth: 250, margin: "auto", boxShadow: 0 }}>
              <Typography
                position="absolute"
                top={10}
                right={10}
                bgcolor="azure"
                color={"black"}
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
                  style={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  style={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-around" }}>
                <Chip label={`$${item.price}`} />
                <LearnMoreBtn data={item.id} />
              </CardActions>
            </Card>
          </CardActionArea>
        ))}
      </Box>
    </>
  );
};
