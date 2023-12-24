import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
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
import { IoMdMenu } from "react-icons/io";
import InstallButton from './Components/InstallButton';

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
  const location = useLocation();
  const navigate = useNavigate();

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
    // window.location.reload()
  }

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang') || 'en');
  }, [])

  const [isInHome, setIsInHome] = useState<boolean>()
  const [isInContactHome, setIsInContactHome] = useState<boolean>()
  const [isInResumeHome, setIsInResumeHome] = useState<boolean>()
  const [isInWorksHome, setIsInWorksHome] = useState<boolean>()

  useEffect(() => {
    clearOtherPath()

    switch (location.pathname) {
      case '/':
        setIsInHome(true)
        break;
      case '/resume':
        setIsInResumeHome(true)
        break;
      case '/works':
        setIsInWorksHome(true)
        break;
      case '/contact':
        setIsInContactHome(true)
        break;
      default:
        setIsInHome(true)
        break;
    }
  }, [location])

  const clearOtherPath = () => {
    setIsInHome(false)
    setIsInResumeHome(false)
    setIsInWorksHome(false)
    setIsInContactHome(false)
  }

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const handleClickTab = (url: string) => {
    navigate(url)
    setShowMobileMenu(false)
  }

  return (
    <div className='relative select-none'>
      <InstallButton />

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

      <nav className='fixed top-0 left-0 right-0 w-full flex flex-row items-stretch justify-between py-6 px-12 lg:py-8 lg:px-16 zIndex20'>
        <div className="hidden md:flex flex-row gap-x-8 items-center justify-center md:backdrop-blur-[5px]">
          <GrLanguage id="change-language" className="title hover:transition hover:duration-100 hover:delay-100" onClick={changeLang} />
          <Link className={`title hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4 ${isInContactHome && 'text-yellow-300'}`} to="/contact">{t('contact')}</Link>
          <Link className={`title hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4 ${isInWorksHome && 'text-yellow-300'}`} to="/works">{t('works')}</Link>
          <Link className={`title hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4 ${isInResumeHome && 'text-yellow-300'}`} to="/resume">{t('resume')}</Link>
          <Link className={`title hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4 ${isInHome && 'text-yellow-300'}`} to="/">{t('home')}</Link>
        </div>
        <div onClick={() => setShowMobileMenu(true)} className='md:hidden flex flex-row gap-x-8 items-center justify-center'>
          <IoMdMenu className='title w-6 h-6' />
        </div>
        <div id="arashaltafi" className="flex flex-row gap-x-8 items-center justify-center child:title md:backdrop-blur-[5px]" onMouseEnter={changeArashTheme} onMouseLeave={changeArashTheme} onClick={(e) => handleClickPdf(e)}>
          <div className="hover:custom-animation-rotate hover:transition hover:duration-100 hover:delay-100 py-8 px-4">
            <span ref={arash} className="text-gray-400 hover:text-yellow-300">{t('arash')}</span> {t('altafi')}
          </div>
        </div>
      </nav>

      <div
        className={`
      md:hidden flex-col items-center justify-center pt-4 transition fixed left-0 top-0 bottom-0 h-full w-1/2 bg-zinc-600 child:title child:text-zinc-100 text-center zIndex40
      ${showMobileMenu ? 'flex' : 'hidden'}
      `}
      >
        <img className='w-1/3 border-1 border-solid border-red-500 rounded-full' src="/assets/favicon.png" alt="arashaltafi" />
        <span className='w-full h-[1px] bg-zinc-200 m-8'></span>
        <button onClick={() => handleClickTab('/')} className='p-6 hover:text-yellow-500'>{t('home')}</button>
        <span className='w-[90%] h-[1px] bg-zinc-200/20 mx-3'></span>
        <button onClick={() => handleClickTab('/resume')} className='p-6 hover:text-yellow-500'>{t('resume')}</button>
        <span className='w-[90%] h-[1px] bg-zinc-200/20 mx-3'></span>
        <button onClick={() => handleClickTab('/works')} className='p-6 hover:text-yellow-500'>{t('works')}</button>
        <span className='w-[90%] h-[1px] bg-zinc-200/20 mx-3'></span>
        <button onClick={() => handleClickTab('/contact')} className='p-6 hover:text-yellow-500'>{t('contact')}</button>
        <span className='w-[90%] h-[1px] bg-zinc-200/20 mx-3'></span>
        <button onClick={changeLang} className='p-6 hover:text-yellow-500'>{t('change_lang')}</button>

        <div className='flex-1 w-[80%] flex flex-col justify-end items-center child:title child:text-zinc-100 zIndex40'>
          <span className='w-full h-[1px] bg-zinc-200/20 m-3'></span>
          <p className='hover:text-red-500'>{t('arashaltafi')}</p>
        </div>
      </div>

      <div
        className={`md:hidden absolute right-0 top-0 bottom-0 h-full w-1/2 zIndex20 ${showMobileMenu ? 'flex' : 'hidden'}`}
        onClick={() => setShowMobileMenu(false)}
      />

      <div className='fixed bottom-0 left-0 child:font-normal child:text-gray-300 flex flex-col items-center justify-center gap-4 py-6 px-0 md:px-8 lg:py-8 lg:pr-12 mb-4 zIndex20 md:backdrop-blur-[5px]'>
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
        className='fixed bottom-0 right-0 flex flex-row items-stretch justify-end py-6 px-8 lg:py-8 lg:pr-12 mb-4 gap-28 xl:gap-36 lg:gap-48 zIndex20'>
        <div className='hidden lg:flex flex-col items-end justify-end flex-1 md:backdrop-blur-[5px]'>
          <div className="child:subtitle-withouthover child:font-normal child:text-gray-300 flex flex-col items-start justify-center gap-3">
            <p>{t('iam')} <span className="text-green-500 font-bold">{t('android')} & {t('web')}</span> {t('developer')}</p>
            <p><span className="text-purple-500 font-bold">{t('kotlin')}</span> & <span className="text-sky-500">{t('react')}</span></p>
          </div>
        </div>

        <div className='child:subtitle child:font-normal child:text-gray-300 hidden md:flex flex-col items-start justify-end gap-3 md:backdrop-blur-[5px]'>
          <p>{t('e')}: <span className="font-bold">arashaltafi1377@gmail.com</span></p>
          <p>{t('tel')}: <span className="font-bold">+98 918 767 7641</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
