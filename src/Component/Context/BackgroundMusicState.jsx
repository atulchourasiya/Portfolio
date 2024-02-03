import { createContext, useEffect, useState } from "react";
const backgroundMusic = new Audio("/catbgaudio.mp3");
const soundEffect = new Audio("/soundeffect.mp3");

export const BackgroundMusicContext = createContext();

export const BackgroundMusicState = ({ children }) => {
  const [isMute, setIsMute] = useState(true);
  backgroundMusic.volume = 0.1;
  backgroundMusic.loop = true;
  soundEffect.volume = 1;
  const playSoundEffect = () => {
    if (!isMute) soundEffect.play();
  };
  useEffect(()=>{
    if(isMute){
        backgroundMusic.pause();
        soundEffect.pause();
    }else{
        backgroundMusic.play();
    }
  },[isMute])
  return (
    <BackgroundMusicContext.Provider
      value={{ playSoundEffect, isMute , setIsMute }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
};
