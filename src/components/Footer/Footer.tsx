import Image from "next/image";
import { styled } from "styled-components";

const FooterSection = styled.section `
    display: flex;
    flex-direction: column;
    background-color: #1D2830;

`
const FooterLinks = styled.div `
    display: flex;
    padding: 80px 165px;
    justify-content: space-between;

`

const LinksContainer = styled.div `
    display: flex;
    gap: 180px;
`

const Links = styled.div `
    color: var(--color-txt-footer);
    display: flex;
    flex-direction: column;
    gap: 24px;

    >p >span {
        font-weight: bold;
        color: white;
        
    }

    >a {
        color: var(--color-txt-footer);
    }
`

const AppsContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;

    >p {
        color: white;
        font-weight: bold;
    }
`

const Button = styled.button `
    background-color: #1D2830;
    border: none;
    cursor: pointer;
`

const FooterSocial = styled.div `
    padding: 24px 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-txt-footer);
    border-top: var(--color-bg-primary) solid .5px;
`


export default function Footer() {
    return (
        <FooterSection>
            <FooterLinks>
                <LinksContainer>
                    <Links>
                        <p><span>Company</span></p>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact Us</a>
                    </Links>
                    <Links>
                        <p><span>Support</span></p>
                        <a href="#">Help Center</a>
                        <a href="#">Safety Center</a>
                        <a href="#">Community</a>
                    </Links>
                    <Links>
                        <p><span>Legal</span></p>
                        <a href="#">Cookies Policy</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Termos of Services</a>
                    </Links>
                </LinksContainer>
                <AppsContainer>
                    <p>Install App</p>
                    <Button><Image src="/img/google-play-dark.svg" width="162" height="48" alt="google play button"/></Button>
                    <Button><Image src="/img/apple-play-dark.svg" width="162" height="48" alt="apple play button"/></Button>
                </AppsContainer>
            </FooterLinks>
            <FooterSocial>
                <p>© 2020 - All rights reserved</p>
                <div>
                <a href="#" ><Image src="/img/social-media01.png" width="32" height="32" alt="image profile"/></a>
                <a href="#" ><Image src="/img/social-media02.png" width="32" height="32" alt="image profile"/></a>
                <a href="#" ><Image src="/img/social-media03.png" width="32" height="32" alt="image profile"/></a>
                <a href="#" ><Image src="/img/social-media04.png" width="32" height="32" alt="image profile"/></a>
                </div>
            </FooterSocial>
        </FooterSection>
    )
}