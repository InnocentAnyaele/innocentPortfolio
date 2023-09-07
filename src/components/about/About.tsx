import Image from "next/image";
import profileImg from "/public/img/profile1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareBehance,
  faLinkedin,
  faSquareGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Nav() {
  return (
    <div className="flex flex-row flex-wrap items-center p-10 md:px-40 lg:px-40 md:justify-between lg:justify-between justify-center md:mt-10 lg:mt-10">
      <div className="flex flex-col text-white lg:w-2/5 h-[420px] justify-between mb-10 md:mb-0 lg:mb-0">
        <div>
          <p className="text-[28px]">Innocent Anyaele</p>
          <p className="text-[34px] font-bold">Software Engineer</p>
        </div>
        <div className="flex flex-col my-5 md:my-0 lg:my-0 space-y-5 md:space-y-4 lg:space-y-4">
          <p>
            Experienced in web & mobile development. When I’m not developing I enjoy writing and learning new stuff.
          </p>
          {/* <p>My stack includes</p> */}
          <p>
            ReactJS. NextJS. Express. Flask. Django. Flutter. Postgresql. MongoDB. 
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <a href="https://github.com/InnocentAnyaele">
            <FontAwesomeIcon icon={faSquareGithub} size="xl" />
          </a>
          <a href="https://www.linkedin.com/in/innocent-anyaele/">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="https://medium.com/@innocentanyaele">
            <FontAwesomeIcon icon={faMedium} size="xl" />
          </a>
          <a href="https://www.behance.net/innocentanyaele">
            <FontAwesomeIcon icon={faSquareBehance} size="xl" />
          </a>
        </div>
      </div>
      <Image
        className="mt-10 md:my-0 lg:my-0"
        src={profileImg}
        alt="Profile Image"
        width={400}
      />
    </div>
  );
}
