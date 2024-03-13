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
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-10 md:px-40 lg:px-40 md:mt-10 lg:mt-10">
      <div className="flex flex-col text-white lg:w-2/5 md:mr-10">
        <div className="mb-5">
          <p className="text-4xl font-bold mb-2">Innocent Anyaele</p>
          <p className="text-xl font-semibold">Software Engineer</p>
        </div>
        <div className="mb-5">
          <p className="mb-3">
            I love technology. I solve problems. I develop software.
          </p>
          <p>
            Experienced in web & mobile development. When I’m not developing I enjoy writing and learning new stuff.
          </p>
        </div>
        <div className="flex space-x-4">
          <SocialLink href="https://linktr.ee/_innocent" icon={faGlobe} />
          <SocialLink href="https://github.com/InnocentAnyaele" icon={faSquareGithub} />
          <SocialLink href="https://www.linkedin.com/in/innocent-anyaele/" icon={faLinkedin} />
          <SocialLink href="https://medium.com/@innocentanyaele" icon={faMedium} />
          <SocialLink href="https://www.behance.net/innocentanyaele" icon={faSquareBehance} />
        </div>
      </div>
      <div className="mt-10 md:mt-0 lg:mt-0">
        <Image src={profileImg} alt="Profile Image" width={400} height={400} />
      </div>
    </div>
  );
}

// Separate component for social links
function SocialLink({ href, icon }) {
  return (
    <a href={href} className="text-white hover:text-gray-400 transition duration-300">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}
