import React from "react";

export default function ExploringRoofing() {
  return (
    <div className="container mx-auto px-4 md:px-[60px]">
      <h2 className="text-[30px] md:text-[50px] font-medium">
        Exploring Roofing Options for Your Home?
      </h2>
      <div className="mt-6 text-[20px] md:text-[25px] text-[#666]">
        Deciding on installing a new roof or replacing an old one requires
        careful consideration of various roof structures. Each type not only
        serves a distinct purpose but also offers specific benefits and
        potential drawbacks, depending on the weather conditions in your area
        and the architectural style of your home. Here’s a brief overview of the
        roof types you might consider:
      </div>

      <div className="grid md:grid-cols-3 mt-6 gap-5">
        <div className="col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-[35px] w-[35px] bg-[#C00] flex justify-center items-center text-[20px] font-[900] text-white rounded-full">
              1
            </div>
            <div className="text-[25px] font-medium">Gable Roofs:</div>
          </div>
          <div className="mt-2 text-[#555] text-[20px]">
            A classic design known for its triangular shape, offering excellent
            rain and snow shedding capabilities.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-[35px] w-[35px] bg-[#C00] flex justify-center items-center text-[20px] font-[900] text-white rounded-full">
              2
            </div>
            <div className="text-[25px] font-medium">Hip Roofs:</div>
          </div>
          <div className="mt-2 text-[#555] text-[20px]">
            Features slopes on all four sides that come together at the top,
            providing stability and resistance to high winds.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-[35px] w-[35px] bg-[#C00] flex justify-center items-center text-[20px] font-[900] text-white rounded-full">
              3
            </div>
            <div className="text-[25px] font-medium">Gambrel Roofs:</div>
          </div>
          <div className="mt-2 text-[#555] text-[20px]">
            Recognizable by their two-sided slope, gambrel roofs offer extra
            living space, resembling a barn-style.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-[35px] w-[35px] bg-[#C00] flex justify-center items-center text-[20px] font-[900] text-white rounded-full">
              4
            </div>
            <div className="text-[25px] font-medium">Dutch Roofs:</div>
          </div>
          <div className="mt-2 text-[#555] text-[20px]">
            A hybrid between gable and hip roofs, combining the benefits of both
            designs for a unique aesthetic and functional advantage.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-[35px] w-[35px] bg-[#C00] flex justify-center items-center text-[20px] font-[900] text-white rounded-full">
              5
            </div>
            <div className="text-[25px] font-medium">Flat Roofs:</div>
          </div>
          <div className="mt-2 text-[#555] text-[20px]">
            Ideal for modern homes, flat roofs provide space for rooftop gardens
            or solar panels, though they require diligent maintenance for water
            drainage.
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="h-[35px] w-[35px] bg-[#C00] flex justify-center items-center text-[20px] font-[900] text-white rounded-full">
              6
            </div>
            <div className="text-[25px] font-medium">Mansard Roofs:</div>
          </div>
          <div className="mt-2 text-[#555] text-[20px]">
            A French-inspired design with four double sloped sides, allowing for
            additional living or storage space in the attic.
          </div>
        </div>
      </div>
    </div>
  );
}
