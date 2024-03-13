import { writingData } from "../../../public/siteInformation/writing/WritingData";

export default function Writing() {
  return (
    <div className="flex flex-col p-10">
      <div className="text-[#222438] bg-white text-center w-20 h-7 justify-center">
        <span className="text-sm font-bold">Writing</span>
      </div>
      <div className="flex flex-row overflow-x-auto h-70 w-full pt-5 items-start">
        {writingData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between border-r px-5 min-w-[300px]"
          >
            <a href={`${item.link}`}>
              <p className="text-sm text-[#cccccc] hover:underline h-[50px]">
                {item.subTitle.toLowerCase()}
              </p>
            </a>
            <a href={`${item.link}`}>
              <span className="text-white hover:underline pt-2">
                {item.title}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
