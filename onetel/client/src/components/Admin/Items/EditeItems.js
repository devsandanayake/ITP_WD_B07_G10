import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Spin,
  Tooltip,
  notification,
  Select,
  DatePicker,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
  FileDoneOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

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

const EditeItems = () => {
  const [loader, setLoader] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescrip, setItemDescrip] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("");

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("_id");
  const history = useNavigate();

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
    (async () => {
      await axios
        .get(`/get/${id}`)
        .then((res) => {
          form.setFieldsValue({
            itemName: res.data.itemName,
            itemDescrip: res.data.itemDescrip,
            itemCategory: res.data.itemCategory,
            itemPrice: res.data.itemPrice,
            qty: res.data.qty,
            status: res.data.status,
          });
          setItemName(res.data.itemName);
          setItemDescrip(res.data.itemDescrip);
          setItemCategory(res.data.itemCategory);
          setItemPrice(res.data.itemPrice);
          setQty(res.data.qty);
          setStatus(res.data.status);
        })
        .catch(() => null);
    })();
  }, []);

  const itemHandlerUpdate = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/update/${id}`,
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
          description: "Successfully updated the item details 😘",
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
            onFinish={() => itemHandlerUpdate("top")}
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
                maxLength={100}
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
                defaultValue={itemCategory}
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
                  <Tooltip title="Enter Item price ex: Rs.10000">
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

            <Form.Item {...tailLayout}>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <Button  htmlType="submit" style={{color: "black", marginLeft:"150px"}}>
                {loading ? (
                  <>
                    <Spin indicator={<LoadingOutlined />} /> Updating in
                    Progess...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditeItems