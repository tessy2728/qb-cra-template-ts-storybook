import styled from 'styled-components';

const Breadcrumb = styled.nav`
&.breadcrumb-wrapper {
    text-transform: uppercase;
    letter-spacing: 0.4px;
}

.breadcrumb-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 auto;
  flex-shrink: 1000;
  display: inline-block;
  border-bottom: 1px solid transparent;
  position: relative;
  &:hover {
    flex: 0 0 auto;
    opacity: 1;
    opacity: 1;
    transition: transform ease-in-out .4s;
    
    ~ .single-breadcrumb-wrap {
      transition: transform ease-in-out .4s;
    }
  }
  
  //First Breadcrumb
  &:first-child {
    flex: 0 0 auto;
    flex-shrink: 0.5;
    opacity: 1;
    
    &:after {
      left: 0;
    }
  }
  
  
//Last Breadcrumb
&:last-child {
    &:hover {
      transform: translateY(0);
      &:after {
        display: none;
      }
    }
  }
  
}

//Underline effect
.breadcrumb-wrap:after {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 28px;
    top: 36px;
    width: 100%;
    height: 1px;
    transform: scale3d(0,1,1);
    background: black;
    transform-origin: 0% 50%;
    transition: transform ease-in-out .15s .10s,
    opacity ease-in-out .25s;
    opacity: .5;
}

//hover effect
.breadcrumb-wrap:hover:after {
    transform: scale3d(1,1,1);
    opacity: 1;
    transition: opacity ease-in-out .1s, transform ease-in-out .2s;
}

.breadcrumb {
  flex: 0 1 auto;
}

.sep {
  transition: transform ease-in-out .2s;
}
`;

export {Breadcrumb}; 