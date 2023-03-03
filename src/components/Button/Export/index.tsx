import React, { FC } from "react";
import Button, { IButton } from "../component";

interface IExportButton extends IButton {

}

const ExportButton: FC<IExportButton> = (props) => {
    const { className, variant = "contained", ...rest } = props;

    return (
        <Button
            title='EXPORT'
            variant={variant}
            className={`ml-[1.25rem] !bg-red-border !px-[1.5rem] !py-[1.2rem] items-center flex hover:!bg-orange-dark ${className}`}
            endIcon={
                <div className="relative h-[1.5rem] w-[1.5rem] ml-3" >
                    <img src={"/images/export.svg"} alt="ExportButton" />
                </div>
            }
            {...rest}
        />
    )
}

export default ExportButton;