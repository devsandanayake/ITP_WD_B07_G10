import React, { useState, useEffect } from "react";
import { Spin } from "antd";



const ItemsDashboard = () => {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSpin(true);
    }, 3000);
  }, []);

  return (
    <div>
      <center>
        {spin === false ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <div>
            <>
              <img
                src="https://i.ibb.co/b5fNRG4/28-C-Product-Management.png"
                alt="product"
                className="w-full h-full"
              />
            </>
          </div>
        )}
      </center>
    </div>
  );
}

export default ItemsDashboard