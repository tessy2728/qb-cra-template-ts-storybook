import React, { FC, HTMLProps, ReactNode } from "react";
import { ButtonStyled } from "./styled";

export interface IButton extends HTMLProps<HTMLButtonElement> {
    variant?: "contained" | "outlined",
    title?: string,
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    themeColor?: string
}

const Button: FC<IButton> = (props) => {
    const { variant, title, startIcon, endIcon, className, ...rest } = props;
    return (
        <ButtonStyled className={`${variant} ${className ?? ''}`} {...rest as any} ><i className="mr-[4px]">{startIcon}</i>  {title} {endIcon}</ButtonStyled>
    )
}

export default Button;