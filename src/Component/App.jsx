import BackgroundCanvas from './Canvas/BackgroundCanvas';
import { HeadingState } from './Context/HeadingState.jsx';
import Overlay from './Overlay/Overlay';

function App() {
  return <>
    <HeadingState >
      <div className='relative'>
        <BackgroundCanvas />
        <Overlay />
      </div>
    </HeadingState>
  </>;
}

export default App;
