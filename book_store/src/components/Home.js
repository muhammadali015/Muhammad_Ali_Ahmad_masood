import { Box, Button, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="main_div"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=600)",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            color: "white",
            textAlign: "center"
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontFamily: "monospace",
              fontWeight: 700,
              marginBottom: 3,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}
          >
            Welcome to BookStore
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 4,
              maxWidth: "600px",
              lineHeight: 1.6,
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
            }}
          >
            Discover a world of knowledge with our extensive collection of books.
            From bestsellers to rare finds, we have something for every reader.
          </Typography>

          <Button
            sx={{
              padding: "12px 30px",
              fontSize: "1.1rem",
              background: "#3498db",
              borderRadius: "50px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#2980b9",
                transform: "translateY(-3px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
              }
            }}
            variant="contained"
            LinkComponent={Link}
            to="/books"
          >
            Explore Our Collection
          </Button>
        </Box>
      </Container>
    </div>
  );
}
