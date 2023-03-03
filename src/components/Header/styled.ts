import styled from "styled-components";
// import {colors} from '../../../hooks/tailwind/useTailwind';

interface ITag {
    bgColor: string;
    color: string;
    dotBgColor?: string;
}

const AppHeader = styled.header`
.App-logo {
    height: 30px;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
    // background-color: #282c34;
    background-color: ${p => p.theme.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: ${p => p.theme.headerText};
  
  .App-title {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`


export default AppHeader