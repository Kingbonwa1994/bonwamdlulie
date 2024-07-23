import { ImTelegram } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiThreadsLogoFill } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa6";

import { GrLinkedin } from "react-icons/gr";

import { SiGmail } from "react-icons/si";

interface PageFourProps {
  isActive: boolean; // Corrected type to boolean
}
export default function PageFour({ isActive } : PageFourProps){
  return (
    <div className={`h-screen ${isActive ? '' : 'hidden'}`}>
      {/* Content for Component X */}
    </div>
  );
}
