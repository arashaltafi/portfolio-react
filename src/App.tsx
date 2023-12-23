import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import tippy from 'tippy.js';
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import CircleFollowCursor from './Components/CircleFollowCursor';
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import NotFound from './pages/NotFound';
import './localiztion/i18nextSetting';
import { useTranslation } from 'react-i18next';

enum LinkType {
  GITHUB = 'github',
  GITLAB = 'gitlab',
  TELEGRAM = 'telegram',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
}

function App() {
  const { t, i18n } = useTranslation();

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
      content: `<b>${t('see_resume')}</b>`,
      allowHTML: true,
      placement: 'bottom',
      arrow: false,
      animation: 'fade',
      duration: 500,
      theme: 'material',
    });

    tippy('#change-language', {
      content: `<b>${t('change_language')}</b>`,
      allowHTML: true,
      placement: 'bottom',
      arrow: false,
      animation: 'fade',
      duration: 500,
      theme: 'material',
    });
  }, [])

  const changeLang = () => {
    if (i18n.language === 'en') {
      localStorage.setItem('lang', 'fa');
      i18n.changeLanguage('fa');
    } else {
      localStorage.setItem('lang', 'en')
      i18n.changeLanguage('en');
    }
    window.location.reload()
  }

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang') || 'en');
  }, [])

  return (
    <div className='relative overflow-hidden select-none'>
      <CircleFollowCursor>
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CircleFollowCursor>

      <nav className='absolute top-0 left-0 right-0 w-full flex flex-row items-stretch justify-between py-6 px-12 lg:py-8 lg:px-16 zIndex20'>
        <div className="hidden sm:flex flex-row gap-x-8 items-center justify-center child:title">
          <GrLanguage id="change-language" className="title hover:transition hover:duration-100 hover:delay-100" onClick={changeLang} />
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/contact">{t('contact')}</Link>
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/works">{t('works')}</Link>
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/resume">{t('resume')}</Link>
          <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/">{t('home')}</Link>
        </div>
        <div id="arashaltafi" className="flex flex-row gap-x-8 items-center justify-center child:title" onMouseEnter={changeArashTheme} onMouseLeave={changeArashTheme} onClick={(e) => handleClickPdf(e)}>
          <div className="hover:custom-animation-rotate hover:transition hover:duration-100 hover:delay-100 py-8 px-4">
            <span ref={arash} className="text-gray-400 hover:text-yellow-300">{t('arash')}</span> {t('altafi')}
          </div>
        </div>
      </nav>

      <div className='absolute bottom-0 left-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-4 py-6 px-8 lg:py-8 lg:pr-12 mb-4 zIndex20'>
        <p className="rotate-90 text-xs md:text-sm lg:text-lg text-gray-300">{t('follow_me')}</p>
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
            <p>{t('iam')} <span className="text-green-500 font-bold">{t('android')} & {t('web')}</span> {t('developer')}</p>
            <p><span className="text-purple-500 font-bold">{t('kotlin')}</span> & <span className="text-sky-500">{t('react')}</span></p>
          </div>
        </div>

        <div className='child:subtitle child:font-normal child:text-gray-300 hidden md:flex flex-col items-start justify-end gap-3'>
          <p>{t('email')}: <span className="font-bold">arashaltafi1377@gmail.com</span></p>
          <p>{t('tel')}: <span className="font-bold">+98 918 767 7641</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
