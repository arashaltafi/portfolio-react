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

  return (
    <>
      <div className="index-contact h-screen w-full flex justify-center items-center flex-col text-center zIndex20">
        <h1
          className='title text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'
          style={{
            transform: `translate(${Math.round(mousePosition.x)}px, ${Math.round(mousePosition.y)}px)`
          }}>
          {t('resume')}
        </h1>
      </div>

      <div className='h-full w-full bg-zinc-900 flex flex-col gap-20 items-center justify-center pt-6 md:pt-12 pb-12 md:pb-64'>
        <h2 className='title text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-20'>{t('resume')}</h2>

      </div>


    </>
  )
}

export default Resume