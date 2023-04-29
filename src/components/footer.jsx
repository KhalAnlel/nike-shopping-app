import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { SocialMedia } from "./common/socialMedia";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <Box p="20px" bgcolor="#f2f2f2" marginTop={10}>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Box className="footerColumn">
              <h3>SHOP</h3>
              <Link to="#">Shop By Categories</Link>
              <Link to="#">Shop By Anime</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box className="footerColumn">
              <h3>CUSTOMER SERVICE</h3>
              <Link to="#">Terms Of Service</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Refund Policy</Link>
              <Link to="#">Shipping Policy</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box className="footerColumn">
              <h3>CONTACT</h3>
              <Box className="contactDiv">
                <LocationOnIcon />
                <Typography variant="overline">Duhok, KU 42001 IRAQ</Typography>
              </Box>
              <Box className="contactDiv">
                <CallIcon />
                <Typography variant="overline">
                  Call us: +1 3024040584
                </Typography>
              </Box>
              <Box className="contactDiv">
                <EmailIcon />
                <Typography variant="overline">info@animeshop.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <SocialMedia />
      </Box>
    </>
  );
};
