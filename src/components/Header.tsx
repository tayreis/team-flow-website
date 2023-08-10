"use client"

import  { styled }  from "styled-components"
import Link from 'next/link';
import Logo from './Logo';
import ButtonStarted from './ButtonStarted';
import ButtonLogin from './ButtonLogin';
import NavBar from "./NavBar";

const TagHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 48px;
`

export default function Header() {
    return (
        <TagHeader>
            <Link href="#">
                <Logo/>
            </Link>

            <>
            <NavBar/>
            </>

            <div>
                <ButtonLogin/>
                <ButtonStarted/>
            </div>
        </TagHeader>
    )
}