import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (

        <footer>
            <div className='direccion'>
                <h3>Constructor</h3>
                <span>12 Water ST. Vancouver,BC
                    <br />
                    <br />
                    V6B 132 United States
                </span>
            </div>
            <div className='footerContainer'>
                <div>
                    <ul>
                        <li><Link to="">Corporate Sales</Link></li>
                        <li><Link to="">Feedback</Link></li>
                        <li><Link to="">Jobs</Link></li>
                        <li><Link to="">News</Link></li>
                        <li><Link to="">Sales Rules</Link></li>
                        <li><Link to="">For Partners</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link >Bonus Program</Link></li>
                        <li><Link >Gift Cards</Link></li>
                        <li><Link >Bill Payment Verification</Link></li>
                        <li><Link >Loans</Link></li>
                        <li><Link >Delivery</Link></li>
                        <li><Link >Service Center</Link></li>

                    </ul>
                </div>
                <div className='out'>
                    <ul>
                        <li><Link to="">How to place and order</Link></li>
                        <li><Link to="">Ways of payment</Link></li>
                        <li><Link to="">Exchanges and return of goods</Link></li>
                        <li><Link to="">Warranty service</Link></li>
                        <li><Link to="">Order Status</Link></li>
                        <li><Link to="">Knowledge base</Link></li>
                    </ul>
                </div>
            </div>
            <div className='terminos'>
                <h4>2030 Company. All rights reserved</h4>
                <p><Link to="">Terms & Condition</Link></p>
                <p><Link to="">Privacy Policy</Link></p>
            </div>
        </footer>

    )
}

export default Footer