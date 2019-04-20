import { convert } from './Converter'

export default class Filter {
  constructor() {
    this.canvas = {}
  }

  process(img) {
    const effect = img.dataset.effect;
    const pixels = this.getPixelImageData(img);
    const convertedPixels = convert({
      pixels: pixels,
      effects: effect
    })
    console.log(pixels)
    console.log(convertedPixels)
    this.renderCanvas(img, convertedPixels);
  }

  getPixelImageData = function(img) {
    const canvas = this.getCanvas(img.width, img.height);
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  };

  getCanvas = function(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  renderCanvas = function(img, new_pixels){
    const canvas  = this.getCanvas(img.width, img.height);
    const context = canvas.getContext("2d");
    context.putImageData(new_pixels, 0, 0);
    img.src = canvas.toDataURL();
  };
}
