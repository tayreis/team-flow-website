"use client"

import  { styled }  from "styled-components"
import Benefits from "../Benefits/Benefits";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Numbers from "../Numbers/Numbers";
import Testimonials from "../Testimonials/Testimonials";


const StyledMain = styled.main `
   width: 100%;
   height: 100vh;
`

export default function Main() {
    return (
        <StyledMain>
            <Hero/>
            <Benefits/>
            <Features/>
            <Numbers/>
            <Testimonials/>
        </StyledMain>
    )
}