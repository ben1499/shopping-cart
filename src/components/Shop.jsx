import styled from "styled-components"
import ItemCard from "./ItemCard"
import { useOutletContext } from "react-router-dom"

const StyledShop = styled.main`
    width: 90%;
    margin: 40px auto;
`

const PageTitle = styled.h2`
    font-size: 34px;
    margin-bottom: 12px;
`

const Shop = () => {
    const [products] = useOutletContext();
    return (
        <main>
            <StyledShop>
                <PageTitle>Shop</PageTitle>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "28px"}}>
                    {products ? products.map((item) => (
                        <ItemCard key={item.id} data={item} />
                    )) : "Loading"}
                </div>
            </StyledShop>
        </main>
    )
}

export default Shop;