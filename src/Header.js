import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import AddCustomer from "./Components/AddCustomer";
import CustomerList from "./Components/CustomerList";


const Header = () => {

    const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>     
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Customers
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>Edit customer</MenuItem>
              <MenuItem icon={<FaList />}>Delete customer</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Add training</MenuItem>
              <MenuItem icon={<BiCog />}>Delete training</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          
          </SidebarFooter>
        </ProSidebar>
        
      </div>
      
    </>
  );
};

export default Header;