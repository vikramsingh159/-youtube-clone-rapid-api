import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../Index/Index";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/FetchFromApi/FetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        ml={2}
        sx={{ color: " white" }}
      >
        Search Results for:
        <span style={{ color: "#F31503", marginLeft: "8px" }}>
          {" "}
          {searchTerm}{" "}
        </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;