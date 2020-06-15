import React from 'react';
import style from './navItem.module.css';
import {Link} from 'react-router-dom';

function NavItem({text,icon,link,active}) {
return(
<>
<Link className = {style.link} to={link}>
<div className = {style.wrapper}>
<img className = {( active ? `${style.image} ${style.active}` : `${style.image}`)} src = {icon} alt = "icon"/>
<p className = {style.text}> {text} </p>
</div>
</Link>
</>
)
}

export default NavItem;