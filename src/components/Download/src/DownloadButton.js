import React from "react";


function DownloadButton({ id, type }) {
  return (
    <div className="download">
     
      <iframe
        className="button-api-frame"
        src={`https://api.vevioz.com/@api/button/${type}/${id}`}
        width="80%"
        height="40%"
        
        scrolling="yes"
        
      />
    </div>
  );
}

export default DownloadButton;