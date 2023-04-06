import Image from "next/image";
import { designData } from "../../../public/siteInformation/design/DesignData";

export default function Designs() {
  return (
    <div className="flex flex-col p-10 space-y-10">
      <span className="text-sm font-bold text-[#222438] bg-white text-center w-20 p-2">
        Design
      </span>
      <div className="flex flex-col space-y-10 p-5 md:p-20 lg:p-20 h-[100vh] overflow-y-auto ">
        {designData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap space-x-0 md:space-x-10 lg:space-x-10"
          >
            <div className="min-w-[600px]">
              <Image
                className="mt-10 md:my-0 lg:my-0"
                src={item.img}
                alt="Profile Image"
                width={item.type === "Mobile" ? 300 : 600}
              />
            </div>
            <div className="flex flex-col text-white space-y-4 my-10 md:my-0 lg:my-0">
              <span className="text-sm text-[#222438] font-bold bg-white w-[200px] p-2 text-center">
                {item.name}
              </span>
              <p>{item.description}</p>
              <p className="text-sm">{item.technology}</p>
              <p className="underline text-sm text-[#cccccc]">
                <a href={`${item.viewLink}`}>View Design</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
