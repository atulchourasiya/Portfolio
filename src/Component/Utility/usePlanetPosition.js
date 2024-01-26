export const usePlanetPosition = (width, height, xPos, yPos, zPos) => {
   const x = ((xPos * width) - width / 2) - 6;
   const y = (height / 2) - yPos;
   const z = -zPos;
   return [x, y, z];
};
