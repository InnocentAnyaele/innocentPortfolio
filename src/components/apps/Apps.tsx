import { appsData } from "../../../public/siteInformation/apps/AppsData";
import Image from "next/image";

export default function Apps() {
  return (
    <section className="flex flex-col p-10 space-y-10">
      <span className="text-sm font-bold text-[#222438] bg-white text-center w-20 p-2">
        Apps
      </span>
      <div className="flex flex-col space-y-10 p-5 md:p-20 lg:p-20 h-[100vh] overflow-y-auto ">
        {appsData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap space-x-0 md:space-x-10 lg:space-x-10"
          >
            <Image
              className="mt-10 md:my-0 lg:my-0"
              src={item.img}
              alt="Profile Image"
              width={600}
            />
            <div className="flex flex-col text-white space-y-4 my-10 md:my-0 lg:my-0">
              <span className="text-sm text-[#222438] font-bold bg-white w-[200px] p-2 text-center">
                {item.name}
              </span>
              <p>{item.description}</p>
              <p className="text-sm">{item.technology}</p>
              <p className="underline text-sm text-[#cccccc]">
                <a href={`${item.githubLink}`}>Link to Github</a>
              </p>
              <p className="underline text-sm text-[#cccccc]">
                <a href={`${item.appLink}`}>Link to App</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
