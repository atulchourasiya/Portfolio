export function generateSphericalPositions(radius) {

   const theta = (2 * Math.PI * Math.random());
   const phi = Math.acos(1 - (2 * Math.random()));


   const x = radius * Math.sin(phi) * Math.cos(theta);
   const y = radius * Math.sin(phi) * Math.sin(theta);
   const z = radius * Math.cos(phi);

   return [x, y, z];
}