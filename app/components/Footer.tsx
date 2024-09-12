import Image from "next/image";
import React from "react";
import LogoFooter from "@/app/assets/logo-footer.svg";
import AngleRight from "@/app/assets/angle-right.svg";
import Link from "next/link";

interface NavLinkInterface {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkInterface) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-2">
        <Image src={AngleRight} height={30} width={11} alt="" />
        <div className="text-white font-medium text-[15px]">{children}</div>
      </div>
    </Link>
  );
};

export default function Footer() {
  return (
    <div className="bg-black pt-[50px] pb-[76px] px-[22px] px-0">
      <div className="container mx-auto">
        <div className="text-center text-[#C00] text-[25px] font-bold">
          24-Hour Roof
          <br />
          Repair
        </div>
        <div className="text-white text-center mt-[15px]">
          Same-Day Roof & Leak Repairs.
          <br />
          Call Now: (888) 393-0442
        </div>
        {/* menu */}
        <div className="flex justify-between flex-col md:flex-row mt-[50px] px-[22px] md:px-0">
          <div className="">
            <Image src={LogoFooter} height={44} width={73} alt="" />
            <div className="grid grid-cols-2 gap-[38px] md:gap-[46px]">
              <div className="mt-3 flex flex-col gap-3">
                <NavLink href="#">Contact Us</NavLink>
                <NavLink href="#">Terms Of Service</NavLink>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <NavLink href="#">About US</NavLink>
                <NavLink href="#">Privacy Policy</NavLink>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="">
            <h2 className="text-[#CC0000] text-[20px] font-bold">
              ROOF REPAIR
            </h2>
            <div className="grid grid-cols-2 gap-[38px] md:gap-[46px]">
              <div className="mt-3 flex flex-col gap-3">
                <NavLink href="#">Roof Repair</NavLink>
                <NavLink href="#">Roof Installation</NavLink>
                <NavLink href="#">Roof Replacement</NavLink>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <NavLink href="#">Roof Leak Repair</NavLink>
                <NavLink href="#">Roof Tarp Installation</NavLink>
                <NavLink href="#">Roof Flashing Repair</NavLink>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="">
            <h2 className="text-[#CC0000] text-[20px] font-bold">
              FLAT ROOFING
            </h2>
            <div className="grid grid-cols-2 gap-[38px] md:gap-[46px]">
              <div className="mt-3 flex flex-col gap-3">
                <NavLink href="#">Flat Roofing</NavLink>
                <NavLink href="#">Flat Roof Repair</NavLink>
                <NavLink href="#">Flat Roof</NavLink>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <NavLink href="#">Replacement</NavLink>
                <NavLink href="#">Flat Roof</NavLink>
                <NavLink href="#">Installation</NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <h2 className="text-center text-[#CC0000] mt-[50px] text-[25px] font-bold">
          Disclaimer
        </h2>
        <div className="text-[15px] mt-2.5 text-center text-white">
          ROOF MATCH PRO is a free service that helps users connect with local
          roofers. All contractors are independent and ROOF MATCH PRO does not
          warrant or guarantee any work performed. It is the responsibility of
          the user to verify that the contractor they hire has the necessary
          license and insurance required for the work being performed.
        </div>
      </div>
    </div>
  );
}
