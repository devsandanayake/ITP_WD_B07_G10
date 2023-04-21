import React from 'react'
import jsPDF from 'jspdf';
export default function DeliveryR() {
   
    function print() {
        var doc = new jsPDF('p', 'pt');
        doc.setTextColor(254, 8, 8);
        doc.text(20, 20, "Montly Delivery Report")
        doc.addFont('helvetica', 'normal')
        doc.setFontSize(12);
        doc.setTextColor(3, 3, 3);
        doc.text(25, 60, ' Delivery ')
        
        doc.save('Report.pdf')
    
      }
  return (
    <div> <div className='col'>
    <button type="submit" className="btn btn-success btn-block" onClick={print}
    >Receipt</button>
  </div></div>
  )
}

