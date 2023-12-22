import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import About from "./pages/About";
import CircleFollowCursor from './Components/CircleFollowCursor';
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

enum LinkType {
  GITHUB = 'github',
  GITLAB = 'gitlab',
  TELEGRAM = 'telegram',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
}

function App() {

  const handleClickLink = (linkType: LinkType) => {
    switch (linkType) {
      case LinkType.GITHUB:
        window.open('https://github.com/arashaltafi', '_blank');
        break;
      case LinkType.GITLAB:
        window.open('https://gitlab.com/arashaltafi', '_blank');
        break;
      case LinkType.TELEGRAM:
        window.open('https://t.me/arashaltafi1377', '_blank');
        break;
      case LinkType.WHATSAPP:
        window.open('https://api.whatsapp.com/send/?phone=989187677641', '_blank');
        break;
      case LinkType.INSTAGRAM:
        window.open('https://instagram.com/arashaltafi', '_blank');
        break;
      case LinkType.LINKEDIN:
        window.open('https://linkedin.com/in/arashaltafi', '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className='index-base relative'>
      <CircleFollowCursor>
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </CircleFollowCursor>

      <div className='absolute bottom-0 left-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-4 py-6 px-8 lg:py-8 lg:pr-12 mb-4 zIndex20'>
        <p className="rotate-90 text-xs md:text-sm lg:text-lg text-gray-300">Follow Me</p>
        <span className="h-[1px] w-20 self-start bg-gray-300 mt-20 mb-16 rotate-90"></span>
        <FaGithub className="subtitle" onClick={() => handleClickLink(LinkType.GITHUB)} />
        <FaGitlab className="subtitle" onClick={() => handleClickLink(LinkType.GITLAB)} />
        <FaTelegram className="subtitle" onClick={() => handleClickLink(LinkType.TELEGRAM)} />
        <FaWhatsapp className="subtitle" onClick={() => handleClickLink(LinkType.WHATSAPP)} />
        <FaInstagram className="subtitle" onClick={() => handleClickLink(LinkType.INSTAGRAM)} />
        <FaLinkedin className="subtitle" onClick={() => handleClickLink(LinkType.LINKEDIN)} />
      </div>
    </div>
  );
}

export default App;
