import React from "react";

const VideoPlayer = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <video width="80%" controls poster="/assets/Nitin Gadkari/thumbnail.png">
          <source src="/assets/Nitin Gadkari/विकासाचे महामेरू केंद्रीय मंत्री मा. श्री. नितीनजी गडकरी यांनी अग्रेसर फाउंडेशनच्या 'बे एके बे' या कार्यक्रमाला शुभेच्छा दिल्या. अग्रेसर फाउंडेशनच्या स्वयंसेवकांच्या कामाची दखल घेत त्यांचे कौतुक केले आणि आगामी प्रकल.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;