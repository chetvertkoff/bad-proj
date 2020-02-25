import React from 'react';

const Image = (props) => {
  const image:string = props.image

  const audio = ()=>{
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = '/upload/mp3.mp3';
    audio.play();
  }
  audio()
  return (
    <div>
      <img width="200px" height="200px" src={image} alt=""/>
    </div>
  );

}

export default Image
