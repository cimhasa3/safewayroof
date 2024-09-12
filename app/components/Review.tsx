"use client";
import Image from "next/image";
import React from "react";
import Star from "@/app/assets/start.svg";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const ReviewCard = () => {
  return (
    <div className=" mr-10 md:mr-0 cursor-pointer">
      <div className="review-card pb-10 review-card rounded-[20px] p-5 m-5 mb-16 md:bg-white bg-[#FFF5F5] hover:bg-[#FFF5F5] w-full md:w-[390px]">
        {/* Head */}
        <div className="flex items-center">
          <Image src={"/user-1.png"} height={78} width={78} alt="" />
          <div className="ml-3">
            <div className="text-[25px] font-medium text-[#CC0000] italic">
              Michael M.
            </div>
            <div className="flex gap-1 mt-2">
              <Image src={Star} height={16} width={16} alt="" />
              <Image src={Star} height={16} width={16} alt="" />
              <Image src={Star} height={16} width={16} alt="" />
              <Image src={Star} height={16} width={16} alt="" />
              <Image src={Star} height={16} width={16} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-4 text-[20px] font-medium max-w-[244px]">
          Professional, Courteous & Fair Prices
        </div>

        <div className="mt-4">
          “Thanks Roof Match PRO for doing an amazing job replacing our roof.
          Your crew was professional, on time and courteous. The pricing was
          fair and the job was completed efficiently. Great service and friendly
          people!”
        </div>
      </div>
    </div>
  );
};

export default function Review() {
  return (
    <div className="pb-[60px] md:pb-[133px] container mx-auto  md:px-[60px]">
      <h2 className="text-[30px] md:text-[50px] font-medium px-4">
        Our Customer Review
      </h2>
      <div className="md:mt-6 mt-5">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={35}
            loop={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500, // 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
