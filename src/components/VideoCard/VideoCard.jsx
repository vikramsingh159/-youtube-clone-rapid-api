import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  
} from "../../utils/Constants/Constants";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={id.videoId ? `video/${id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={id.videoId ? `video/${id.videoId}` : demoVideoUrl}>
            <Typography color="#fff" fontWeight="bold" variant="subtitle1">
              {snippet?.title.slice(0, 60) || demoVideoTitle}...
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography color="gray" fontWeight="bold" variant="subtitle2">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                sx={{ fontSize: 12, color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;