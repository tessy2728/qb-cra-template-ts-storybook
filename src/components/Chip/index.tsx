import React from 'react';
import StyledChip from './styled';

const Chip = (props: any) => {
    return <StyledChip className={`whitespace-nowrap font-bold xl:text-[1.4rem] text-[1.1rem] mr-[4px] ${props.wrapperClassName}`} {...props}>
        {props.isDotted && <div className={`h-[0.75rem] w-[0.75rem] rounded-full hidden md:block bgDot mr-[4px]`}></div>}{props.value}</StyledChip>
}
export default Chip;