import styled from "styled-components";
import bgImg from "../assets/main-bg.webp"

const Hero = styled.main`
    background: url(${bgImg});
    color: #e2e8f0;
    text-shadow: 1px 1px 6px rgb(0, 0, 0, 0.6);
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Home = () => {

    return (
        <Hero>
            <h2 style={{ fontSize: '60px' }}>Your Style. Elevated.</h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Express yourself with curated fashion finds.</p>
        </Hero>
    )
}

export default Home;