import React, { useContext, useEffect, useState } from 'react';
import { Slider } from "@/components/ui/slider";
import ColorPickerController from './ui/ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconList from './IconList';

function IconController() {
  const storageValue = JSON.parse(localStorage.getItem('value'));
  const [size, setSize] = useState(storageValue?.iconSize ?? 280);
  const [rotate, setRotate] = useState(storageValue?.iconRotate ?? 0);
  const [color, setColor] = useState(storageValue?.iconColor ?? '#fff');
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const [icon, setIcon] = useState(storageValue?.icon ?? 'Smile');

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [size, rotate, color, icon]);

  return (
    <div>
      <div>
        <IconList selectedIcon={(icon) => setIcon(icon)} />
        <div className='py-2'>
          <label className='p-2 flex justify-between items-center font-bold'>Size <span>{size} px</span></label>
          <Slider className='bg-gray-200 rounded-xl' value={[size]} max={512} step={1}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
        <div className='py-2'>
          <label className='p-2 flex justify-between items-center font-bold'>Rotate <span>{rotate} °</span></label>
          <Slider className='bg-gray-200 rounded-xl' value={[rotate]} max={360} step={1}
            onValueChange={(value) => setRotate(value[0])}
          />
        </div>
        <div className='py-2'>
          <label className='p-2 flex justify-between items-center font-bold'>Icon Color</label>
          <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)} />
        </div>
      </div>
    </div>
  );
}

export default IconController;

