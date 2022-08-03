import React, {useState} from 'react';
import './Sidebar.css'
import logo from '../../imgs/logo.png'
import {UilBars, UilEstate, UilSignOutAlt} from "@iconscout/react-unicons";
import {SidebarData} from "../../Data/Data";
import {motion} from "framer-motion";

function Sidebar() {

    const [selected,setSelected] = useState(0)
    const [expanded,setExpanded] = useState(true)


    const sidebarVariants = {
        true:{
            left:'0'
        },
        false:{
            left: '-60%'
        }
    }



    return (
    <>
        <div className="bars"  style={expanded?{left:'60%'}:{left:'5%'}}
            onClick={()=>setExpanded(!expanded)}
        >
            <UilBars/>
        </div>
        <motion.div className="sidebar"
            variants={sidebarVariants}
             animate={window.innerWidth<=768?`${expanded}`: ''
        }
        >
        {/*    logo    */}

            <div className="logo">
                <img src={logo} alt={logo}  />
                <span>
                        Sh<span>o</span>ps
                        
                </span>
            </div>
        {/*    menu*/}
            <div className="menu">
                {SidebarData.map((item,index)=> {
                        return(
                            <div className={selected===index?'menuItem active':'menuItem'}
                                 key={index}
                                onClick={()=>setSelected(index)}
                            >
                                <div>
                                    <item.icon/>
                                </div>
                                <span>{item.heading}</span>
                            </div>
                        )
                    })
                }
                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </motion.div>
    </>
    );
}

export default Sidebar;