const checkMediaWidth = (width) => {
   const mediaQuery = window.matchMedia(`(${width})`);
   if (mediaQuery.matches)
      return true;
   return false;
}
export default checkMediaWidth;