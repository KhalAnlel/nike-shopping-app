import React from "react";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: " #ffffff",
  gap: "10px",
  fontSize: "1.2rem",
}));
export const WhyUs = () => {
  return (
    <Box bgcolor="grey" p="10px" display="flex" justifyContent="space-around">
      <StyledBox>
        <LocalShippingTwoToneIcon
          sx={{ fontSize: { xs: "12pt", sm: "20pt", md: "30pt" } }}
        />
        <Typography sx={{ fontSize: { xs: "6pt", sm: "10pt", md: "14pt" } }}>
          Fast and Free Shipping
        </Typography>
      </StyledBox>
      <StyledBox>
        <LocalOfferTwoToneIcon
          sx={{ fontSize: { xs: "12pt", sm: "20pt", md: "30pt" } }}
        />
        <Typography sx={{ fontSize: { xs: "6pt", sm: "10pt", md: "14pt" } }}>
          Lowest Price
        </Typography>
      </StyledBox>
      <StyledBox>
        <EmojiEventsTwoToneIcon
          sx={{ fontSize: { xs: "12pt", sm: "20pt", md: "30pt" } }}
        />
        <Typography sx={{ fontSize: { xs: "6pt", sm: "10pt", md: "14pt" } }}>
          Longest Warranty Offer
        </Typography>
      </StyledBox>
    </Box>
  );
};
