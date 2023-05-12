import React from "react";
import { Button } from "antd";
import { HomeTwoTone } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const history = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16">
      <div className="text-4xl float-left translate-x-4">
        <HomeTwoTone
          onClick={() => history(
            "/stock?_optItem=item"
          )} />
      </div>
      <div className=" pt-6 flex">
        <div className="mx-auto -translate-x-6">
          <Button
            type="primary"
            danger
            onClick={() => history(
              "/stock?_item=addproduct"
            )}
          >
            Add Item
          </Button>{" "}
          <Button
            type="primary"
            danger
            onClick={() => history(
              "/stock?_item=allproduct"
            )}
          >
            All Items
          </Button>{" "}
          <Button
            type="primary"
            danger
            onClick={() => history(
              "/stock?_item=report"
            )}
          >
            Report
          </Button>{" "}
        </div>
      </div>
    </div>
    // <div>
    //   <div className="nav">
    //     <div>Home</div>
    //     <div>Home</div>
    //     <div>Home</div>
    //     <div>Home</div>
    //   </div>
    // </div>
  );
};

export default NavBar;