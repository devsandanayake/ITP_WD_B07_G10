import React, { useState, useEffect } from "react";
import { Button, notification, Spin, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";

const ViewItems = () => {
  const history = useNavigate();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("_id");

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () =>
      await axios.get("http://localhost:8070/items/").then((res) => {
        setData(res.data);
      }))();
  }, []);

  console.log(data);

  useEffect(() => {
    setTimeout(() => setLoader(true), 3000);
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/delete/${id}`);
      notification.info({
        title: "Delete Form",
        message: "Successfully Deleted the Item",
        placement: "top",
      });
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const filteredData = data.filter(
    (el) => el.itemName.toLowerCase().indexOf(query.toLowerCase()) >= 0 || 
    el.itemDescrip.toLowerCase().indexOf(query.toLowerCase()) >= 0 || 
    el.itemCategory.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
    el.status.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
  console.log("Search", filteredData);

  const columns = [
    {
      title: "Item Name",
      dataIndex: "itemName",
    },
    {
      title: "Item Description",
      dataIndex: "itemDescrip",
    },
    {
      title: "Item Category",
      dataIndex: "itemCategory",
    },
    {
      title: "Item Price",
      render: (record) => <>{"Rs." + record.itemPrice}</>,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
    },
    {
      title: "Product Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      render: (record) => (
        <div className="flex">
          <div className=" mr-2">
            <Button
              style={{
                background: "blue",
                color: "white",
                display: "inline-block",
              }}
              onClick={() => history(`/stock?_item=edit&_id=${record._id}`)}
            >
              Edit
            </Button>
          </div>
          <div>
            <Button
              style={{ background: "red", color: "white" }}
              onClick={() => deleteHandler(record._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ),
      width: 120,
    },
  ];

  return (
    <>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <div className=" mt-10">
          <form
            className="flex"
            class="block p-2 pl-10 w-full rounded-lg border sm:text-sm"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "100%", height: "20%", padding: "6px", marginLeft: "-1vw" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          {filteredData.length === 0 ? (
            <center>
              <span style={{ color: "red", fontSize: "1.5vw" }}>
                No Results Match
              </span>
            </center>
          ) : (
            <Table columns={columns} dataSource={filteredData} />
          )}
        </div>
      )}
    </>
  );
};

export default ViewItems;
