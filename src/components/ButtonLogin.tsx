import  { styled }  from "styled-components"

const ButtonLog = styled.button `
    cursor: pointer;
    background-color: var(--color-bg-primary);
    border: none;
    padding: 16px;


    &:hover {
    background-color: var(--color-bg-secondary);
    font-weight: bold;
    border-radius: var(--border-radius-btn);
    transition: .5s ease-in-out;
    }   
    
    &:active {
    border: var(--color-txt-primary) solid 1px;
    
    }

`

export default function ButtonLogin() {
    return (
        <ButtonLog>Log in</ButtonLog>
    )
}