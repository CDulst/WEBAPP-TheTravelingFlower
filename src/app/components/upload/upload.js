import React from 'react';
import style from './upload.module.css';
import Button from '../button/button';
import upload from '../../../assets/Upload.svg';
import CorrectUpload from '../../../assets/CorrectUpload.svg'

function Upload({text}) {
  return (
  <>
  <form>
  <input type="file" accept="video/*"/>
  <p> {text} </p>
  </form>
  </>
  );
}

export default Upload;
