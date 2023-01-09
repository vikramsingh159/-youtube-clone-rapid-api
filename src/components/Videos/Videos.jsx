import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../Index/Index";
const Videos = ({ videos, direction }) => {
  // if (videos.length === 0) return "Loading videos...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channel={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;