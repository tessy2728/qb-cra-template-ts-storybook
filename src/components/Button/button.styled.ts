import styled from "styled-components";
import { colors } from "../../../hooks/tailwind/useTailwind";

const ButtonStyled = styled.div`
    .contained{
        padding: 0.938rem 2.313rem 0.938rem 2.375rem;
        background-color: ${colors?.primary["DEFAULT"]};
        font-size: 1.6rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.025rem;
        color: ${colors?.white["DEFAULT"]};
        @media(min-width:1200px) and (max-width:1300px) {
            font-size: 1.2rem;
          }
    }
`;

export {
    ButtonStyled
}