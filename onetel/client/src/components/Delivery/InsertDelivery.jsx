import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Spin,
  Tooltip,
  notification,
  DatePicker,
  Select,
} from "antd";
 
import { FileDoneOutlined, InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import "./form.css"

import axios from "axios";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

 

const InsertDelivery = () => {
  const [loader, setLoader] = useState(false);
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [NIC, setNIC] = useState("");
  const [email, setEmail] = useState("");
   

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);

  const Handler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        //use axios API
        "/post/save",
        {
           Name,
           Address,
           phone,
           NIC,
           email,
        },
        config
        );

       

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Successfully",
          placement:"topRight",
          
          
        });
        window.location="/payment"
         
      }, 3000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      setError(true);
      form.resetFields();
      setLoading(false);
    } 
  }; 

  const [form] = Form.useForm();

  // const onChangeDate = (type) => {
  //   setDateAdded(type);
  // };

  const onReset = () => {
    form.resetFields();
  };

  return (
     <>
 <br/><br/>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <div className=" mt-10">
          <Form className="deliveryform"
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => Handler("top")}
          >  <h2> Add Your Details </h2>
            <center>
              {error && <span style={{ color: "red" }}>{error}</span>}
            </center>
            <Form.Item
              name="Name"
              label="Customer Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter your name"
                 
                suffix={
                  <Tooltip title="Enter  Name ex: H.S Perera">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Address"
              label="Address"
              rules={[
                {
                  required: true,
                },
                {
                  max: 60
                }
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter your address"
                 
                showCount
                maxLength={60}
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone number"
             
              rules={[
                {
                  required: true,
                },
                {
                  max: 10
                }
              ]}
            >
               <Input
                style={{ width: "50%" }}
                placeholder="enter your Number"
                
                suffix={
                  <Tooltip title="Enter Your Phone number: +941238989">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
               
            </Form.Item>

            <Form.Item
              name="NIC"
              label="NIC number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter NIC number"
                
                showCount
                value={NIC}
                onChange={(e) => setNIC(e.target.value)}
                 
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },{ type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter Email"
                
                showCount
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </Form.Item>

          

            <Form.Item {...tailLayout} style={{marginLeft:"100px"}}>
              
              <Button  htmlType="submit" style={{color:"black"}}>
                {loading ? (
                  <>
                    <Spin indicator={<LoadingOutlined />} />  Progess...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}

export default InsertDelivery