import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: absolute;
    left:0;
    z-index:10;
    background: #fafafa;
    overflow-y: auto; 
    padding:5px;
    .closeIcon {
        width:1.66rem;
        height: 1.66rem;
    }
`