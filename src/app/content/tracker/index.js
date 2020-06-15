import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore.js'
import PopupIcon from '../../components/popupIcon/popupIcon';
import Icon from '../../../assets/icons/email.svg'

function Tracker() {

    useEffect(() => {
        uiStore.setPage("tracker")
      });

  return (
  <>
  <PopupIcon icon={Icon} />
  <p> Tracker page </p>
  <Link to = {ROUTES.apply}> Go to apply </Link>
  
  </>
  );
}

export default Tracker;
