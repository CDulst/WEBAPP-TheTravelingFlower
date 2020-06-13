import React from 'react';



function Field({value,icon}) {
  return (
  <>
  <input type = "text" placeholder = {value} style = {{backgroundImage: `url(${icon})`}}/> 
  </>
  );
}

export default Field;