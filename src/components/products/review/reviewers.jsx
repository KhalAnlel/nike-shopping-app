import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import reviewers from "../../../data/reviewers.json";

const Reviewers = () => {
  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Okay",
    4: "Good",
    5: "Excellent",
  };

  return (
    <Stack gap={3}>
      {reviewers.map((item) => (
        <Box
          bgcolor="#fafafa"
          p={2}
          width="100%"
          borderRadius={5}
          boxShadow={3}
          key={item.id}
        >
          <Stack direction="row" marginBottom={3}>
            <Rating
              sx={{ color: "#333" }}
              name="text-feedback"
              value={item.rate}
              readOnly
              precision={1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[item.rate]}</Box>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <img
              src={item.picture}
              width="50px"
              style={{ borderRadius: "50%" }}
            />
            <Box>
              <Typography fontWeight={600}>{item.name}</Typography>
              <Typography fontWeight={500} color="#333" fontSize={12}>
                {item.date}
              </Typography>
            </Box>
          </Stack>
          <Typography marginTop={2}>{item.content}</Typography>
          <Stack direction="row" width="100%" gap={2} marginTop={2}>
            {item.images.map((image, index) => (
              <ul style={{ listStyleType: "none", padding: 0 }} key={index}>
                <li key={index}>
                  <img
                    src={image.url}
                    width="60px"
                    height="80px"
                    style={{ borderRadius: "10px" }}
                    alt={`image ${index + 1}`}
                  />
                </li>
              </ul>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default Reviewers;
