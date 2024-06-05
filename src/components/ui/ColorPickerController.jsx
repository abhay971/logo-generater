import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';

function ColorPickerController({ selectedColor, hideController=false }) {
  const [color, setColor] = useState('rgba(255,255,255,1)');

  const handleChange = (e) => {
    setColor(e);
    if (typeof selectedColor === 'function') {
      selectedColor(e);
    } else {
      console.error('selectedColor is not a function');
    }
  };

  return (
    <div>
      <ColorPicker
        value={color}
        onChange={handleChange}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
}

export default ColorPickerController;
