import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

const StyledEmptyCart = styled.div`
    width: 600px;
    box-shadow: 2px 2px 6px 2px rgb(0, 0, 0, 0.2);
    padding: 20px;
    margin-top: 100px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledCart = styled(StyledEmptyCart)`
    align-items: stretch;
    max-height: 500px;
    overflow-y: auto;
    justify-content: flex-start;
`

const Checkout = styled.div`
    box-shadow: 2px 2px 6px 2px rgb(0, 0, 0, 0.2);
    max-height: 250px;
    margin-top: 100px;
    width: 450px;
    padding: 20px;
`

const CheckoutGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

const CartItem = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 20px;
    width: 500px;
    border-bottom: 1px solid black;
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
                                        <p>{item.title}</p>
                                        <div><button onClick={() => handleItemRemove(item.id, 0)}>Remove</button></div>
                                    </div>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    <div>
                                        <button onClick={() => removeFromCart(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item.id)}>+</button>
                                    </div>
                                </div>
                            </CartItem>
                        ))}
                    </StyledCart>
                    <Checkout>
                        <CheckoutGroup>
                            <div>Selected Products</div>
                            <div>{cart && cart.length}</div>
                        </CheckoutGroup>
                        <CheckoutGroup>
                            <div>Number of items</div>
                            <div>{totalItems}</div>
                        </CheckoutGroup>
                        <CheckoutGroup>
                            <div>Total Amount</div>
                            <div>${totalAmount.toFixed(2)}</div>
                        </CheckoutGroup>
                        <button>Proceed to Checkout and Pay</button>
                    </Checkout>
                </>
            )}

        </main>
    )
}

export default Cart;