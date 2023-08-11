import  { styled }  from "styled-components"
import ButtonPromo from "./ButtonPromo"

const HeroContainer = styled.section `
    background-color: #f4f4f4;
    padding-top: 100px;
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
    border: none;
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



export default function Hero() {
    return (
        <HeroContainer>
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
                
                
                <p>TRUSTED BY OVER <span>10.000+</span> WORLD’S BEST TEAMS</p>
                <div>
                   
              
                </div>
            </HeroContainer>
    )
}