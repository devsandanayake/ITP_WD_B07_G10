import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "antd";
import {
  FundProjectionScreenOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// import "antd/dist/antd.css";
import "./Dashboard.css";

import CarouselView from "./CarouselView";
import NavBar from "./NavBar";

//product components
import ItemDashboard from "./Items/ItemsDashboard";
import AddItem from "./Items/AddItems";
import ViewItems from "./Items/ViewItems";
import EditItem from "./Items/EditeItems";
import ItemsReport from "./Items/ItemsReport";

import Logo from "../../assets/logo.png";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const search = window.location.search;

  const param = new URLSearchParams(search);

  console.log(location.pathname);

  //product
  const queryProduct = param.get("_optItem");
  const queryAddProduct = param.get("_item");
  const queryViewProduct = param.get("_item");
  const queryEditProduct = param.get("_item");
  const queryItemReport = param.get("_item");

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const setHeader = (type) => {
    switch (type) {
      case "dashboard":
        document.getElementById("header").innerHTML = "Dashboard";
        break;
      case "stock":
        document.getElementById("header").innerHTML = "Stock Management";
        break;
      default:
        break;
    }
  };

  const logoutHandler = () => {
    history("#home");
    //window.location.reload();
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width="270px"
      >
        <div>
          <img className={collapsed ? "image" : "full-image"}
            src={!collapsed ? Logo : "OneTell Mobile"}
            //alt="logo"
            onClick={() => {
              history("/");
              setHeader("dashboard");
            }}
            style={{ cursor: "pointer", height:"200px",marginLeft:"40px" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={
            queryProduct === "stock"
              ? ["1"]
              : null
          }
        >
          <Menu.Item
            key="1"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("stock");
              history(
                "/stock?_optItem=item"
              );
            }}
          >
            Stock Management
          </Menu.Item>
        </Menu>
        {collapsed === false ? (
          <center className="my-12">
            <Button
              icon={<LogoutOutlined className="-translate-y-0.5" style={{color:"white"}} />}
              onClick={logoutHandler}
            >
              <span style={{color:"white"}}>Sign Out</span>
            </Button>
          </center>
        ) : (
          <center className="my-12 hover:rounded-full hover:bg-slate-500 p-4  hover:mx-4">
            <LogoutOutlined
              style={{ color: "white", cursor: "pointer" }}
              className="-translate-y-0.5"
            />
          </center>
        )}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <h1 id="header" style={{ fontFamily: "serif", fontSize: "20px" }}>
            {queryProduct === "stock" || queryAddProduct === "addproduct" || queryViewProduct === "allproduct" || queryEditProduct === "edit" || queryItemReport === "report"
              ? "Stock Management"
              : "Dashboard"}
          </h1>
        </Header>

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{greet}</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          {location.pathname ===
            "/" &&
            !queryProduct &&
            !queryAddProduct &&
            !queryViewProduct && 
            !queryEditProduct &&
            !queryItemReport && <CarouselView />}
          {queryProduct === "item" && [<NavBar />, <ItemDashboard />]}
          {queryAddProduct === "addproduct" && [<NavBar />, <AddItem />]}
          {queryViewProduct === "allproduct" && [ <NavBar />, <ViewItems />]}
          {queryEditProduct === "edit" && [<NavBar />, <EditItem />]}
          {queryItemReport === "report" && [<NavBar />, <ItemsReport />]}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} OneTel Mobile
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;