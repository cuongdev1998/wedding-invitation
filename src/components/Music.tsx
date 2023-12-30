import React, { useEffect, useRef } from 'react';
import music from '../resources/i-do.mp3';
export const Music = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);


  return (
    <>
        <iframe src="youraudiofile.mp3"  allow="autoplay" id="audio" style={{display:'none'}}></iframe>

      <audio ref={audioRef} id="" controls autoPlay>
        <source src={music} />
        {/* <iframe src={music} allow='autoplay'/> */}
      </audio>
    </>
  );
};
