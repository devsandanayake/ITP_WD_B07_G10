import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import moment from "moment";
import { Button } from "antd";

import "../Styles/Report.css";

export default class ItemsReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }
  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.text(85, 10, "OneTel Mobile");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Stock Management");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "StockManagement" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  componentDidMount() {
    axios.get("/items").then((response) => {
      console.log(response?.data);
      this.setState({
        ReportData: response?.data,
      });
    });
  }

  render() {
    return (
      <>
        <div class="flex flex-col" id="pdfdiv" style={{overflowX:"hidden"}}>
          <div class="overflow-mx-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <table class=" mt-3 w-3/4 border-4 border-sky-700 text-center mx-auto">
                <thead class="border-b-4 border-b-sky-700">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Item Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Item Description
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Item Category
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Item Price
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Item Quantity
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Item Status
                    </th>
                  </tr>
                </thead>
                {this.state?.ReportData?.map((p, index) => {
                  return (
                    <tbody>
                      <tr class="border-b">
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {p.itemName}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {p.itemDescrip}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {p.itemCategory}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {p.itemPrice}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {p.qty}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {p.status}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <br />
          <br />
        </div>
        <center>
          <div>
            <Button
              className="info__button"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            >
              <div className=" mb-5">
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF
              </div>
            </Button>
            <br />
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}