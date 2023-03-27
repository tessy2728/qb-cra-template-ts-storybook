import React, { FC, useState, useRef, Ref, RefObject, useEffect } from "react";
import Button, { IButton } from "../component";
import {
    useLocation
} from "react-router-dom";
import ModalTooltip from '../../ModalTooltip';
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TelegramShareButton,
    TelegramIcon, TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon, LinkedinShareButton,
    LinkedinIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share'

interface IShareButton extends IButton {
    getShareData?: () => void;
}

const ShareButton: FC<IShareButton> = (props) => {
    const location = useLocation();
    const modalRef = useRef<HTMLInputElement>(null);
    const { className, variant = "contained", ...rest } = props;
    const [isModalOpen, toggleModal] = useState(false);
    const [shareData, setShareData] = useState({
        title: 'Evaluation Resource Centre',
        desc: 'Evaluation Resource Center',
        url: `${process.env.APP_BASE_URL}${location.pathname}`
    })


    const onClick = async () => {
        toggleModal(true);
        const shareInfo = (props.getShareData && props.getShareData()) ?? {
            title: 'Evaluation Resource Centre',
            desc: 'Evaluation Resource Center',
            url: `${process.env.APP_BASE_URL}${location.pathname}`
        };
        setShareData(shareInfo);
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current?.contains(event.target)) {
                toggleModal(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
    }, [])

    return (
        <>
            <Button
                title='SHARE'
                variant={variant}
                className={`ml-[1.25rem] !bg-primary-400 !px-[1.5rem] !py-[1.2rem] items-center flex ${className} hover:!bg-primary-600 hover:text-white`}
                startIcon={
                    <div className="relative h-[1.5rem] w-[1.5rem] ml-3" >
                        <img src={"/images/share.svg"} alt="Share Icon" />
                    </div>
                }
                onClick={onClick}
                {...rest}
            />
            <ModalTooltip isOpen={isModalOpen} title="Share Via" setOpen={toggleModal} ref={modalRef} isClosable={true} className="bottom-[73px] left-0 mob:left-auto mob:top-20 mob:bottom-auto" contentClassName=" w-full mob:w-96">
                <div className="grid grid-cols-5"> <FacebookShareButton
                    url={shareData.url}
                    quote={shareData.title}
                    title={shareData.title}
                    className="flex">
                    <div className="m-5">
                        <FacebookIcon size={32} round />
                    </div>
                </FacebookShareButton>
                    <WhatsappShareButton
                        url={shareData.url}
                        title={shareData.title}
                        separator=":: "
                    >
                        <div className="m-5">

                            <WhatsappIcon size={32} round />
                        </div>
                    </WhatsappShareButton>
                    <TwitterShareButton
                        url={shareData.url}
                        title={shareData.title}
                    >
                        <div className="m-5">
                            <TwitterIcon size={32} round />
                        </div>
                    </TwitterShareButton>
                    <TelegramShareButton
                        url={shareData.url}
                        title={shareData.title}
                    >
                        <div className="m-5">

                            <TelegramIcon size={32} round />
                        </div>
                    </TelegramShareButton>
                    <PinterestShareButton
                        url={shareData.url}
                        media={shareData.title}
                    >
                        <div className="m-5">

                            <PinterestIcon size={32} round />
                        </div>
                    </PinterestShareButton>
                    <EmailShareButton
                        url={shareData.url}
                        body={shareData.desc}
                        subject={shareData.title}
                    >
                        <div className="m-5">

                            <EmailIcon size={32} round />
                        </div>
                    </EmailShareButton>
                    <FacebookMessengerShareButton
                        url={shareData.url}
                        title={shareData.title}
                        appId={''}
                    >
                        <div className="m-5">
                            <FacebookMessengerIcon size={32} round />
                        </div>
                    </FacebookMessengerShareButton>
                    <LinkedinShareButton url={shareData.url}
                        title={shareData.title}>
                        <div className="m-5">

                            <LinkedinIcon size={32} round />
                        </div>
                    </LinkedinShareButton></div>
            </ModalTooltip>
        </>
    )
}

export default ShareButton;