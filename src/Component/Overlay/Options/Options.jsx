import React, { useContext } from "react";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundMusicContext } from "../../Context/BackgroundMusicState";

const Options = () => {
  const { isMute, setIsMute } = useContext(BackgroundMusicContext);
  const goFullScreen = () => {
     const element = document.documentElement;
     if (element.requestFullscreen) {
        element.requestFullscreen();
     } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
     } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
     } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
     }
  };
  return (
    <div className='absolute top-0 right-0 flex p-4'>
      <div
        className='flex relative w-max rotate-180 mx-4 cursor-pointer'
        onClick={() => setIsMute(!isMute)}>
        <span
          className={` w-1 h-1 ms-[1px] bg-white ${
            isMute ? "" : "bar-animation"
          }`}
          style={{ animationDelay: ".2s" }}></span>
        <span
          className={` w-1 h-3 ms-[1px] bg-white ${
            isMute ? "" : "bar-animation"
          }`}
          style={{ animationDelay: ".7s" }}></span>
        <span
          className={` w-1 h-2 ms-[1px] bg-white ${
            isMute ? "" : "bar-animation"
          }`}
          style={{ animationDelay: ".5s" }}></span>
        <span
          className={` w-1 h-4 ms-[1px] bg-white ${
            isMute ? "" : "bar-animation"
          }`}
          style={{ animationDelay: ".9s" }}></span>
      </div>
      <FontAwesomeIcon
        icon={document.fullscreenElement !== null ? faCompress : faExpand}
        className='text-white nav-icon'></FontAwesomeIcon>
    </div>
  );
};

export default Options;
