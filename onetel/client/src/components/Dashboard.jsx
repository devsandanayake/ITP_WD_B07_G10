import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

  
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            ONETEL
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/customer/ad" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="user">Customer Management </CDBSidebarMenuItem>
          </NavLink>
           
            
            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View/Add Products</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Order Management</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="box">Repair Management</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/delivery/ad" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="car">Delivery Management</CDBSidebarMenuItem>
            </NavLink>
             
            
            <NavLink   exact to="/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle"> Logout</CDBSidebarMenuItem>
             </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Dashboard;
