import  { styled }  from "styled-components"
import ArrowLeft from "../ArrowLeft"

const ButtonDiv = styled.div `
    display: inline-block;
    border-radius: var(--border-radius-btn-promo);
    background-color: var(--color-btn-promo2);
    position: relative;
    width: 250px;
    
`

const ButtonOne = styled.button `
    background-color: var(--color-btn-promo);
    padding: var(--padding-btn-promo);
    border-radius: var(--border-radius-btn-promo);
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;

    &:hover {
        width: 100%;
        position: absolute;
        transition: 2s ease-in;
    }

`

const ButtonTwo = styled.button `
    background-color: var(--color-btn-promo2);
    padding: var(--padding-btn-promo);
    border-radius: var(--border-radius-btn-promo);
    border: none;
    cursor: pointer;
   
`

export default function ButtonPromo() {
    return (
        <ButtonDiv>
            <ButtonOne>Save 90%</ButtonOne>
            <ButtonTwo>Get account of $59 <ArrowLeft/></ButtonTwo>
        </ButtonDiv>
    )
}