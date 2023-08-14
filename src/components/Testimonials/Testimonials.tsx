import Image from "next/image"
import { styled } from "styled-components"

const TestimonialsSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`

const TextDiv = styled.div `
    text-align: center;
    width: 543px;
    height: 240px;
    margin-top: 100px;
`

const Title = styled.h1 `
    font-size: var(--title-secondary);
    font-weight: bold;
    margin-bottom: 48px;
`

const Paragraph = styled.p `
    line-height: 32px;
    font-size: var(--paragraph-secondary);
`

const TestimonialsTitle = styled.p `
    font-weight: bold;
    font-size: var(--paragraph-primary);
`
const TestimonialsList = styled.div `
    display: flex;
    gap: 80px;

`

const Profile = styled.div `
    display: flex;
    gap: 16px;
    padding: 24px 34px 0 34px;

    &:hover {
        border-top: solid 4px black;
    }
`

const ButtonsList = styled.div `
    display: flex;
    align-items: center;
    gap: 143px;
    background-color: var(--color-btn);
    border-radius: 16px;
    padding: 64px 80px;
    margin: 100px 165px;
`

const TitleSecondary = styled.h2 `
    font-size: 32px;
    font-weight: bold;
    color: white;
`

const Buttons = styled.div `
    display: flex;
    gap: 24px;
`

const Button = styled.button `
    background-color: var(--color-btn);
    border: none;
    cursor: pointer;
`


/*O depoimento deve mudar quando clicar no profile da pessoa*/
export default function Testimonials() { 
    return (
        <TestimonialsSection>
            <TextDiv>
                <Title>Why customers love working with us</Title>
                <Paragraph>“It’s amazing what has helped me learn about my team.
                    I don’t worry about blindspots anymore, and 1-on-1s have never
                    been more productive. The team loves it.”</Paragraph>
            </TextDiv>
            <TestimonialsList>
                <Profile>
                    <Image src="/img/profile01.png" width="48" height="48" alt="image profile"/>
                    <div>
                        <TestimonialsTitle>Jorge Robertson</TestimonialsTitle>
                        <Paragraph>Cs at Google</Paragraph>
                    </div>
                </Profile>
                <Profile>
                    <Image src="/img/profile02.png" width="48" height="48" alt="image profile"/>
                    <div>
                        <TestimonialsTitle>Francisco Bell</TestimonialsTitle>
                        <Paragraph>Designer at Microsoft</Paragraph>
                    </div>
                </Profile>
                <Profile>
                    <Image src="/img/profile03.png" width="48" height="48" alt="image profile"/>
                    <div>
                        <TestimonialsTitle>Beth Fox</TestimonialsTitle>
                        <Paragraph>Developer at Airbnb</Paragraph>
                    </div>
                </Profile>
            </TestimonialsList>
            <ButtonsList>
                <TitleSecondary>84% of employees who use trust their direct manager</TitleSecondary>
                <Buttons>
                    <Button><Image src="/img/google-play.svg" width="180" height="53" alt="google play button"/></Button>
                    <Button><Image src="/img/apple-play.svg" width="180" height="53" alt="apple play button"/></Button>
                </Buttons>
                
            </ButtonsList>
        </TestimonialsSection>
    )
}