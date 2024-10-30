import React from 'react';
import { Box } from "@mui/material";
import { ReactNode } from "react";
import SideBar from "../components/sidebar";

interface LayoutProps {
    children: ReactNode;
}


//layout accepts the children and type is layoutprops
const Layout = ({ children }: LayoutProps) =>  {
  return (
    //creating UI
      <Box sx={{
        backgroundColor:"#10141F",
        display: "flex",
        flexDirection: {
            xs: "column",//for xs device
            lg: "row"//gor lg device
        },
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",// height to our complete page

      }}>
        <SideBar /> 
        <Box sx={{width: "100%", overflowY: "scroll"}}>{ children }</Box> 
      </Box>
                            // inside going to accept children
  );
};

export default Layout;
