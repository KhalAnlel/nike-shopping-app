import { Box, CardActionArea, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import categories from '../../data/categories.json'

export const ByCategories = () => {
  const navigate = useNavigate();
  const handleClick = (title) => {
    navigate(`collection/${title}`);
  };
  const someCategories = categories.slice(0,7);
  return (
    <>
      <Box marginTop={10}>
        <Typography textAlign="center" variant="h5" fontWeight={700}>
          SEARCH BY CATEGORY
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LaunchIcon fontSize="small" sx={{ marginTop: "3px" }} />
          <Link to="/collection/all">View All</Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={1}
        m={"auto"}
        marginTop={4}
        sx={{
          width: {
            lg: "90%",
          },
        }}
      >
        {someCategories.map((item) => (
          <Box key={item.id} maxWidth={"20%"} boxShadow={2}>
            <CardActionArea onClick={() => handleClick(item.title)}>
              <CardMedia
                component="img"
                alt={item.title}
                image={item.imgUrl}
                height={"200px"}
              />
              <Typography
                textAlign={"center"}
                bgcolor={"#333"}
                color={"#fff"}
                sx={{
                  fontSize: { xs: "8pt", md: "12pt" },
                  ":hover": { color: "#3b71ca" },
                }}
                p={2}
                fontWeight={600}
              >
                {item.title}
              </Typography>
            </CardActionArea>
          </Box>
        ))}
      </Box>
    </>
  );
};
