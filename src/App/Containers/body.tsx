import React, { useState } from 'react';
import Form from './../Components/form';
import Image from './image';
import { Preloader } from './../UI/Preloader';

const Body = () => {
  const [letters, setLetters] = useState()
  const [image, setImage] = useState()
  const [preloader, setPreloader]= useState(false)

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
  
    bytes.forEach((b) => binary += String.fromCharCode(b));
  
    return window.btoa(binary);
  };

  const getLetters = async (word: string)=>{
    setPreloader(true)
    const res = await fetch(`https://ulianovkd.pythonanywhere.com/?text=${word}`)
    res.arrayBuffer()
     .then((buffer) => {
      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr = arrayBufferToBase64(buffer);
      setImage(base64Flag + imageStr)
    });
    setTimeout(() => {
      setPreloader(false)      
    }, 500);

    // const img = await res.blob()
    // const outside = URL.createObjectURL(img)
    // console.log(outside)
  }

  return (
    <div className="body">  
      {
        preloader ? <Preloader />
        :
        image ?
          <Image image={image} />
          :
          <Form getLetters={getLetters} />   
        
            
        // image ?
        // <img width="200px" height="200px" src={image} alt=""/>
        // :
        // <Form getLetters={getLetters} />     
      }
    </div>
  );
}

export default Body
