import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "../../cmps/nav-bar";

function Layout() {
  return (
    <Box width="100%" height="100%">
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
