import { convert } from './Converter'

export default class Filter {
  constructor() {
    this.canvas = {}
  }

  process(imgNode) {
    const effect = imgNode.dataset.effect;
    const pixels = this.getImageData(imgNode);
    const convertedImageData = convert({
      pixels: pixels,
      effects: effect
    })
    this.renderCanvas(imgNode, convertedImageData);
  }

  getImageData = function(imgNode) {
    const canvas = this.getCanvas(imgNode.width, imgNode.height);
    const context = canvas.getContext('2d');
    context.drawImage(imgNode, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  };

  getCanvas = function(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  renderCanvas = function(imgNode, imageData){
    const canvas  = this.getCanvas(imgNode.width, imgNode.height);
    const context = canvas.getContext("2d");
    context.putImageData(imageData, 0, 0);
    imgNode.src = canvas.toDataURL();
  };
}
