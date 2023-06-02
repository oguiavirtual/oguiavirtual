import { AppBar, Toolbar, Typography } from '@mui/material';
import React from "react";

const AppNavBar = () => {
    
    return (
        <AppBar position="static" style={{ backgroundColor: "rgba(255, 255, 255)"}}>
            <Toolbar variant="dense" style={{height: "80px"}}>
                <Typography style={{color: "rgba(0, 0, 0)"}}>O Guia Virtual</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavBar