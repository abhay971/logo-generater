// // import { Slider } from "@/components/ui/slider"
// // import React, { useEffect, useState } from 'react'
// // import ColorPickerController from "./ui/ColorPickerController"

// // function BackgroundController() {
// //   const [rounded,setRounded] = useState(0)
// //   const [padding,setPadding] = useState(0)
// //   const [color,setColor] = useState('#000')
// //   const storageValue = JSON.parse(localStorage.getItem('value'))
// //   useEffect(()=>{
// //     const updateValue={
// //       ...storageValue,
// //       bgRounded:rounded,
// //       bgPadding:padding,
// //       bgColor:color
// //     }
// //     localStorage.setItem('value',JSON.stringify(updateValue))
// //   })

// //   return (
// //     <div>
// //       <div className='py-2'>
// //             <label className='p-2 flex justify-between items-center font-bold '>Rounded <span>{rounded} px</span></label>
// //             <Slider className='bg-gray-200 rounded-xl' defaultValue={[0]} max={512} step={1}
// //             onValueChange={(event)=>setRounded(event[0])}
// //             />
// //       </div>
// //       <div className='py-2'>
// //             <label className='p-2 flex justify-between items-center font-bold'>Padding <span>{padding} px</span></label>
// //             <Slider className='bg-gray-200 rounded-xl' defaultValue={[0]} max={100} step={1}
// //             onValueChange={(event)=>setPadding(event[0])}
// //             />
// //       </div>
// //       <div className='py-2'>
// //             <label className='p-2 flex justify-between items-center font-bold'>Icon Color</label>
// //             <ColorPickerController hideController={false}
// //             selectedColor={(color)=>setColor(color)}/>

// //       </div>
// //     </div>
// //   )
// // }

// // export default BackgroundController

// import { Slider } from "@/components/ui/slider"
// import React, { useContext, useEffect, useState } from 'react'
// import ColorPickerController from "./ui/ColorPickerController"
// import { UpdateStorageContext } from "@/context/UpdateStorageContext"

// function BackgroundController() {
//   const [rounded, setRounded] = useState(0)
//   const [padding, setPadding] = useState(0)
//   const [color, setColor] = useState('#000')
//   const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext)
  
//   useEffect(() => {
//     const storageValue = JSON.parse(localStorage.getItem('value'))
//     if (storageValue) {
//       setRounded(storageValue.bgRounded || 0)
//       setPadding(storageValue.bgPadding || 0)
//       setColor(storageValue.bgColor || '#000')
//     }
//   }, [])

//   useEffect(() => {
//     const updateValue = {
//       bgRounded: rounded,
//       bgPadding: padding,
//       bgColor: color
//     }
//     setUpdateStorage(updateValue);
//     localStorage.setItem('value', JSON.stringify(updateValue))
//   }, [rounded, padding, color])

//   return (
//     <div className="p-4">
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center font-bold'>
//           Rounded <span>{rounded} px</span>
//         </label>
//         <Slider className='bg-gray-200 rounded-xl' defaultValue={[0]} max={512} step={1}
//           onValueChange={(value) => setRounded(value[0])}
//         />
//       </div>
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center font-bold'>
//           Padding <span>{padding} px</span>
//         </label>
//         <Slider className='bg-gray-200 rounded-xl' defaultValue={[0]} max={100} step={1}
//           onValueChange={(value) => setPadding(value[0])}
//         />
//       </div>
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center font-bold'>
//           Icon Color
//         </label>
//         <ColorPickerController hideController={false}
//           selectedColor={(color) => setColor(color)}
//         />
//       </div>
//     </div>
//   )
// }

// export default BackgroundController


// import { Slider } from "@/components/ui/slider"
// import React, { useContext, useEffect, useState } from 'react'
// import ColorPickerController from "./ui/ColorPickerController"
// import { UpdateStorageContext } from "@/context/UpdateStorageContext"

// function BackgroundController() {
//   const storageValue = JSON.parse(localStorage.getItem('value'))
//   const [rounded, setRounded] = useState(storageValue?storageValue?.bgRounded:0)
//   const [padding, setPadding] = useState(storageValue?storageValue?.bgPadding:0)
//   const [color, setColor] = useState(storageValue?storageValue?.bgColor:'#000')
//   const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)
  
//   useEffect(() => {
//     if (storageValue) {
//       setRounded(storageValue.bgRounded || 0)
//       setPadding(storageValue.bgPadding || 0)
//       setColor(storageValue.bgColor || '#000')
//     }
//   }, [])

//   useEffect(() => {
//     const updateValue = {
//       bgRounded: rounded,
//       bgPadding: padding,
//       bgColor: color
//     }
//     setUpdateStorage(updateValue);
//     localStorage.setItem('value', JSON.stringify(updateValue))
//   }, [rounded, padding, color])

//   return (
//     <div className="p-4">
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center font-bold'>
//           Rounded <span>{rounded} px</span>
//         </label>
//         <Slider className='bg-gray-200 rounded-xl' defaultValue={[0]} max={512} step={1}
//           onValueChange={(value) => setRounded(value[0])}
//         />
//       </div>
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center font-bold'>
//           Padding <span>{padding} px</span>
//         </label>
//         <Slider className='bg-gray-200 rounded-xl' defaultValue={[0]} max={100} step={1}
//           onValueChange={(value) => setPadding(value[0])}
//         />
//       </div>
//       <div className='py-2'>
//         <label className='p-2 flex justify-between items-center font-bold'>
//           Icon Color
//         </label>
//         <ColorPickerController hideController={false}
//           selectedColor={(color) => setColor(color)}
//         />
//       </div>
//     </div>
//   )
// }

// export default BackgroundController;



import { Slider } from "@/components/ui/slider";
import React, { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ui/ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(storageValue?.bgRounded ?? 0);
  const [padding, setPadding] = useState(storageValue?.bgPadding ?? 0);
  const [color, setColor] = useState(storageValue?.bgColor ?? "#000");
  const { setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    if (storageValue) {
      setRounded(storageValue.bgRounded ?? 0);
      setPadding(storageValue.bgPadding ?? 0);
      setColor(storageValue.bgColor ?? "#000");
    }
  }, []);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [rounded, padding, color]);

  return (
    <div className="p-4">
      <div className="py-2">
        <label className="p-2 flex justify-between items-center font-bold">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          className="bg-gray-200 rounded-xl"
          value={[rounded]}
          max={512}
          step={1}
          onValueChange={(value) => setRounded(value[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center font-bold">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          className="bg-gray-200 rounded-xl"
          value={[padding]}
          max={100}
          step={1}
          onValueChange={(value) => setPadding(value[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center font-bold">
          Icon Color
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
}

export default BackgroundController;

