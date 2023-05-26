"use client"
import React from 'react'
import NavBar from './NavBar'
import { Paper } from "@mui/material";
// import { Paper } from '@mui/icons-material'

const Main: React.FC = () => {
    return (
        <Paper sx={{ height: "100vh", overflow: "auto" }}>
            <NavBar />
        </Paper>
    )
}

export default Main;