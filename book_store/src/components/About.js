import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#2c3e50",
            mb: 2
          }}
        >
          About Our BookStore
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: "#7f8c8d",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.6
          }}
        >
          A modern CRUD application built with the MERN stack, providing a seamless experience
          for managing and exploring books.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}
          >
            <Typography variant="h5" sx={{ color: "#3498db", mb: 2 }}>
              Modern Technology
            </Typography>
            <Typography>
              Built with React, Node.js, Express, and MongoDB, our application
              leverages the latest web technologies for optimal performance.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}
          >
            <Typography variant="h5" sx={{ color: "#3498db", mb: 2 }}>
              User-Friendly
            </Typography>
            <Typography>
              Intuitive interface designed for easy navigation and management
              of your book collection.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}
          >
            <Typography variant="h5" sx={{ color: "#3498db", mb: 2 }}>
              Responsive Design
            </Typography>
            <Typography>
              Fully responsive layout that works seamlessly across all devices,
              from desktop to mobile.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
