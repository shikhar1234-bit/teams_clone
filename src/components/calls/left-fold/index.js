import React from 'react'
import { callsMenu, DialerList } from '../../../data/calls'
import DialerItem from './dialer-item';
import './leftfold.css'
import MenuItem from './menu-items'
function LeftFold() {
     const menu=callsMenu;
     const dialerlist=DialerList;
    return (
    <div className="leftFold">
        <div className="leftFold-Menu">
            <label className="menu-label">Calls </label>
                <div className="menu-items">
                    {menu.map((item)=>{
                        return <MenuItem item={item} />;
                    })}
                    </div>
      
        </div>
        <div className="leftFold-dialer">
            <label className="dialer-label">Make a Call</label>
         
                <div className="dialer-search">
                <input placeholder="type a name"/>
                </div>
                <div className="dialer-suggested">
                    <label className="suggested-label">Suggested</label>
                    <div className="suggested-list">
                        {dialerlist.map((item)=>{
                            return <DialerItem item={item}/>
                        }
                            )}


                    </div>
                </div>
                <div className="dialer-botton-icon">
                <i class="fas fa-microphone"></i>
                </div>
                <div className="dialer-botton-icon">
                <i class="fas fa-video"></i>
                </div>
        </div>
    </div>
    )
   
};

export default LeftFold
