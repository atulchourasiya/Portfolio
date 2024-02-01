import { useContext } from "react";
import BackgroundCanvas from "./Canvas/BackgroundCanvas";
import { HeadingState } from "./Context/HeadingState";
import { LoadingState } from "./Context/LoadingState";
import { BackgroundMusicState } from "./Context/BackgroundMusicState";
import Overlay from "./Overlay/Overlay";

function App() {
  return (
    <>
      <HeadingState>
        <LoadingState>
          <BackgroundMusicState>
            <div className='relative'>
              <BackgroundCanvas />
              <Overlay />
            </div>
          </BackgroundMusicState>
        </LoadingState>
      </HeadingState>
    </>
  );
}

export default App;
