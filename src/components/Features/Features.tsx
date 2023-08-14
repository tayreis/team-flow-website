import Image from "next/image"
import  { styled }  from "styled-components"

const FeaturesSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
    padding: 100px 0;

`

const Title = styled.h1 `
    font-size: var(--title-secondary);
    font-weight: bold;
`

const FeaturesList = styled.div `
    width: 100%;
    display: flex;
    padding: 0 165px;
    gap: 120px;
    flex-wrap: wrap;
    justify-content: center;
`

const FeaturesItem = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
`
const ItemTitle = styled.p `
    font-weight: bold;
    font-size: var(--paragraph-primary);
    margin-top: 24px;
    margin-bottom: 8px;
`
const ItemParagraph = styled.p `
    font-size: var(--paragraph-secondary);
`

export default function Features() {
    return (
        <FeaturesSection>
            <Title>Make your work easier</Title>
            <FeaturesList>
                <FeaturesItem>
                    <Image src="/img/img01.png" width="64" height="64" alt="image team surveys and reports"/>
                    <ItemTitle>Team Surveys & Reports</ItemTitle>
                    <ItemParagraph>Short, anonymous surveys track your team’s needs weekly so you can focus.</ItemParagraph>
                </FeaturesItem>
                <FeaturesItem>
                    <Image src="/img/img02.png" width="64" height="64" alt="image team surveys and reports"/>
                    <ItemTitle>Collaborative 1:1 </ItemTitle>
                    <ItemParagraph>Build relationships by planning 1-on-1s and start meetings.</ItemParagraph>
                </FeaturesItem>
                <FeaturesItem>
                    <Image src="/img/img03.png" width="64" height="64" alt="image team surveys and reports"/>
                    <ItemTitle>Learning Center</ItemTitle>
                    <ItemParagraph>Quickly get solutions tailored to your personal challenges from the manager.</ItemParagraph>
                </FeaturesItem>
                <FeaturesItem>
                    <Image src="/img/img04.png" width="64" height="64" alt="image team surveys and reports"/>
                    <ItemTitle>Anonymous Messaging</ItemTitle>
                    <ItemParagraph>Develop trust in a safe channel for important conversations.</ItemParagraph>
                </FeaturesItem>
                <FeaturesItem>
                    <Image src="/img/img05.png" width="64" height="64" alt="image team surveys and reports"/>
                    <ItemTitle>Conversation Engine</ItemTitle>
                    <ItemParagraph>Communicate confidently withrecommended talking points.</ItemParagraph>
                </FeaturesItem>
                <FeaturesItem>
                    <Image src="/img/img06.png" width="64" height="64" alt="image team surveys and reports"/>
                    <ItemTitle>Exclusives Manager</ItemTitle>
                    <ItemParagraph>Access manager tips, activities and best practices from our team of experts.</ItemParagraph>
                </FeaturesItem>
            </FeaturesList>
        </FeaturesSection>
    )
}