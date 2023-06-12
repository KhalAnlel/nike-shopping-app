import React, { useState } from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip } from "@mui/material";
import Pages from "../common/pages";
import LearnMoreBtn from "./learnMoreBtn";
import data from "../../data/allProducts.json";

export const BestRated = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 4;

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  // Filter and sort the data based on the rate property
  const filteredData = data.filter((product) => product.rate >= 4); // Filter by rate value (e.g., 4)

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
            <Card
              sx={{
                maxWidth: 250,
                margin: "auto",
                boxShadow: "15px 22px 37px 4px rgba(0,0,0,0.1)",
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                alt="latest arrival item"
                height="200"
                image={data["images"][0].url}
              />
              <CardContent>
                <Typography
                  gutterBottom
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
        <Pages setCurrentPage={setCurrentPage} count={4} />
      </Box>
    </>
  );
};
