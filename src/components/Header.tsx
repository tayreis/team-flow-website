"use client"

import  { styled }  from "styled-components"
import Logo from './Logo';
import NavBar from "./NavBar";
import Buttons from "./Buttons";

const TagHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 48px;
`

export default function Header() {
    return (
        <TagHeader>
            <Logo/>

            <>
            <NavBar/>
            </>
            
            <>
            <Buttons/>
            </>
        </TagHeader>
    )
}