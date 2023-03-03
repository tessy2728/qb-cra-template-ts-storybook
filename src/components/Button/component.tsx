import React, { FC, HTMLProps, ReactNode } from "react";
import { ButtonStyled } from "./styled";

export interface IButton extends HTMLProps<HTMLButtonElement> {
    variant?: "contained" | "outlined",
    title?: string,
    startIcon?: ReactNode,
    endIcon?: ReactNode,
}

const Button: FC<IButton> = (props) => {
    const { variant, title, startIcon, endIcon, className, ...rest } = props;
    return (
        <ButtonStyled className={`${variant} ${className ?? ''}`} {...rest as any} >{startIcon}  {title} {endIcon}</ButtonStyled>
    )
}

export default Button;