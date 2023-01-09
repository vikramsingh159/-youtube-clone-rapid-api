import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Typography,CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../../utils/Constants/Constants";
import { Videos } from "../Index/Index";
import { fetchFromApi } from "../../utils/FetchFromApi/FetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  // console.log(channelDetail);
  // console.log(videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,107,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <Box
          sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "320px" },
            height: "326px",
            margin: "auto",
            marginTop: "-110px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircleIcon
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>

            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Box>
      </Box>
      <Box display="flex" p={4} sx={{ margin: "auto" }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;