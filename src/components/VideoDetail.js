import React from "react";

import { Paper, Typography } from "@material-ui/core";

import App from './Download/src/Download';
import * as serviceWorker from './Download/src/ServiceWorker';


export default ({ video }) => {
  if (!video) return <div > <span class='blink' style={{paddingLeft:'600px'}}>Loading...</span>
  <div ><h1>Search For video You Want!</h1></div></div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "20%" , margin:'0%'}}>
        <iframe
          frameBorder="20%"
          height="100%"
          width="100%"
          title="MyTube Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
        <Typography variant="subtitle3">{video.snippet.comments}</Typography>
        <div >
        <App />
        </div>
      </Paper>
    </React.Fragment>
  );
}
serviceWorker.unregister();