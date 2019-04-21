import React from "react"
import PhotoContainer from "../components/PhotoContainer";

export default function PhotoList() {
  const effectNames = [
    'Original',
    /**
     * Basic Effects
     */
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
    'XYMirror',
    /**
     * Instagram-like Effects
     */
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
