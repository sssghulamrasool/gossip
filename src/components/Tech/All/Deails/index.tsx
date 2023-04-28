import SectionSaprator from "@/components/SecSaprator";
import React from "react";
import review1 from "../../../../assets/tech/deal-1.png";
import review2 from "../../../../assets/tech/deal-2.png";
import review3 from "../../../../assets/tech/deal-3.png";
import review4 from "../../../../assets/tech/deal-4.png";
import deailamazon from "../../../../assets/tech/deal-amazon.png";
import bookmark from "../../../../assets/tech/bookmark.png";
import Image from "next/image";
const AllDeail = () => {
  const imagesList = [review1, review2, review3, review4];
  return (
    <>
      <div className="global-section-width ">
        <div className="pt-12 mw-lg:pt-7 mw-sm:pt-[16px]">
          <SectionSaprator title="Deals" />
        </div>
        <div className="2xl:container pb-12">
          <div className="flex mw-xl:w-full justify-between  mw-md:flex-wrap">
            {imagesList.map((elem, index) => {
              return (
                <div
                  className={
                    "max-w-[300px] mx-14:max-w-[24%] w-full mw-md:max-w-[48%]   "
                  }
                  key={index}
                >
                  <div className="img-wrapper w-full  h-[236px]  mw-xl:h-[210px] mw-lg:h-fit mw-sm3:h-[150px]	 rounded relative">
                    <Image src={elem} alt="hello" className="w-full h-full" />
                    {index === 0 ? (
                      <div className="picked bg-arrowicon bg-brand text-brandLightOpacity100 montserratfont font-bold text-base leading-5 text-center w-[148px] h-[40px] flex items-center justify-center rounded-r absolute left-0 top-[8px] mw-sm:h-auto	 mw-sm:w-auto mw-sm:p-1 mw-sm:text-[12px]">
                        AMAZON DEALS
                      </div>
                    ) : null}
                    {index === 0 ? (
                      <div className="review w-[40px] h-[40px] mw-sm:w-[35px] mw-sm:h-[35px] bg-brand flex justify-center items-center rounded-[50px] absolute top-[8px] right-[8px]">
                        <span className="montserratfont font-bold text-lg leading-[22px] text-brandLightOpacity100">
                          <Image src={deailamazon} alt="amazol deail" />
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="description flex justify-between pt-3 ">
                    <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 mw-lg:text-[15px] mw-sm:text-sm mw-sm:leading-[17px] deail-tab-com-title">
                      Check out the Great Indian Amazon Sale this month
                    </h4>
                    <div className="mw-md:hidden">
                      <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                        <Image
                          src={bookmark}
                          alt=""
                          className=" brightness-0  dark:brightness-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="tags flex pt-3.5 pb-3 montserratfont">
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                        News
                      </div>
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10    hover:text-brandDark2 dark:hover:bg-brandLightOpacity20    dark:hover:text-brandLightOpacity100    dark:text-brandLightOpacity70">
                        Esports
                      </div>
                    </div>
                    <div className="hidden mw-md:block">
                      <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                        <Image
                          src={bookmark}
                          alt=""
                          className=" brightness-0  dark:brightness-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex pt-2">
            <div className="w-full">
              <a
                href="#"
                className="hover:text-[#000000] dark:hover:text-[white] text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5"
              >
                View more <span>&gt;</span>
                <span>&gt;</span>
                <span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDeail;
