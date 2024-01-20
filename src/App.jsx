import BackgroundCanvas from './Component/Canvas/BackgroundCanvas';
import { HeadingState } from './Component/Context/HeadingState.jsx';
import Screen from './Component/Screen/Screen';

function App() {
  return <>
    <HeadingState >
      <div className='relative'>
        <BackgroundCanvas />
        <Screen />
      </div>
    </HeadingState>
  </>;
}

export default App;
