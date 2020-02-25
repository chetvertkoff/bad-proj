import React, { useState } from 'react';
import Input from './../UI/input';

const Form = (props) => {

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()

  const getName = (name:string):void=>{
    setName(name)
  }

  const getLastName = (lastName:string):void=>{
    setLastName(lastName)
  }

  const sendForm = (e):void=>{
    e.preventDefault()
    props.getLetters(`${name.charAt(name)}${lastName.charAt(lastName)}`)
  }

  return (
    <form onSubmit={sendForm}>
      <Input placeholder="Введи имя" getVal={getName} value={name} />
      <Input placeholder="Введи фамилию" getVal={getLastName} value={lastName} />
      <button>Отправить</button>
    </form>
  );
}

export default Form
