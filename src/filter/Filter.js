import { convert } from './Converter'

export default class Filter {
  constructor() {
    this.canvas = {}
  }

  process(img) {
    let pixels;
    let worker;
    let obj;
    let effect = img.dataset.effect;

    pixels = this.getPixels(img);
    const convertedData = convert({
      pixels: pixels,
      effects: effect
    })
    this.renderCanvas(img, convertedData.data.pixels);
  }

  getPixels = function(img) {
    let canvas
    let context
    canvas = this.getCanvas(img.width, img.height);
    context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  };

  getCanvas = function(width, height) {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  renderCanvas = function(img, new_pixels){
    let canvas, context;
    canvas  = this.getCanvas(img.width, img.height);
    context = canvas.getContext("2d");
    context.putImageData(new_pixels, 0, 0);
    img.src = canvas.toDataURL();
  };
}
