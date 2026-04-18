import React from "react";
import styles from "./eight.module.scss";

const VideoPlayer = () => {
  return (
    // FIX: outer div centers the video and constrains its max width
    <div className={styles["video-section"]}>
      <video
        className={styles["video"]}
        controls
        poster="/assets/Nitin Gadkari/thumbnail.png"
      >
        {/*
          PASTE YOUR VIDEO FILE PATH HERE inside the src attribute below.
          Your file is currently at:
            /public/assets/Nitin Gadkari/<long-filename>.mp4
          
          In Next.js, anything inside /public is served from the root URL.
          So your src should be:
            /assets/Nitin Gadkari/<filename>.mp4
          
          IMPORTANT: Rename the video file to something simple with no spaces
          or special characters, e.g. "gadkari-speech.mp4", then update the src.
          Special characters and spaces in filenames cause 404 errors in browsers.
          
          Example after renaming:
            src="/assets/Nitin Gadkari/gadkari-speech.mp4"
        */}
        <source
          src="/assets/Nitin Gadkari/12 Nitinji Gadkari 2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;