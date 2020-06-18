import React from 'react';
import style from './upload.module.css';



function Upload({text}) {

const handleClickUpload = e => {
e.preventDefault();
}

  return (
  <>
  <form className = {style.form}>
  <button onClick={handleClickUpload} className={style.button}></button>
  <input className={style.inputVideo} type="file" accept="video/*"/>
  <p className = {style.text}>{text}</p>
  </form>
  </>
  );
}

export default Upload;
