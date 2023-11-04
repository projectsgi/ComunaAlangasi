import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="primary.main"
      color="white"
      py={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box mb={2}>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <IconButton>
            <FacebookIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <IconButton>
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <IconButton>
            <TwitterIcon sx={{ color: "white" }} />
          </IconButton>
        </Link>
      </Box>
      <Typography variant="body2" color="inherit">
        Comuna del centro del pueblo de Alangasí 2023. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
