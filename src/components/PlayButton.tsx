import { useRef, useState } from 'react';
import music from '../resources/i-do.mp3';
import sound from '../resources/volume.png';
import mute from '../resources/mute.png';

export const PlayButton = () => {
  const [isMute, setIsMute] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onPlay = () => {
    setIsMute(!isMute)
    if (audioRef.current) {
        if(isMute) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
        
      
    }
  };
  return (
    <>
      <audio style={{ visibility: 'hidden', position: 'fixed' }} ref={audioRef} controls autoPlay>
        <source src={music} />
      </audio>
      <div
        style={{
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          position: 'fixed',
          top: '50%',
          right: '1rem',
          width: '50px',
          height: '50px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={onPlay}
      >
        <img src={isMute ? mute : sound} alt="" style={{ width: '25px' }} />
      </div>
    </>
  );
};
