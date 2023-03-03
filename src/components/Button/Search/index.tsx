import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import ModalTooltip from '../../ModalTooltip';
import SearchInput from '../../Search';
import { useRouter } from 'next/router';

interface ISearchButton {
  getShareData?: Function;
}

const Search: FC<ISearchButton> = (props) => {
  const modalRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, toggleModal] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const router = useRouter();

  const onChange = (e: any) => {
    setSearchKey(e.target.value);
  }

  const onClick = async () => {
    toggleModal(!isModalOpen);
  }

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/evaluation/search?keyword=${searchKey}`);
      toggleModal(!isModalOpen);
      setSearchKey('');
    }
  }
  return <div className="relative"><div className='h-[2.4rem] w-[2.4rem] relative ml-[2.4rem]' onClick={onClick}>
    <Image
      alt='Search'
      src="/images/blue-search-icon.svg"
      layout='fill'
      objectFit='contain'
    />
  </div>
    <ModalTooltip isOpen={isModalOpen} setOpen={toggleModal} ref={modalRef} className="top-[8.5rem] backdrop-blur-transparent z-50" contentClassName="w-full">
      <SearchInput placeHolder="Search Keyword" value={searchKey} onChange={onChange} className="w-[400px]" wrapperClassName="!w-full" onKeyPress={onKeyPress} />
    </ModalTooltip>
  </div>
}

export default Search;