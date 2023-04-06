import { writingData } from "../../../public/siteInformation/writing/WritingData";

export default function Writing() {
  return (
    <div className="flex flex-col p-10">
      <div className="text-[#222438] bg-white text-center w-20 h-7 justify-center">
        <span className="text-sm font-bold">Writing</span>
      </div>
      <div className="flex flex-row overflow-x-auto my-10">
        {writingData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between space-y-5 border-r px-5"
          >
            <a href={`${item.link}`}>
              <p className="text-white hover:underline font-bold">
                {item.title}
              </p>
            </a>
            <a href={`${item.link}`}>
              <p className="text-sm text-[#cccccc] hover:underline">
                {item.subTitle}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
