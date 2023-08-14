import BenefitsImg from "./BenefitsImg";
import  { styled }  from "styled-components"

const BenefitsSection = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 76px ;
    background-color: #FBFAFE;
    
`

const BenefitsDiv = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 372px;
    height: 128px;
    padding: 26px 32px;

    &:hover {
        background-color: #F6F3FC;
        border-left: 2px solid var(--color-btn);
        border-radius: 0px 8px 8px 0px;
    }
`

const Title = styled.p `
    font-weight: bold;
    font-size: 18px;
`

const Paragraph = styled.p `
    font-size: 16px;
`


export default function Benefits () {
    return (
        <BenefitsSection>
            <div>
                <BenefitsImg/>
            </div>
            <div>
                <BenefitsDiv>
                    <Title>Survey your team</Title>
                    <Paragraph>Powerful questions that get to the heart of how team members really feel.</Paragraph>
                </BenefitsDiv>
                <BenefitsDiv>
                    <Title>Resolve issues quickly</Title>
                    <Paragraph>Anonymous messaging that connects managers and employees.</Paragraph>
                </BenefitsDiv>
                <BenefitsDiv>
                    <Title>Plan your 1-on-1s</Title>
                    <Paragraph>Plan meetings together and give a stake employees and teams.</Paragraph>
                </BenefitsDiv>
                <BenefitsDiv>
                    <Title>Track your progress</Title>
                    <Paragraph>Easy-to-read reports and sharable results help managers and teams.</Paragraph>
                </BenefitsDiv>
            </div>
        </BenefitsSection>
    )
}