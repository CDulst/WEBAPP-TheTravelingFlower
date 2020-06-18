import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../../../components/button/button"


function Logout() {
  return (
  <>
  <p> Do you want to log out ?</p>
  <Button value = "LOG OUT" type = "secondary"/>
  </>
  );
}

export default Logout;