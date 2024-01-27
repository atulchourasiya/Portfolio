import { useContext } from 'react';
import BackgroundCanvas from './Canvas/BackgroundCanvas';
import {  HeadingState } from './Context/HeadingState.jsx';
import {  LoadingState } from './Context/LoadingState';
import Overlay from './Overlay/Overlay';

function App() {
  return <>
    <HeadingState >
      <LoadingState>
        <div className='relative'>
          <BackgroundCanvas />
          <Overlay />
        </div>
      </LoadingState>
    </HeadingState>
  </>;
}

export default App;
