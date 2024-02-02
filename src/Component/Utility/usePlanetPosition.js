export const usePlanetPosition = (width, height,distanceFactor) => {
   const x = (((distanceFactor/ 3) * width) - width / 2) - 2;
   const y = (height / 2) - ( 1 + Math.random() * (height/2/1.5)) - 6;
   const z = -(37 + Math.random() * 37);
   return [x, y, z];
};
