import React, { useEffect, useState } from "react";

import DownloadButton from "./DownloadButton";


function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://youtu.be/", "");
    console.log(id);
    setId(id);
  }, [videoUrl]);

  return (
    <div className="app">
      <div className="app__navbar">
       
        <h2 style={{color:'red'}}>Download Video</h2>
      </div>
      <div className="app__linkBox">
        <form >
          <input  style={{width:'500px'}}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder = "Copy Link From Share and Paste  and click Download Button"
          />
        </form>
      </div>

     
            <div>
             
              <br />
              <DownloadButton id={id} type="videos" />
            </div>
         
      
    </div>
  );
}

export default App;