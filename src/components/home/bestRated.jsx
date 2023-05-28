import React, { useState } from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import LearnMoreBtn from "./learnMoreBtn";
import data from "../../data/allProducts.json";

export const BestRated = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 4;

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  // Filter and sort the data based on the rate property
  const filteredData = data.filter((product) => product.rate >= 4); // Filter by rate value (e.g., 5)

  // Sort the filtered data based on the rate property
  const sortedData = filteredData.sort((a, b) => b.rate - a.rate); // Sort in descending order

  const currentCards = sortedData.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
      <Box marginTop={15}>
        <Typography textAlign="center" variant="h4" fontWeight={700}>
          Best Rated Products
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LaunchIcon fontSize="small" sx={{ marginTop: "3px" }} />
          <Link to="collection/best rated">View All</Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap="30px"
        flexWrap="wrap"
        sx={{ marginTop: "20px", p: "10px" }}
      >
        {currentCards.map((data) => (
          <CardActionArea key={data.id} sx={{ width: "250px" }}>
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
                alt="latest arrival item"
                height="200"
                image={data["images"][0].url}
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
                  {data.title}
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
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-around" }}>
                <Chip label={`$${data.price}`} />

                <LearnMoreBtn data={data.id} />
              </CardActions>
            </Card>
          </CardActionArea>
        ))}
      </Box>
      <Box display="flex" m={2}>
        <Pagination
          sx={{ margin: "auto" }}
          hidePrevButton
          hideNextButton
          count={4}
          onChange={(event) => setCurrentPage(event.target.textContent)}
          color="primary"
        />
      </Box>
    </>
  );
};
