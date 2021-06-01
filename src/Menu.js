import React, { useState } from 'react';
import './Menu.css';
import {Link,withRouter} from 'react-router-dom';
import { Drawer} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
const Menu = () => {
    const [drawer,setDrawer]=useState(false);
    return (
        <div>
            <div className="menu-bar">
                <ul>
                    <li className="menu-bar-button"><MenuIcon onClick={()=>setDrawer(true)}/></li>
                    <li className="menu-bar-name">Expense Tracker</li>
                </ul>
            </div>
            
            <Drawer open={drawer} onClose={()=>setDrawer(false)}>
                <ul className="drawer">
                    <li className="drawer-icon" ><Avatar alt="soumitra" src="https://avatars.dicebear.com/api/male/soumithjfra.svg" /></li>
                    <li className="drawer-name">Soumitra Dandapat</li>
                    <Divider/>
                    <li className="drawer-home">
                        <Link to="/" >
                            <HomeIcon style={{color:"dodgerblue"}}/>
                        </Link>  
                    </li>
                    <li className="drawer-dashboard">
                        <Link to="/dashboard">
                            <DashboardIcon style={{color:"dodgerblue"}}/>
                        </Link>    
                    </li>
                    <li className="drawer-add">
                        <Link to="/add">
                            <AddIcon style={{color:"dodgerblue"}}/>
                        </Link>
                    </li>
                    <li className="drawer-exit"><ExitToAppIcon style={{color:"dodgerblue"}}/></li>
                </ul>
            </Drawer>    
        </div>
    )
}

export default withRouter(Menu);
