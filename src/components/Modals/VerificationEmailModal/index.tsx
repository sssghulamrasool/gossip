import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Banner from "../../../assets/images/modal/banner.png";
import WelcomeGossip from "../WelcomeModel/Index";

const EmailModal = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [open, setOpen] = useState<boolean | null>(false);
  const onClickOpenModal = () => {
    if (!open) {
      props.onClickOpenModal();
    }
    setOpen(!open);
  };
  return (
    <>
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => props.onClickOpenModal()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-brandDark1 bg-opacity-80 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative shadow-3xshadow  transform overflow-hidden rounded-lg dark:bg-brandDark2 bg-white text-left  transition-all sm:my-8 ">
                  <div className="bg-brandDark2">
                    <div className="h-[181px]">
                      <Image
                        src={Banner}
                        className="max-w-[100&] h-full"
                        alt="banner logo"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col bg-bodycolor dark:bg-brandDark2 border-2 rounded-b-lg dark:border-r-brandLightOpacity10 dark:border-l-brandLightOpacity10 dark:border-b-brandLightOpacity10  dark:border-t-brandDark2">
                    <div className=" mw-sm:pl-10 mw-sm:pr-10 pl-40 pr-40  mb-9">
                      <div className="flex flex-col items-center  mt-126px pb-10">
                        <p className="text-brandDark2 dark:text-brandLightOpacity100 text-2xl montserratfont not-italic font-bold pb-6 mw-sm:text-lg ">
                          
                          Email Sent
                        </p>
                        <p className="montserratfont text-brandDark2  dark:opacity-100 dark:text-brandLightOpacity70 not-italic text-base mw-sm:text-[14px]">
                          We have sent a verification link to
                        </p>
                        <span className="font-semibold text-brandDark2 dark:text-brandLightOpacity100">
                          abc@xyz.com.
                        </span>
                        <p className="montserratfont pt-3  f_it text-brandDark2  dark:text-brandLightOpacity70 text-xs mw-sm:text-[10px]">
                          This may sometimes go to your spam folder.
                        </p>
                      </div>

                      <div className="flex flex-col items-center ">
                        <button
                          onClick={() => onClickOpenModal()}
                          className="bg-brand mw-sm:w-60  mw-sm:text-sm w-300px  hover:bg-[#ec5d5f] h-12 text-white rounded-3xl montserratfont text-lg font-bold"
                        >
                          OK
                        </button>
                        <p className="pt-3 pl-1.5 underline pb-48 font-medium montserratfont text-brandDark2  dark:text-brandLightOpacity70 text-xs">
                          Re-send email
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <WelcomeGossip open={open} onClickOpenModal={onClickOpenModal} />
    </>
  );
};

export default EmailModal;
