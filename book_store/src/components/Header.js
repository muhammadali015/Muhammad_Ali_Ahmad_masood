import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
// NavLink is mainly focus on link when we click on link we can see in url /book or about this can happen by react-router-dom and to.
export default function Header() {
  const [value, setValue] = useState();
  return (
    <div className="navbar">
      {/* sx is a propes used for theme */}
      <AppBar 
        sx={{ 
          backgroundColor: "#2c3e50",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky"
        }} 
      >
        {/* (material ui)this helps to render text inside */}
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Navlink from react-router-dom */}
          <NavLink to={"/"} style={{ color: "white", textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LibraryBooksIcon sx={{ fontSize: 32 }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem"
                }}
              >
                BookStore
              </Typography>
            </Box>
          </NavLink>

          <Tabs
            sx={{ 
              "& .MuiTab-root": {
                color: "white",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#3498db",
                  transform: "translateY(-2px)"
                }
              },
              "& .Mui-selected": {
                color: "#3498db !important"
              }
            }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {/* onChange event take event(e) and value(val) it contains the Number of Tab and event take current.target*/}

            {/*LinkComponent is propes it used when href propes provided.  */}
            <Tab 
              LinkComponent={NavLink} 
              to="/add" 
              label="Add Product" 
            />
            <Tab 
              LinkComponent={NavLink} 
              to="/books" 
              label="Books" 
            />
            <Tab 
              LinkComponent={NavLink} 
              to="/about" 
              label="About Us" 
            />
          </Tabs>
          {/* Tabs is the container which render the single-single Tab and (in the Tab we can add naviagtion like Home,About us).*/}
        </Toolbar>
        {/* Toolbar helps to create the structure of the application. basically it gives the looks of Navigation Bar.*/}
      </AppBar>
    </div>
  );
}
