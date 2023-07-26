import React from 'react'
import Logotipo from '../../assets/Ellipse 1.svg'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import { useCustomContext } from '../../ContextManager/ContextProvider'

const NavBar = () => {

    const { searchProduct, setSearchProduct } = useCustomContext()

    return (
        <div>
            <div className='NavBarContainer'>

                <div className='logo' >
                    <img src={Logotipo} alt="Little Market 'S brand" />
                    <h3>Little Market</h3>
                </div>

                <div className='buscador'>
                    <i className="bi bi-search"></i>
                    <input type="text"
                        placeholder='Search Goods...'
                        value={searchProduct}
                        onChange={(e) => setSearchProduct(e.target.value)}
                    />
                </div>

                <div className='menu'>
                    <NavLink className="contact" to="/contact"><span>Contact</span></NavLink>
                    <NavLink to="/"><span><i className="bi bi-house-door-fill"></i></span></NavLink>
                    <i className="bi bi-search searchIcon noDisplay" ></i>
                    <NavLink to="/carrito"><i className="bi bi-cart-fill"></i></NavLink>
                </div>

            </div>

        </div>
    )
}

export default NavBar