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
import TextArea from "antd/lib/input/TextArea";
import { FileDoneOutlined, InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";

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

const { Option } = Select;

const AddItems = () => {
  const [loader, setLoader] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescrip, setItemDescrip] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);

  const itemHandler = async (placement) => {
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
        "/items/create",
        {
          itemName,
          itemDescrip,
          itemCategory,
          itemPrice,
          qty,
          status,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Successfully added the item details 😘",
          placement,
        });
        form.resetFields();
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
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <div className=" mt-10">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => itemHandler("top")}
          >
            <center>
              {error && <span style={{ color: "red" }}>{error}</span>}
            </center>
            <Form.Item
              name="itemName"
              label="Item Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter your item name"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Enter Item Name ex: T-shirt">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="itemDescrip"
              label="Item Description"
              rules={[
                {
                  required: true,
                },
                {
                  max: 60
                }
              ]}
            >
              <TextArea
                style={{ width: "50%" }}
                placeholder="enter your item description"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please provide item description">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                maxLength={60}
                value={itemDescrip}
                onChange={(e) => setItemDescrip(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="itemCatergory"
              label="Item Catergory"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Item Catregory"
                style={{ width: "50%" }}
                onChange={(e) => setItemCategory(e)}
              >
                <Option value="Mobile Casings">Mobile Casings</Option>
                <Option value="Mobile Display">Mobile Display</Option>
                <Option value="Mobile Phones">Mobile Phones</Option>
                <Option value="Mobile Batteries">Mobile Batteries</Option>
                <Option value="Screen Protector">Screen Protectors</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="itemPrice"
              label="Item Price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter item price"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={[
                  <Tooltip title="Enter item price ex: Rs.10000">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>,
                ]}
                showCount
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                type="number"
              />
            </Form.Item>

            <Form.Item
              name="qty"
              label="Quantity"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="enter item quantity"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                showCount
                required
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                type="number"
              />
            </Form.Item>

            <Form.Item
              name="status"
              label="Item Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Item Status"
                style={{ width: "50%" }}
                onChange={(e) => setStatus(e)}
              >
                <Option value="In Stock">In Stock</Option>
                <Option value="Out Of Stock">Out Of Stock</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout} style={{marginLeft:"100px"}}>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <Button  htmlType="submit" style={{color:"black"}}>
                {loading ? (
                  <>
                    <Spin indicator={<LoadingOutlined />} /> Items adding in Progess...
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

export default AddItems