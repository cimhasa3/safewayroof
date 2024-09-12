import React from "react";
import Transparent from "@/app/assets/transparent.svg";
import Prompt from "@/app/assets/prompt.svg";
import Certified from "@/app/assets/certified.svg";
import Satisfaction from "@/app/assets/satisfaction.svg";
import Competitive from "@/app/assets/competitive.svg";
import HighQuality from "@/app/assets/high-quality.svg";
import Respect from "@/app/assets/respect.svg";
import NoShortcut from "@/app/assets/no-shortcut.svg";
import Image from "next/image";
import Phone from "@/app/assets/phone.svg";

export default function WhyChoose() {
  return (
    <div className="mb-[60px] md:mb-[130px] container mx-auto px-4 md:px-[60px] mt-[60px] md:mt-[130px]">
      <h2 className="text-[30px] md:text-[50px] font-[500]">
        Why Choose Roof Match Pro?
      </h2>
      <div className="mt-6 text-[20px] md:text-[25px] text-[#555]">
        At Roof Match Pro, our dedication to excellence, competitive pricing,
        and meticulous attention to every detail set us apart from the
        competition. Our clients choose us for their roofing needs for several
        compelling reasons:
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mt-[50px]">
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={Transparent} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">
              Transparent, Up-Front Quotes:
            </div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            We believe in honesty and clarity from the start, ensuring you fully
            understand the scope and cost of your project.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={Prompt} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">Prompt Service: </div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            Offering same or next-day service to address your roofing needs
            without delay.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={Certified} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">
              Certified & Licensed Contractors:
            </div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            Our team comprises only fully certified and licensed professionals,
            guaranteeing top-tier expertise and craftsmanship.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={Satisfaction} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">
              100% Satisfaction Guarantee:
            </div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            Your peace of mind is our priority. We stand behind our work with a
            steadfast commitment to your satisfaction.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={Competitive} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">Competitive Pricing:</div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            We’re committed to providing exceptional value, ensuring our prices
            are always fair and affordable.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={HighQuality} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">
              High-Quality Products & Materials:
            </div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            We use only the most reliable, durable products and materials for
            lasting results.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={Respect} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">
              Respect for Your Time:
            </div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            Our professionals value your time, ensuring efficient and timely
            project completion without sacrificing quality.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex md:items-center gap-[5px] md:gap-5 flex-col md:flex-row">
            <Image src={NoShortcut} height={40} width={40} alt="" />
            <div className="text-[25px] font-medium">No Shortcuts:</div>
          </div>
          <div className="md:mt-5 mt-2.5 md:text-[20px] text-[#555]">
            Integrity is at our core. We promise a thorough job without cutting
            corners, ensuring your roof’s longevity and performance.
          </div>
        </div>
      </div>
      <div className="flex md:justify-center mt-[44px]">
        <div className="bg-[#CC0000] flex px-5 py-2.5 gap-3 rounded-[5px]">
          <Image src={Phone} height={25} width={22} alt="" />
          <div className="font-bold text-[25px] text-white">(800) 645-6676</div>
        </div>
      </div>
    </div>
  );
}
