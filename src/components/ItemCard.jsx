import styled from "styled-components";
import PropTypes from "prop-types"
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 300px;
    box-shadow: 2px 2px 6px 2px rgb(0, 0, 0, 0.2)
`

const Title = styled.div`
    font-size: 14px;
`

const Price = styled.div`
    font-weight: bold;
`

const Counter = styled.div`
    display: flex
`

const ItemCard = ({ data }) => {

    const [products, addToCart, removeFromCart, inputQuantity] = useOutletContext();

    const handleInputChange = (e, id) => {
        const value = +(e.target.value);
        if (value >= 0 && typeof value == "number") {
            inputQuantity(id, value)
        }
    }

    return (
        <StyledCard>
            <img style={{ maxWidth: "200px", height: "200px", objectFit: "contain" }} src={data.image} alt="" />
            <Title>{data.title}</Title>
            <Price>$ {data.price}</Price>

            <Counter>
                <button onClick={() => removeFromCart(data.id)}>-</button>
                <input style={{ width: "50px", textAlign: "center" }} type="number" value={data.quantity} onChange={(e) => handleInputChange(e, data.id)} />
                <button onClick={() => addToCart(data.id)}>+</button>
            </Counter>
        </StyledCard>
    )
}

ItemCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default ItemCard;