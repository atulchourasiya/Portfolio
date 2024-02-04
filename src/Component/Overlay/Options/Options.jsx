import React, { useContext, useEffect, useState } from "react";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundMusicContext } from "../../Context/BackgroundMusicState";
import Tooltip from '@mui/material/Tooltip';

const Options = () => {
  const { isMute, setIsMute } = useContext(BackgroundMusicContext);
  const [isFullScreen, setFullScreen] = useState(false);

  function isDocumentInFullScreenMode() {
    return document.fullscreenElement !== null;
  }

  const handleFullScreen = () => {
    if (!isDocumentInFullScreenMode()) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  const fullScreenChange = () => {
    setFullScreen(isDocumentInFullScreenMode());
  };
  useEffect(() => {
    document.addEventListener('fullscreenchange', fullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', fullScreenChange);
    };
  }, []);
  return (
    <div className='absolute top-0 right-0 flex p-4'>
      <Tooltip title={isMute ? "Unmute" : "Mute"} >
        <div
          className='flex relative  w-max h-5 rotate-180 mx-4 cursor-pointer '
          onClick={() => setIsMute(!isMute)}>
          <span
            className={` w-1 h-1 ms-[1px] bg-white ${isMute ? "" : "bar-animation"
              }`}
            style={{ animationDelay: ".2s" }}></span>
          <span
            className={` w-1 h-3 ms-[1px] bg-white ${isMute ? "" : "bar-animation"
              }`}
            style={{ animationDelay: ".7s" }}></span>
          <span
            className={` w-1 h-2 ms-[1px] bg-white ${isMute ? "" : "bar-animation"
              }`}
            style={{ animationDelay: ".5s" }}></span>
          <span
            className={` w-1 h-4 ms-[1px] bg-white ${isMute ? "" : "bar-animation"
              }`}
            style={{ animationDelay: ".9s" }}></span>
          {isMute ? <span className="h-6 top-[40%] w-[.15rem] absolute translate-y-[-50%]  left-1/2 translate-x-[-50%] rotate-45 bg-red-600"></span> : null}
        </div>
        <p className='text-[.5rem]  justify-center flex text-white  font-lato'>Music</p>
      </Tooltip>
      <Tooltip title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"} >
        <div className=" flex  justify-content-center items-center flex-col cursor-pointer" onClick={handleFullScreen}>
          <FontAwesomeIcon
            icon={isFullScreen ? faCompress : faExpand}
            className='text-white nav-icon'></FontAwesomeIcon>
          <p className='text-[.5rem] text-white  font-lato'>{isFullScreen ? "Exit Fullscreen" : "Fullscreen"}</p>
        </div>
      </Tooltip>
    </div>
  );
};

export default Options;
