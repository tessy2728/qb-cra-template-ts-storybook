import styled from "styled-components";

const ButtonStyled = styled.button`
    border-radius:20px;
    outline:none;
    padding: 0.938rem 2.313rem 0.938rem 2.375rem;
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.025rem;
    &.contained {
        border:none;
        background-color: ${p => p.theme.primary};
        color: white;
    }
    &.outlined {
        background-color: white;
        border-color: ${p => p.theme.primary};
        color: ${p => p.theme.primary};
    }
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

export {
    ButtonStyled
}