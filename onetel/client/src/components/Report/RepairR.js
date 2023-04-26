import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import  Button  from "react-bootstrap/Button";



export default class RepairR extends Component {
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
      doc.text(10, 70, "Repair Details");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      
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
        "Delivery_Management" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  viewPosts(){
    axios.get("/repair").then(res =>{
      if(res.data.success){
        this.setState({
          ReportData:res.data.existingPosts,
                    
        });
        //show array list 
        console.log(this.state.posts )
         
      }
    });
  }

  componentDidMount() {
    this.viewPosts()
  }

  render() {
    return (
      <>
      <div className='container' id="pdfdiv">
         <div className='row my-4'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
       <table className="table table-striped text-center" >
           <thead>
             <tr>
             <th scope="col">Index</th>
             <th scope="col">Customer-Name</th>
             <th scope="col">Address</th>
             <th scope="col">Phone</th>
             <th scope="col">Email</th>
             <th scope="col">Category</th>
             <th scope="col">Model-Num</th>
             <th scope="col">Reason</th>
            
             </tr>
           </thead>
         
         <tbody style={{background:'pink'}}>
            {this.state.ReportData.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.name}</td>
                    <td>{posts.address}</td>
                    <td>{posts.contactNumber}</td>
                    <td>{posts.email}</td>
                    <td>{posts.category}</td>
                    <td>{posts.Model}</td>
                    <td>{posts.reason}</td>
                    
                    
                 </tr>

            ))}
         </tbody>
       </table>
       
      
      </div></div></div></div>
        <center>
          <div>
            <Button
              className="btn btn-warning"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            > <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              Download PDF
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