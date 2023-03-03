import React, { FC, ReactNode } from "react";

interface ITextButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    children?: ReactNode | undefined;
    className?: string
}

const TextButton: FC<ITextButton> = (props) => {
    const { children, text, className, ...rest } = props;

    return (
        <button  className={`text-primary text-[14px] flex items-center justify-center ${className}`} {...rest} >
            {text}
            {children}
        </button>
    )
}

export default TextButton