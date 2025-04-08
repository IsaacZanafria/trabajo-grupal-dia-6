import React from 'react';
import { useState } from 'react';
import ImageDiv from './components/imageDiv.jsx';

export default function App() {  
  const [images, setImages] = useState("Chicken");
  return (
    <>
      <ImageDiv
      images = {images}
      setImages = {setImages}
      />
    </>
  )
}

