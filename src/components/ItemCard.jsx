import styled from "styled-components";
import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 300px;
    box-shadow: 2px 2px 6px 2px rgb(0, 0, 0, 0.2);
    background-color: #fff;
`

const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 8px;
`

const Price = styled.div`
    font-weight: bold;
    font-size: 20px;
`

const Counter = styled.div`
    display: flex;
    margin-top: 10px;
`

const CounterBtn = styled.button`
    border: none;
    background-color: #64748b;
    color: #fff;
    font-size: 18px;
    padding: 2px 8px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        background-color: #475569;
    }
`

const ItemCard = ({ data }) => {

    const [, addToCart, removeFromCart, inputQuantity] = useOutletContext();

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
                <CounterBtn onClick={() => removeFromCart(data.id)}>-</CounterBtn>
                <input style={{ width: "50px", textAlign: "center" }} type="number" value={data.quantity} onChange={(e) => handleInputChange(e, data.id)} />
                <CounterBtn onClick={() => addToCart(data.id)}>+</CounterBtn>
            </Counter>
        </StyledCard>
    )
}

ItemCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default ItemCard;