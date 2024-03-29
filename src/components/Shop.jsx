import styled from "styled-components"
import ItemCard from "./ItemCard"
import { useOutletContext } from "react-router-dom"

const StyledMain = styled.main`
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
        <StyledMain>
            <PageTitle>Shop</PageTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "28px"}}>
            {products ? products.map((item) => (
                <ItemCard key={item.id} data={item} />
            )) : "Loading"}
            </div>
        </StyledMain>
    )
}

export default Shop;