import { useContext } from "react";
import BackgroundCanvas from "./Canvas/BackgroundCanvas";
import { HeadingState } from "./Context/HeadingState";
import { LoadingState } from "./Context/LoadingState";
import { BackgroundMusicState } from "./Context/BackgroundMusicState";
import { ModelState } from "./Context/ModelState";
import Overlay from "./Overlay/Overlay";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <HeadingState>
        <LoadingState>
          <BackgroundMusicState>
            <ModelState>
              <div className='relative'>
                <BackgroundCanvas />
                <Overlay />
              </div>
            </ModelState>
          </BackgroundMusicState>
        </LoadingState>
      </HeadingState>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
