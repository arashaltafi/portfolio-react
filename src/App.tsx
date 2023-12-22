import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from "react";
import tippy from 'tippy.js';
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

  const arash = useRef<any>()

  const handleClickPdf = (e: any) => {
    e.preventDefault();
    window.open("https://arashaltafi.ir/resume_en.pdf");
  }

  const changeArashTheme = () => {
    setTimeout(() => {
      arash.current.classList.toggle('text-yellow-300')
    }, 100);
  }

  useEffect(() => {
    tippy('#arashaltafi', {
      content: '<b>See Resume PDF</b>',
      allowHTML: true,
      placement: 'bottom',
      arrow: false,
      animation: 'fade',
      duration: 500,
      theme: 'material',
    });
  }, [])

  return (
    <div className='relative overflow-hidden select-none'>
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

      <nav className='absolute top-0 left-0 right-0 w-full flex flex-row items-stretch justify-between py-6 px-12 lg:py-8 lg:px-16 zIndex20'>
        <div className="hidden sm:flex flex-row gap-x-8 items-center justify-center child:title">
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/about">About</Link>
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/works">Works</Link>
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/resume">Resume</Link>
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/">Home</Link>
        </div>
        <div id="arashaltafi" className="flex flex-row gap-x-8 items-center justify-center child:title" onMouseEnter={changeArashTheme} onMouseLeave={changeArashTheme} onClick={(e) => handleClickPdf(e)}>
          <div className="hover:custom-animation-rotate hover:transition hover:duration-100 hover:delay-100 py-8 px-4">
            <span ref={arash} className="text-gray-400 hover:text-yellow-300">Arash</span> Altafi
          </div>
        </div>
      </nav>

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

      <footer
            className='absolute bottom-0 right-0 flex flex-row items-stretch justify-end py-6 px-8 lg:py-8 lg:pr-12 mb-4 gap-28 xl:gap-36 lg:gap-48 zIndex20'>
            <div className='hidden lg:flex flex-col items-end justify-end flex-1'>
                <div className="child:subtitle-withouthover child:font-normal child:text-gray-300 flex flex-col items-start justify-center gap-3">
                    <p>I'm <span className="text-green-500 font-bold">Android & Web</span> Developer</p>
                    <p><span className="text-purple-500 font-bold">Kotlin</span> & <span className="text-sky-500">React</span></p>
                </div>
            </div>

            <div className='child:subtitle child:font-normal child:text-gray-300 hidden md:flex flex-col items-start justify-end gap-3'>
                <p>E: <span className="font-bold">arashaltafi1377@gmail.com</span></p>
                <p>T: <span className="font-bold">+98 918 767 7641</span></p>
            </div>
        </footer>
    </div>
  );
}

export default App;
