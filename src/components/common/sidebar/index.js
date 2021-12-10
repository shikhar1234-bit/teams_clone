import React from 'react'
import { SidebarBottom, SidebarMore, SidebarTop } from '../../../data/sidebar'
import './sidebar.css'
import SidebarOption from './sidebar-option';

function Sidebar() {
    const topOptions = SidebarTop;
    const more=SidebarMore;
    const bottomOptions=SidebarBottom;

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                {topOptions.map((option)=>{
                    return <SidebarOption option={option} isActive={option.name=="Calls"?true:false}/>
                })}

            </div>
            <div>
               <SidebarOption option={more}/>
            </div>
            <div className="sidebar-bottom">
                {
                bottomOptions.map((option)=>
                {
                    return <SidebarOption option={option}/>
        
                })
                }
            </div>
        </div>
    )
}

export default Sidebar
