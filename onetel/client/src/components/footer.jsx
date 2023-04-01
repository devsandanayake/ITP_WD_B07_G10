import React from 'react'
import './footer.css'

export default function footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
        <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Affiliate Program</a></li>

                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order status</a></li>
                        <li><a href="#">Payment Options</a></li>

                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Online Shop</h4>
                    <ul>
                        <li><a href="#">Phones</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Earphones</a></li>

                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a id="facebook" href=""><i className="fa-brands fa-facebook"></i></a>
                        <a id="twitter" href=""><i className="fa-brands fa-twitter"></i></a>
                        <a id="instagram" href=""><i className="fa-brands fa-instagram"></i></a>
                        <a id="linkedin" href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
