import ButtonStarted from "../Buttons/ButtonStarted";
import NumbersImg from "./NumbersImg";
import  { styled }  from "styled-components"

const NumbersSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 76px ;
    background-color: #FBFAFE;
`

const NumbersDiv = styled.div `
    padding: 0 150px;
`


const Title = styled.h1 `
    font-size: var(--title-secondary);
    font-weight: bold;
    margin-bottom: 24px;
`

const Paragraph = styled.p `
    font-size: var(--paragraph-secondary);
    margin-bottom: 32px;
`

export default function Numbers() {
    return (
        <NumbersSection>
            <NumbersDiv>
                <Title>We work how you work everyday</Title>
                <Paragraph>Since the easiest things to use actually get used, we adapts to the way your team works – not the other way around.</Paragraph>
                <ButtonStarted/>
            </NumbersDiv>
            <div>
                <NumbersImg/>
            </div>
        </NumbersSection>
    )
}