import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Description = ({ ...props }) => {
  return (
    <Box p={5}>
      <Typography
        fontWeight={700}
        fontSize={22}
        textAlign={"center"}
        borderBottom={2}
        borderColor={"#3b71ca"}
      >
        Description
      </Typography>
      <p>{props.description}</p>
      <p>Material: {props.material}</p>
      <p>Item Type: {props.itemType}</p>
      {props.images.map((item, index) => (
        <Box key={index}>
          <img src={item.url} width="100%" alt={`Image ${index}`} />
        </Box>
      ))}
    </Box>
  );
};

export default Description;
