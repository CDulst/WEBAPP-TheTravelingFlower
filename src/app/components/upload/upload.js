import React from 'react';
import style from './upload.module.css';
import Button from '../button/button';
import upload from '../../../assets/Upload.svg';
import CorrectUpload from '../../../assets/CorrectUpload.svg'
import UploadVideo from '../../../assets/Upload.svg'

function Upload({text}) {

const handleClickUpload = e => {
e.preventDefault();
}

  return (
  <>
  <form>
  <button onClick={handleClickUpload} className={style.button}></button>
  <input className={style.inputVideo} type="file" accept="video/*"/>
  </form>
  </>
  );
}

export default Upload;
