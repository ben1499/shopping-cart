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

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #e2e8f0;
    }

    &:active {
        color: #94a3b8;
    }
`

const Header = ({cartNumber}) => {
    const location = useLocation();

    return (
        <header>
            <h1><StyledLink>Shopsy</StyledLink></h1>
            <nav>
                <ul>
                    <li>
                        <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/shop">Shop</StyledLink>
                    </li>
                    {location.pathname.includes("shop") ? (
                        <div style={{ position: "relative", cursor: "pointer" }}>
                            <Link style={{color: "#fff", textDecoration: "none"}} to="/shop/cart">
                                <FontAwesomeIcon className="header-link" icon={faCartShopping} />
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