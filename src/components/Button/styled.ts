import styled from "styled-components";

const ButtonStyled = styled.button<{ themeColor: string, theme: any }>`
    border-radius:20px;
    outline:none;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.025rem;
    &.contained {
        border:none;
        background-color: ${p => p.themeColor ? p.theme[p.themeColor] : p.theme.btnPrimary};
        color: white;
    }
    &.outlined {
        background-color: white;
        border-color: ${p => p.themeColor ? p.theme[p.themeColor] : p.theme.btnPrimary};
        color: ${p => p.themeColor ? p.theme[p.themeColor] : p.theme.btnPrimary};
    }
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

export {
    ButtonStyled
}