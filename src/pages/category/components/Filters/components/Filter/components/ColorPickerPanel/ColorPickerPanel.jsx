import React, { useState } from 'react';
import './ColorPickerPanel.scss';

const ColorPickerPanel = ({options}) => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="color-picker-panel">
      {options.map((color, index) => (
        <div
          key={index}
          className={`color-option ${color === selectedColor ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPickerPanel;
