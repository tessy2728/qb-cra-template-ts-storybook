import React, { FC } from "react";
import Button, { IButton } from "../button";

interface IPrintButton extends IButton {

}

const PrintButton: FC<IPrintButton> = (props) => {
    const { className, variant = "contained", ...rest } = props;

    return (
        <Button
            title='PRINT'
            variant={variant}
            className={`ml-[1.25rem] !bg-red  !px-[1.5rem] !py-[1.2rem] items-center flex ${className}`}
            endIcon={
                <div className="relative h-[1.6rem] w-[1.6rem] ml-3" >
                    <img src={"/images/print.svg"} alt="PrintButton" />
                </div>
            }
            {...rest}
        />
    )
}

export default PrintButton;