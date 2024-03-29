import React, { MouseEventHandler, useState, useEffect } from 'react'
import { TooltipWrapper } from './styled';

interface IModal {
  title?: string;
  desc?: string;
  buttonList?: Array<IButton>,
  children: any;
  isOpen: boolean;
  setOpen: (e: boolean) => void;
  className?: string;
  contentClassName?: string;
  isClosable?: boolean;
}
interface IButton {
  title: string;
  onClick: MouseEventHandler;
}

const ModalTooltip = React.forwardRef((props: IModal, ref: any) => {
  const [isOpen, setIsOpen] = useState(props.isOpen)

  const { title, desc, buttonList, isClosable, className } = props
  const toggleModal = (flag: boolean) => {
    setIsOpen(flag);
    props.setOpen(flag);
  }

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen])

  return (
    <TooltipWrapper ref={ref} className={`${isOpen ? 'flex' : 'hidden'} items-center justify-center ${className}`}>
      <div className={`flex flex-col py-8 px-[3.2rem] relative ${props.contentClassName}`}>
        <main>
          <div className="flex items-center justify-between">
            {title && <header className="text-gray-700 text-[1.6rem] border-b-[1px] border-gray pb-[1.2rem]">{title}</header>}
            {isClosable && <span onClick={() => toggleModal(false)} className="font-bold text-gray-700 rounded-full bg-white-fa flex items-center justify-center text-[1.6rem] absolute right-[2.4rem]" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="closeIcon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>}
          </div><p >
            {desc}
          </p>
          {props.children}
          {buttonList?.map((button: IButton) => <button onClick={button.onClick} key={`button-${button.title}`}>{button.title}</button>)}

        </main>
      </div>
    </TooltipWrapper>
  )
})
ModalTooltip.displayName = 'ModalTooltip';

export default ModalTooltip;