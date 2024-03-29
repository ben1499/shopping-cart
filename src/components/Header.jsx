import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types"

const CartNumber = styled.div`
    display: inline-block;
    background: #fff;
    color: #000;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    top: -10px;
    border: 2px solid red;
`

const Header = ({cartNumber}) => {
    const location = useLocation();

    return (
        <header>
            <h1>Shopsy</h1>
            <nav>
                <ul>
                    <li>
                        <Link style={{color: "#fff", textDecoration: "none"}} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{color: "#fff", textDecoration: "none"}} to="/shop">Shop</Link>
                    </li>
                    {location.pathname.includes("shop") ? (
                        <div style={{ position: "relative", cursor: "pointer" }}>
                            <Link to="/shop/cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                                {cartNumber ? (<CartNumber>{cartNumber}</CartNumber>) : null }
                            </Link>
                        </div>
                    ) : null}
                    
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    cartNumber: PropTypes.number
}

export default Header;