import { Box } from "@mui/material"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
    ChannelDetail,
    Feed,
    Navbar,
    VideoDetail,
    SearchFeed,
  } from "../components/Index/Index";



const RoutingConfig = () => {
    return (
        <Box sx={{ backgroundColor: "#000" }}>
  
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" exact element={<VideoDetail />} />
                    <Route path="/channel/:id" exact element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default RoutingConfig