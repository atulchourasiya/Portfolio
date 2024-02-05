import { createContext, useEffect, useState , useRef } from "react";
const backgroundMusic = new Audio("/catbgaudio.mp3");
const soundEffect = new Audio("/soundeffect.mp3");

export const BackgroundMusicContext = createContext();

export const BackgroundMusicState = ({ children }) => {
  const [isMute, setIsMute] = useState(true);
  const currentIsMute = useRef();
  const previousIsMute = useRef();
  backgroundMusic.volume = 0.1;
  backgroundMusic.loop = true;
  soundEffect.volume = 1;
  const playSoundEffect = () => {
    if (!isMute) soundEffect.play();
  };
  useEffect(() => {
    if (isMute) {
      backgroundMusic.pause();
      soundEffect.pause();
    } else {
      backgroundMusic.play();
    }
    currentIsMute.current = isMute;
  }, [isMute]);

  const handleVisibilityChange = () => {
    if (document.hidden) {
      previousIsMute.current = currentIsMute.current;
      setIsMute(true);
    } else {
      setIsMute(previousIsMute.current);
    }
  };
  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return (
    <BackgroundMusicContext.Provider
      value={{ playSoundEffect, isMute, setIsMute }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
};
