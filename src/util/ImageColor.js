import ColorThief from 'colorthief';

export const getImageColor = image => {
  return new Promise(resolve => {
    const colorThief = new ColorThief();

    const imgData = new Image();
    imgData.crossOrigin = 'Anonymous';
    imgData.src = image;
  
    if (image) {
      imgData.onload = () => resolve(
        (function() {
          const color = colorThief.getColor(imgData);
          return color;
        })(image)
      );
    }
  });
}