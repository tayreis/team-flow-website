import  { styled }  from "styled-components"

const Button = styled.button `
    background-color: var(--color-btn-get-started);
    padding: 16px 23px;
    border: none;
    border-radius: var(--border-radius-btn);
    color: var(--color-btn);
    font-weight: bold;
    cursor: pointer;

    &:hover  {
        background-color: var(--color-btn);
        color: var(--color-btn-get-started);
        transition: .5s ease-in-out;
    }

    &:active {
    border: var(--color-txt-primary) solid 1px;

    
    }
`

export default function ButtonStarted() {
    return (
        <Button>Get started free</Button>
    )
}