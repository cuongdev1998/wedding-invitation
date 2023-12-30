import { useState } from 'react'
import sound from  '../resources/sound-max.svg'
import mute from '../resources/sound-min.svg';
export const PlayButton = () => {
    const [isMute] = useState<boolean>(false)
  return (
    <div style={{ position: 'fixed', bottom: '3rem', right: '3rem', width: '20px', height: '20px'}}>
       <img src={ isMute ? sound : mute} />
    </div>
  )
}
