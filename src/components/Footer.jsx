import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 23px 18px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2024 Shopsy</p>
        </StyledFooter>
    )
}

export default Footer;