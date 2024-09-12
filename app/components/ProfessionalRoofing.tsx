import Image from "next/image";
import React from "react";
import RoofInspections from "@/app/assets/roof-inspections.svg";
import RoofInstallation from "@/app/assets/roof-installation.svg";
import RoofLeakRepairs from "@/app/assets/roof-leak-repairs.svg";
import RoofMaintenance from "@/app/assets/roof-maintenance.svg";
import RoofRepairs from "@/app/assets/roof-repair.svg";
import RoofReplacement from "@/app/assets/roof-replacement.svg";
import Phone from "@/app/assets/phone.svg";

export default function ProfessionalRoofing() {
  return (
    <div className="container mx-auto px-4 md:px-[60px] mt-[50px] md:mt-[130px] mb-20">
      <div className="grid md:grid-cols-2 gap-[30px]">
        <div className="col-span-1">
          <h2 className="text-[30px] md:text-[50px] leading-[40px] md:leading-[60px] font-medium">
            Professional Roofing Solutions:
          </h2>
          <p className="mt-6 text-[#555] text-[20px] md:text-[25px]">
            When you’re searching for a reliable roofing specialist in your
            vicinity, look no further! Our team of roofing professionals is here
            to assist you with a wide range of services.
          </p>
          <div className="grid md:grid-cols-2 mt-[28px] gap-[22px]">
            <div className="col-span-1 flex gap-2.5">
              <div className="hidden md:block">
                <Image
                  src={RoofRepairs}
                  height={20}
                  width={20}
                  alt="Roof Repair"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={RoofRepairs}
                  height={30}
                  width={30}
                  alt="Roof Repair"
                />
              </div>
              <div className="text-[22px] md:text-[25px] leading-[25px] font-medium">
                Roof Repair
              </div>
            </div>
            <div className="col-span-1 flex gap-2.5">
              <div className="hidden md:block">
                <Image
                  src={RoofReplacement}
                  height={20}
                  width={20}
                  alt="Roof Repair"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={RoofReplacement}
                  height={30}
                  width={30}
                  alt="Roof Repair"
                />
              </div>
              <div className="text-[22px] md:text-[25px] leading-[25px] font-medium">
                Roof Replacement
              </div>
            </div>
            <div className="col-span-1 flex gap-2.5">
              <div className="hidden md:block">
                <Image
                  src={RoofInspections}
                  height={20}
                  width={20}
                  alt="Roof Repair"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={RoofInspections}
                  height={30}
                  width={30}
                  alt="Roof Repair"
                />
              </div>
              <div className="text-[22px] md:text-[25px] leading-[25px] font-medium">
                Roof Inspections
              </div>
            </div>
            <div className="col-span-1 flex gap-2.5">
              <div className="hidden md:block">
                <Image
                  src={RoofLeakRepairs}
                  height={20}
                  width={20}
                  alt="Roof Repair"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={RoofLeakRepairs}
                  height={30}
                  width={30}
                  alt="Roof Repair"
                />
              </div>
              <div className="text-[22px] md:text-[25px] leading-[25px] font-medium">
                Roof Leak Repairs
              </div>
            </div>
            <div className="col-span-1 flex gap-2.5">
              <div className="hidden md:block">
                <Image
                  src={RoofInstallation}
                  height={20}
                  width={20}
                  alt="Roof Repair"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={RoofInstallation}
                  height={30}
                  width={30}
                  alt="Roof Repair"
                />
              </div>
              <div className="text-[22px] md:text-[25px] leading-[25px] font-medium">
                Roof Installation
              </div>
            </div>
            <div className="col-span-1 flex gap-2.5">
              <div className="hidden md:block">
                <Image
                  src={RoofMaintenance}
                  height={20}
                  width={20}
                  alt="Roof Repair"
                />
              </div>
              <div className="md:hidden">
                <Image
                  src={RoofMaintenance}
                  height={30}
                  width={30}
                  alt="Roof Repair"
                />
              </div>
              <div className="text-[22px] md:text-[25px] leading-[25px] font-medium">
                Roof Maintenance
              </div>
            </div>
          </div>

          <div className="flex mt-[36px] md:justify-between md:items-center flex-col md:flex-row justify-start items-start">
            <div className="">
              <div className="text-[25px] text-[#C00]">
                Experiencing Roof Issues? 
              </div>
              <div className="text-[25px]">We’ve Got You Covered!</div>
            </div>
            <div className="mt-5 md:mt-0">
              <div className="bg-[#CC0000] flex px-5 py-2.5 gap-3 rounded-[5px]">
                <Image src={Phone} height={25} width={22} alt="" />
                <div className="font-bold text-[25px] text-white">
                  (800) 645-6676
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/image1.png)" }}
          className="bg-cover bg-no-repeat bg-center rounded-lg overflow-hidden h-[400px] md:h-auto"
        ></div>
      </div>
    </div>
  );
}
