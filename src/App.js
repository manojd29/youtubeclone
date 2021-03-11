import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import  SearchBar from './components/SearchBar';
import  VideoDetail  from './components/VideoDetail';
import  VideoList  from './components/VideoList';
import Youtube from './api/Youtube';
import './index.css';
//import Appp from './components/Download/appp';


export default () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    

      return(
          
        <div class="container">
	
	<div class="text-box">
		<h3>MyTube</h3>
		<h3>MyTube</h3>
	</div>
		
    

        <Grid style={{ justifyContent: "center" }} container spacing={10}>
               <Grid item xs={11}>
                   <Grid container spacing={10}>
                       <Grid item xs={12}>
                           <SearchBar onSubmit={handleSubmit} />
                           </Grid>
                           <Grid item xs={8}>
                           <VideoDetail  video = {selectedVideo}/>
                           </Grid>
                           <Grid item xs={4}>
                           <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                           </Grid>
                           <Grid>
                             
                           </Grid>
                            </Grid>
                   </Grid>
               </Grid>
              
        </div>
      
        );
        async  function handleSubmit(searchTerm)  {
            const { data: { items: videos } } = await Youtube.get ('search', {
                params:{
                    part: 'snippet',
                    maxResults:6,
                    key:'AIzaSyC0gOzkskaKhgCbv3YYFNG1xgvJnDwdPJs',
                    q:searchTerm,
            
                }
             });
             setVideos(videos);
            setSelectedVideo(videos[0]);
        }
    };

