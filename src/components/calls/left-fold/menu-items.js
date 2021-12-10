import React from 'react'
import './menu-items.css'



function MenuItem({item,isActve}) {
    const classList=isActve?"item-active menu-item":"menu-item";
    return (
        <div className="classList">
            <div className="item-icon">{item.icon}</div>
             <label className="item-label">{item.name}</label>   
        </div>
    )
}

export default MenuItem
