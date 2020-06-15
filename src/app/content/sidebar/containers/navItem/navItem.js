import React from 'react';
import style from './navItem.module.css';
import {Link} from 'react-router-dom';

function NavItem({text,icon,link}) {
return(
<>
<Link to={link}>
<div>
<img src = {icon} alt = "icon"/>
<p> {text} </p>
</div>
</Link>
</>
)
}

export default NavItem;