export const useRectangularPositions = (width , height) => {   
   const x = (((0.1 + Math.random() * 0.9) * width) - width / 2) - 6;
   const y = (height / 2) - (6 + Math.random() * 2);
   const z = -(20 + Math.random() * 30);
   return [x, y, z];
};
