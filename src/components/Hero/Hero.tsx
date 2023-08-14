import  { styled }  from "styled-components"
import ButtonPromo from "../Buttons/ButtonPromo"
import GraphImg from "./GraphImg"
import PartnersImg from "./Partners"


const HeroContainer = styled.section `
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const FirstDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    
`

const HeroTitle = styled.h1 `
    font-size: var( --title-primary);
    color: var(--color-txt-primary);
    text-align: center;
    
`

const Paragraph = styled.p `
    text-align: center;
`

const InputDiv = styled.div `
    background-color: white;
    margin-bottom: 48px;
`

const Input = styled.input `
    padding: 18px 100px 18px 24px ;
    /*border: #97A5B5 solid 1px;*/
    border-radius: var(--border-radius-btn);
    border: var(--color-txt-secondary) solid .2px;
`

const InputButton = styled.button `
    padding: 18px 24px;
    border: none;
    color: white;
    font-weight: bold;
    background-color: var(--color-btn);
    border-radius: var(--border-radius-btn);
    cursor: pointer;
`

const PartnersDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 100px 0;

    > p > span {
        font-weight: bold;
    }
   

`


export default function Hero() {
    return (
        
        <HeroContainer id="circle">

                <FirstDiv>
                    <ButtonPromo/>
                    <HeroTitle>Manage the team <br /> everyone wants to be on</HeroTitle>
                    <Paragraph>Simple platform that lets you master what great managers do best,<br />
                        as develop trust, collaborate, and drive team performance.
                    </Paragraph>
                    <InputDiv>
                        <Input type="email" name="email" id="email" placeholder="name@yourcompany.com" />
                        <InputButton type="submit">Try it free</InputButton>
                    </InputDiv>
                </FirstDiv>
                <>
                <GraphImg/>
                </>
                <PartnersDiv>
                    <p>TRUSTED BY OVER <span>10.000+</span> WORLD’S BEST TEAMS</p>
                    <PartnersImg/>
                </PartnersDiv>

            </HeroContainer>
           
    )
}