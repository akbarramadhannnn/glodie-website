import React, { useCallback } from "react";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import Gambar1 from "../../public/images/kecil 25.png";
import { useHideScrollBody } from "../../hooks";

const ModalView = styled.div`
  ${(props) =>
    props.isOpen
      ? tw`block flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black2 pl-10 pr-10 lg:pl-0 lg:pr-0`
      : tw`hidden`}
`;

const Modal = ({ isOpen, title, description, onClick = () => {}, btnText }) => {
  useHideScrollBody(isOpen);

  const handleClickModal = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <ModalView isOpen={isOpen}>
      <div className="border-0 rounded-xl shadow-lg relative flex flex-col h-28xl w-24xl lg:w-2/5 lg:h-30xl bg-white outline-none focus:outline-none">
        <div className="relative p-8 flex-auto flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="w-36 h-36 lg:w-40 lg:h-40 rounded-full"
              src={Gambar1}
              alt="Gambar1"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl text-purple1 font-bold text-center font-dynapuff">
            {title}
          </h1>

          <p className="text-center text-sm lg:text-lg text-purple1 font-dynapuff">
            {description}
          </p>

          <button
            className="justify-self-center text-white bg-purple1 font-dynapuff text-md lg:text-lg rounded-full w-full h-12"
            onClick={handleClickModal}
          >
            {btnText}
          </button>
        </div>
      </div>
    </ModalView>
  );
};

export default Modal;
