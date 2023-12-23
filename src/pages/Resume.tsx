import { useEffect, useState } from 'react'
import { CustomMouseMove2 } from '../utils/CustomHoverUtils'
import locationSlice from '../redux/locationSlice';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
        <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-20'>{t('resume')}</h2>
        <div className='flex flex-row w-2/3 items-center justify-center gap-8 zIndex20'>
          <div className='flex flex-col items-center justify-center gap-16'>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos nisi omnis dolore veniam amet quas distinctio sed non.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-12'>
              <p className='subtitle'><span className='subtitle text-green-500'>Age:</span> 26</p>
              <p className='subtitle'><span className='subtitle text-green-500'>Address:</span> Tehran, Iran</p>
              <p className='subtitle'><span className='subtitle text-green-500'>Freelance Ability:</span> Yes</p>
              <p className='subtitle'><span className='subtitle text-green-500'>Phone:</span> +98 918 767 7641</p>
              <p className='subtitle lg:col-start-2 lg:col-end-4'><span className='subtitle text-green-500'>Email:</span> arashaltafi1377@gmail.com</p>
            </div>
            <button onClick={(e) => handleClickPdf(e)} className='btnHoverResume self-center md:self-start'>Download Resume</button>
          </div>
          <img className='hidden md:block w-56 md:w-64 lg:w-80' src="/assets/arash2.jpg" alt="arash altafi" />
        </div>
      </div>

    </>
  )
}

export default Resume