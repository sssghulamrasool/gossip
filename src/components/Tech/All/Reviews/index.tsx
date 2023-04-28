import Image from "next/image";
import React from "react";
import review1 from "../../../../assets/tech/reviews-01.png";
import review2 from "../../../../assets/tech/reviews-02.png";
import review3 from "../../../../assets/tech/reviews-03.png";
import review4 from "../../../../assets/tech/reviews-04.png";
import SectionSaprator from "@/components/SecSaprator";
import bookmark from "../../../../assets/tech/bookmark.png";
const AllReviews = () => {
  const imagesList = [review1, review2, review3, review4];
  return (
    <div className="global-section-width  ">
      <div className="pt-12 mw-lg:pt-7 mw-sm:pt-[16px]">
        <SectionSaprator title="Reviews" />
      </div>
      <div className="2xl:container">
        <div className="flex mw-xl:w-full mw-12:justify-between  mw-md:flex-wrap">
          {imagesList.map((elem, index) => {
            return (
              <div
                className={`w-[270px] mw-md:w-[48%]    ${
                  index === 3 ? "mr-0" : "mr-[40px] mw-xl:mr-[25px] mw-md:mr-0"
                }`}
                key={index}
              >
                <div className="img-wrapper  h-[305px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[auto] rounded relative">
                  <Image src={elem} alt="hello" className="w-full h-full" />

                  {index === 1 ? (
                    <div className="picked  bg-brand text-brandLightOpacity100 montserratfont font-bold text-base leading-5 text-center w-[148px] h-[40px] flex items-center justify-center rounded-r absolute left-0 top-[18px]	mw-sm:text-sm ">
                      EDITOR&#39;S PICK
                    </div>
                  ) : null}

                  <div className="review w-[60px] h-[60px] bg bg-brand flex justify-center items-center rounded-[50px] absolute top-[8px] right-[8px] mw-sm:w-[50px] mw-sm:h-[50px]">
                    <span className="montserratfont font-bold text-lg leading-[22px] text-brandLightOpacity100 mw-sm:text-sm ">
                      {index === 0 ? "4.5/5" : "4/5"}
                    </span>
                  </div>
                </div>
                <div className="description flex justify-between pt-3 ">
                  <h4 className="deail-tab-com-title text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 mw-sm:text-sm	mw-sm:leading-[17px]">
                    Check out the Great Indian Amazon Sale this month
                  </h4>
                  <div className="mw-md:hidden">
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                      <Image
                        src={bookmark}
                        alt=""
                        className=" brightness-0 dark:brightness-200"
                      />
                    </div>
                  </div>
                </div>
                <div className="mw-md:flex mw-md:items-center mw-md:justify-between">
                  <div className="flex py-4 montserratfont">
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      News
                    </div>
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      Esports
                    </div>
                  </div>
                  <div className="hidden mw-md:block">
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                      <Image
                        src={bookmark}
                        alt=""
                        className=" brightness-0 dark:brightness-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="2xl:container">
        <div className="flex pt-2">
          <div className="w-full">
            <a
              href="#"
              className="hover:text-[#000000] dark:hover:text-[white] text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5 mw-sm3:text-[10px]"
            >
              View more <span>&gt;</span>
              <span>&gt;</span>
              <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
