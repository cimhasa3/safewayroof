import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/logo.svg";
import Phone from "@/app/assets/phone.svg";
import Star from "@/app/assets/start.svg";
import Check from "@/app/assets/check.svg";

export default function HeroSection() {
  return (
    <div>
      <div className="#FFFFFF container mx-auto ">
        <div className="h-[90px] md:h-20 flex items-end md:pb-[6px] justify-between px-4 md:px-0">
          {/* Logo */}
          <div className="">
            <div className="hidden md:block">
              <Image src={Logo} height={95} width={290} alt="Roofing" />
            </div>
            <div className="md:hidden">
              <Image src={Logo} height={90} width={180} alt="Roofing" />
            </div>
          </div>
          <div className="bg-[#CC0000] flex px-4 md:px-5 py-2 md:py-2.5 gap-3 rounded-[5px]">
            <Image src={Phone} height={25} width={22} alt="" />
            <div className="font-bold text-[20px] md:text-[25px] text-white">
              Call Us
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className=" py-[94px] bg-[#FFF5F5] mt-[30px] card-shadow md:rounded-[20px] flex flex-col items-center">
          <h1 className="max-w-[553px] text-black text-[20px] md:text-[40px] font-bold text-center">
            TOP LOCAL ROOFING CONTRACTORS
          </h1>
          <div className="max-w-[520px] mt-[31px] text-[20px] md:text-[30px] font-semibold text-[#555] text-center">
  24-Hour Same-Day Roof Repairs Call Now: <a href="tel:8006456676">(800) 645-6676</a>
</div>

          <div className="bg-[#CC0000] flex px-[31px] py-[18px] gap-3 rounded-[5px] font-bold text-[25px] text-white mt-[30px]  md:px-5 md:py-2.5">
            SCHEDULE MY REPAIR
          </div>

          {/* Ratings */}
          <div className="flex mt-[25px] gap-[5px]">
            <Image width={34} height={30} src={Star} alt="start" />
            <Image width={34} height={30} src={Star} alt="start" />
            <Image width={34} height={30} src={Star} alt="start" />
            <Image width={34} height={30} src={Star} alt="start" />
            <Image width={34} height={30} src={Star} alt="start" />
          </div>

          {/* Featurs */}
          <div className="grid md:grid-cols-2 gap-[14px] md:gap-[28px] mt-[42px]">
            <div className="flex items-center gap-[15px] ">
              <Image height={30} width={30} src={Check} alt="Check" />
              <div className="text-[15px] md:text-[20px] font-medium">
                Same Day Appointments
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <Image height={30} width={30} src={Check} alt="Check" />
              <div className="text-[15px] md:text-[20px] font-medium">
                No-Obligation Free Estimates
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <Image height={30} width={30} src={Check} alt="Check" />
              <div className="text-[15px] md:text-[20px] font-medium">
                24-Hour Service 7 Days / Week
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <Image height={30} width={30} src={Check} alt="Check" />
              <div className="text-[15px] md:text-[20px] font-medium">
                Licensed & Insured Roofers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
