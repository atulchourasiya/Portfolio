import { Suspense, useEffect, useMemo, useState } from 'react';
import { Preload, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Environment from './Environment';
import CameraRig from './CameraRig';
import ComputerModel from './ComputerModel';
import checkMediaWidth from '../../../utility/CheckMediaWidth';


const BackgroundCanvas = () => {
	const starProps = useMemo(() => ({
		radius: 50,
		depth: 30,
		saturation: 1,
		count: 10000,
		factor: 10,
		fade: true,
		speed: 2
	}), []);

	// const [height, setHeight] = useState();
	// const calculateHeight = () => {
	// 	const windowHeight = window.innerHeight;
	// 	let height = 0;
	// 	if (checkMediaWidth('max-width:319.98px')) {
	// 		height = 208;
	// 	}
	// 	else if (checkMediaWidth('max-width:374.98px')) {
	// 		height = 288;
	// 	}
	// 	else if (checkMediaWidth('max-width:575.98px')) {
	// 		height = 352;
	// 	}
	// 	else if (checkMediaWidth('max-width:767.98px')) {
	// 		height = 432;
	// 	}
	// 	else if (checkMediaWidth('max-width:991.98px')) {
	// 		height = 560;
	// 	}
	// 	else if (checkMediaWidth('max-width:1199.98px')) {
	// 		height = 640;
	// 	}
	// 	else if (checkMediaWidth('max-width:1399.98px')) {
	// 		height = 720;;
	// 	}
	// 	else {
	// 		height = 800;
	// 	}
	// 	const canvasHeight = Math.min(height, windowHeight);
	// 	return `${canvasHeight}px`
	// }

	// useEffect(() => {
	// 	setHeight(calculateHeight);
	// 	window.addEventListener('resize', () => {
	// 		let currentHeight = calculateHeight();
	// 		if (currentHeight !== height) {
	// 			setHeight(currentHeight);
	// 		}
	// 	})
	// }, [])
	return (
		<>
			<Canvas
				dpr={[1, 2]}
				style={{ position: 'absolute', top: '0', left: '0' }}
				shadows
				gl={{ preserveDrawingBuffer: true }}
			>
				<Suspense fallback={''}>
					<PerspectiveCamera
						makeDefault
						fov={30}
						aspect={window.innerWidth / window.innerHeight}
						near={.5}
						far={1000}
						position={[0, 0, 120]}
					/>
					<CameraRig>
						<Environment starProps={starProps} />
						<ComputerModel />
					</CameraRig>
				</Suspense>
				<Preload all />
			</Canvas>
		</>

	);
};
export default BackgroundCanvas;
