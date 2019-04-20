import React from "react"
import PhotoContainer from "../components/PhotoContainer";

export default function PhotoList() {
  const effectNames = [
    'Original',
    'Lark',
    'Reyes',
    'Juno',
    'Slumber',
    'Crema',
    'Ludwig',
    'Aden',
    'Perpetua',
    'Amaro',
    'Mayfair',
    'Rise',
    'Hudson',
    'Valencia',
    'XProII',
    'Sierra',
    'Willow',
    'Lo-Fi',
    'Earlybird',
    'Brannan',
    'Inkwell',
    'Hefe',
    'Nashville',
    'Sutro',
    'Toaster',
    'Walden',
    '1977',
    'Kelvin',
    'Grayscale',
    'Sepia',
    'Luminance',
    'Brighten',
    'Darken',
    'Opacity',
    'Threshold',
    'Nega-Posi',
    'BrightnessContrast',
    'Hue-Rotate',
    'Saturate',
    'horizontalFlip',
    'verticalFlip',
    'doubleFlip',
    'horizontalMirror',
    'verticalMirror',
    'XYMirror'
  ];

  return (
    <React.Fragment>
      {effectNames.map(effectName =>
        <PhotoContainer
          key={`key-${effectName}`}
          effectName={effectName}/>
      )}
    </React.Fragment>
  )
}
