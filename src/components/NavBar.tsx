import  { styled }  from "styled-components"
import ArrowDown from "./ArrowDown"

const NavContainer = styled.nav `
    display: flex;
    gap: 45px;

`
const Links = styled.a `
    text-decoration: none;
    color: var(--color-txt-primary);
`

export default function NavBar() {
    return (
        <NavContainer>
            <Links  href="#">How it Works <ArrowDown/></Links>
            <Links  href="#">Product <ArrowDown/></Links>
            <Links  href="#">Pricing</Links>
            <Links  href="#">Resources <ArrowDown/></Links>
        </NavContainer>
    )
}