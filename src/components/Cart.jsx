import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const StyledEmptyCart = styled.div`
    width: 600px;
    box-shadow: 2px 2px 6px 2px rgb(0, 0, 0, 0.2);
    padding: 20px;
    margin-top: 90px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

const StyledCart = styled(StyledEmptyCart)`
    align-items: stretch;
    max-height: 500px;
    overflow-y: auto;
    justify-content: flex-start;
`

const CounterBtn = styled.button`
    border: none;
    font-size: 22px;
    color: #475569;
    background: none;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        transform: scale(1.0);
    }
`

const RemoveBtn = styled.button`
    border: none;
    background: none;
    color: #64748b;

    &:hover {
        transform: scale(1.1)
    }
`

const Checkout = styled.div`
    box-shadow: 2px 2px 6px 2px rgb(0, 0, 0, 0.2);
    max-height: 250px;
    margin-top: 90px;
    width: 400px;
    padding: 24px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CheckoutGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`

const CartItem = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 20px;
    width: 500px;
    border-bottom: 1px solid black;
`

const CheckoutBtn = styled.button`
    border: none;
    padding: 12px;
    background: #64748b;
    color: #fff;
    border-radius: 6px;
    width: 100%;
    font-size: 16px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        background-color: #475569;
    }
`

const Cart = () => {
    const [, addToCart, removeFromCart , inputQuantity, cart] = useOutletContext();

    const handleItemRemove = (id, value) => {
        inputQuantity(id, value);
    }

    let totalAmount = 0;
    let totalItems = 0;

    if (cart?.length > 0) {
        totalAmount = cart.reduce((total, item) => {
            return total + (+item.quantity * +item.price)
        }, 0)

        totalItems = cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0)
    }

    return (
        <main style={{display: "flex", justifyContent: "center", gap: "50px"}}>
            {cart?.length === 0 ? (
                <StyledEmptyCart>
                    <h3 style={{fontSize: "28px"}}>No items in Cart</h3>
                    <Link to="/shop"><button style={{ marginTop: "20px" }}>Continue Shopping</button></Link>
                    
                </StyledEmptyCart>
            ) : (
                <>
                    <StyledCart>
                        <h2>Your cart</h2>
                        {cart?.map((item) => (
                            <CartItem key={item.id}>
                                <div><img src={item.image} alt="" style={{ height: "100px", width: "100px", objectFit: "contain" }} /></div>
                                <div style={{width: "70%"}}>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                        <p className="text-bold" style={{fontSize: "14px"}}>{item.title}</p>
                                        <div><RemoveBtn onClick={() => handleItemRemove(item.id, 0)}><FontAwesomeIcon icon={faX} /></RemoveBtn></div>
                                    </div>
                                    <p className="text-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    <div style={{ marginTop: "6px", marginBottom: "14px" }}>
                                        <CounterBtn onClick={() => removeFromCart(item.id)}>-</CounterBtn>
                                        <span style={{ margin: "0 6px", padding: "0 8px", borderLeft: "1px solid black", borderRight: "1px solid black" }}>{item.quantity}</span>
                                        <CounterBtn onClick={() => addToCart(item.id)}>+</CounterBtn>
                                    </div>
                                </div>
                            </CartItem>
                        ))}
                    </StyledCart>
                    <Checkout>
                        <div>
                            <CheckoutGroup>
                                <div>Selected Products</div>
                                <div className="text-bold">{cart && cart.length}</div>
                            </CheckoutGroup>
                            <CheckoutGroup>
                                <div>Number of items</div>
                                <div className="text-bold">{totalItems}</div>
                            </CheckoutGroup>
                            <CheckoutGroup>
                                <div>Total Amount</div>
                                <div className="text-bold">${totalAmount.toFixed(2)}</div>
                            </CheckoutGroup>
                        </div>
                        <CheckoutBtn className="text-bold">Proceed to Checkout and Pay</CheckoutBtn>
                    </Checkout>
                </>
            )}

        </main>
    )
}

export default Cart;