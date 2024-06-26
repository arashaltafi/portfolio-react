import { useEffect, useState } from 'react'
import { CustomHoverAnimation, CustomMouseMove2 } from '../utils/CustomHoverUtils'
import locationSlice from '../redux/locationSlice';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const Resume = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(locationSlice.actions.addLocation([{
      pathName: location.pathname,
      isLoaded: true
    }]));
  }, [])

  //mouse move animation
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    CustomMouseMove2(setMousePosition)
  }, []);

  const handleClickPdf = (e: any) => {
    e.preventDefault();
    window.open("https://arashaltafi.ir/resume_en.pdf");
  }

  //customHover
  useEffect(() => {
    CustomHoverAnimation('.customHover')
  }, [])

  return (
    <>
      <div className="index-resume h-screen w-full flex justify-center items-center flex-col text-center zIndex20">
        <h1
          className='title text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'
          style={{
            transform: `translate(${Math.round(mousePosition.x)}px, ${Math.round(mousePosition.y)}px)`
          }}>
          {t('resume')}
        </h1>
      </div>

      <div className='h-full w-full bg-zinc-900 flex flex-col gap-20 items-center justify-center pt-6 md:pt-12 pb-12 md:pb-64 zIndex20'>
        <Bounce triggerOnce={true} cascade>
          <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-4 md:pt-20'>{t('resume')}</h2>
        </Bounce>
        <div className='flex flex-row w-1/2 md:w-2/3 items-center justify-center gap-8 zIndex20'>
          <div className='flex flex-col items-center justify-center gap-16'>
            <p className='subtitle text-center'>{t('resume_description')}</p>
            <div className='grid items-center justify-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-16'>
              <Fade triggerOnce={true} cascade>
                <p className='subtitle'><span className='title-withouthover text-green-500'>{t('age')}:</span> 26</p>
                <p className='subtitle'><span className='title-withouthover text-green-500'>{t('address')}:</span> {t('address_tehran_iran')}</p>
                <p className='subtitle'><span className='title-withouthover text-green-500'>{t('freelance_ability')}:</span> {t('yes')}</p>
                <p className='subtitle'><span className='title-withouthover text-green-500'>{t('phone')}:</span> +98 918 767 7641</p>
                <p className='subtitle lg:col-start-2 lg:col-end-4'><span className='title-withouthover text-green-500'>{t('email')}:</span> arashaltafi1377@gmail.com</p>
              </Fade>
            </div>
            <Rotate triggerOnce={true} cascade>
              <button onClick={(e) => handleClickPdf(e)} className='btnHoverResume self-center md:self-start'>{t('download_resume')}</button>
            </Rotate>
          </div>
          <Slide triggerOnce={true} cascade>
            <img className='hidden md:block w-56 md:w-64 lg:w-80 rounded-lg customHover' src="/assets/arash2.jpg" alt="arash altafi" />
          </Slide>
        </div>


        <span className='h-[1px] my-4 md:my-16 w-3/4 bg-gray-100/50'></span>
        <Bounce triggerOnce={true} cascade>
          <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-4 md:pt-20'>{t('services')}</h2>
        </Bounce>
        <div className='flex flex-row flex-wrap w-1/2 md:w-2/3 items-center justify-center gap-12 zIndex20 mt-4'>

          <div className='flex flex-col items-center justify-center gap-6'>
            <Fade triggerOnce={true} cascade>
              <FaCode className='subtitle text-green-500 text-5xl' />
              <h4 className='title text-center'>{t('advertising')}</h4>
              <p className='subtitle font-normal text-center'>{t('advertising_description')}</p>
            </Fade>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <Fade triggerOnce={true} cascade>
              <FaGoodreads className='subtitle text-green-500 text-5xl' />
              <h4 className='title text-center'>{t('application_development')}</h4>
              <p className='subtitle font-normal text-center'>{t('application_description')}</p>
            </Fade>
          </div>
        </div>


        <span className='h-[1px] my-4 md:my-16 w-3/4 bg-gray-100/50'></span>
        <Bounce triggerOnce={true} cascade>
          <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-4 md:pt-20'>{t('language_skills')}</h2>
        </Bounce>
        <div className='flex flex-col w-1/2 md:w-2/3 items-center justify-between zIndex20 mt-4 gap-12'>
          <div className='flex flex-col gap-2 self-start'>
            <Fade triggerOnce={true} cascade>
              <h5 className='subtitle self-start'>{t('persian')}</h5>
              <div className='flex flex-row gap-2'>
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-green-500 text-2xl' />
              </div>
            </Fade>
          </div>
          <div className='flex flex-col gap-2 self-start'>
            <Fade triggerOnce={true} cascade>
              <h5 className='subtitle self-start'>{t('english')}</h5>
              <div className='flex flex-row gap-2'>
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-green-500 text-2xl' />
                <FaCircle className='subtitle text-white text-2xl' />
                <FaCircle className='subtitle text-white text-2xl' />
              </div>
            </Fade>
          </div>
        </div>


        <span className='h-[1px] my-4 md:my-16 w-3/4 bg-gray-100/50'></span>
        <Bounce triggerOnce={true} cascade>
          <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-4 md:pt-20'>{t('programming_skills')}</h2>
        </Bounce>
        <div className='flex flex-row flex-wrap w-1/2 md:w-1/3 items-center justify-center zIndex20 mt-4 gap-16'>
          <Fade triggerOnce={true} cascade>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-90'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>90%</p>
                </span>
              </span>
              <p className='subtitle'>KOTLIN</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-80'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>80%</p>
                </span>
              </span>
              <p className='subtitle'>JAVA</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-70'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>70%</p>
                </span>
              </span>
              <p className='subtitle'>PHP</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-90'>
                <span className='progressBar2'>
                  <p className='subtitle'>90%</p>
                </span>
              </span>
              <p className='subtitle'>MYSQL</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-70'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>70%</p>
                </span>
              </span>
              <p className='subtitle'>MONGO</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-90'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>90%</p>
                </span>
              </span>
              <p className='subtitle'>JS</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-90'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>90%</p>
                </span>
              </span>
              <p className='subtitle'>REACT</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-80'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>80%</p>
                </span>
              </span>
              <p className='subtitle'>NODE JS</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='progressBar-80'>
                <span className='progressBar2'>
                  <p className='subtitle m-auto'>80%</p>
                </span>
              </span>
              <p className='subtitle'>EXPRESS JS</p>
            </div>
          </Fade>
        </div>


        <span className='h-[1px] my-4 md:my-16 w-3/4 bg-gray-100/50'></span>
        <Bounce triggerOnce={true} cascade>
          <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-4 md:pt-20'>{t('knowledge')}</h2>
        </Bounce>


        <div className='w-1/2 grid grid-cols-2 gap-16 items-center justify-center zIndex20'>
          <Fade triggerOnce={true} cascade>
            <div className='flex flex-row items-center justify-center'>
              <TiTick className='subtitle text-green-500 text-5xl' />
              <h6 className='subtitle'>{t('computer_technician')}</h6>
            </div>
            <div className='flex flex-row items-center justify-center'>
              <TiTick className='subtitle text-green-500 text-5xl' />
              <h6 className='subtitle'>{t('android_application')}</h6>
            </div>
            <div className='flex flex-row items-center justify-center'>
              <TiTick className='subtitle text-green-500 text-5xl' />
              <h6 className='subtitle'>{t('advertising_services')}</h6>
            </div>
          </Fade>
        </div>

        <span className='h-[1px] my-4 md:my-16 w-3/4 bg-gray-100/50'></span>
        <Bounce triggerOnce={true} cascade>
          <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-4 md:pt-20'>{t('about_me')}</h2>
        </Bounce>
        <p className='subtitle font-normal w-1/2 md:w-2/3 text-center'>{t('about_description')}</p>

      </div>

    </>
  )
}

export default Resume