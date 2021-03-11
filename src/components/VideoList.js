import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./videoItem";






export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10} style={{border:'20%' , display:'block'}}>
      {listOfVideos}
      <div>
      
      </div>
    </Grid>
  );
}
