import React from 'react';

const Input = (props) => {
  
  const sendValue = (value:any):void=>{    
      props.getVal(value.target.value)
  }

  return (
    <React.Fragment>
      <input 
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        value={props.value || ''}
        onChange={sendValue}
      />
    </React.Fragment>
  );
}

export default Input
