import styled from "styled-components";
// import {colors} from '../../../hooks/tailwind/useTailwind';

interface IChip {
    bgColor: string;
    color: string;
    dotBgColor?: string;
}

const Chip = styled.span<IChip>`
    margin: 0 0 1px;
    border-radius: 1.4rem;
    background-color: ${p => p.bgColor ? p.bgColor : '#ffe17e'};
    min-width:9.2rem;
    height:2.7rem;
    width: fit-content;
    padding: 10px;
    text-align: center;
    color: ${p => p.color ? p.color : '#000'};
    .bgDot {
        background-color: ${p => p.dotBgColor ? p.dotBgColor : '#ffe17e'};
    }`


export default Chip