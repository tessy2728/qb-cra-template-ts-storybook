import React from 'react';
import StyledTag from './styled';

const Tag = (props: any) => {
    return <StyledTag className={`whitespace-nowrap font-bold xl:text-[1.4rem] text-[1.1rem] ${props.wrapperClassName}`} {...props}>
        {props.isDotted && <div className={`h-[0.75rem] w-[0.75rem] rounded-full hidden md:block bgDot mr-[4px]`}></div>}{props.value}</StyledTag>
}
export default Tag;