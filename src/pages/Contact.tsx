import { useEffect, useState } from 'react'
import { CustomMouseMove2 } from '../utils/CustomHoverUtils'
import { useDispatch } from 'react-redux'
import locationSlice from '../redux/locationSlice';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoPersonSharp } from "react-icons/io5";

const Contact = () => {
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
          {t('contactToMe')}
        </h1>
      </div>
      <div className='h-full w-full bg-zinc-900 flex flex-col gap-20 items-center justify-center pt-12 pb-48 zIndex20'>
        <h2 className='title text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pt-20'>{t('contact')}</h2>
        <div className='w-full grid grid-cols-2 gap-y-40'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <FaPhone className='subtitle text-green-500 text-5xl' />
            <p className='title mt-4'>Phone</p>
            <p className='subtitle'>+98 918 767 7641</p>
          </div>
          <div className='flex items-center justify-center flex-col gap-4'>
            <MdEmail className='subtitle text-green-500 text-5xl' />
            <p className='title mt-4'>Email</p>
            <p className='subtitle'>arashaltafi1377@gmail.com</p>
          </div>
          <div className='flex items-center justify-center flex-col gap-4'>
            <ImLocation2 className='subtitle text-green-500 text-5xl' />
            <p className='title mt-4'>Address</p>
            <p className='subtitle'>Tehran, Iran</p>
          </div>
          <div className='flex items-center justify-center flex-col gap-4'>
            <IoPersonSharp className='subtitle text-green-500 text-5xl' />
            <p className='title mt-4'>Ability To Freelance</p>
            <p className='subtitle'>I'm Available For Freelance Project</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact