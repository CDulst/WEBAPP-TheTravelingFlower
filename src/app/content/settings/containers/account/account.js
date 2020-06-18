import React from 'react';
import {Link} from "react-router-dom";
import Setting from "../setting/setting";
import Logout from "../logout/logout";
import profileExample from "../../../../../assets/settings/profileExample.svg";

function Account() {
  return (
  <>
  <div>
  <img src = {profileExample} alt = "profile"/>
  <div>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  </div>
  </div>
  </>
  );
}

export default Account;