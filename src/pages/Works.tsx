import { useEffect, useState } from 'react'
import { CustomMouseMove2 } from '../utils/CustomHoverUtils'
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import locationSlice from '../redux/locationSlice';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

const Works = () => {
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

  const customStyle = 'text-shadow: 5px 5px 20px'

  const firstSentence = `
      <strong><span style="color: #fff; ${customStyle} #fff;">${t('iam')}</span><span style="color: #F44336; ${customStyle} #C62828;"> ${t('arashaltafi')} </span></strong>
  `;

  const secondSentence = `
      <strong><span style="color: #4CAF50; ${customStyle} #2E7D32;">${t('android')}</span><span style="color: #fff; ${customStyle} #fff;"> ${t('and')} </span><span style="color: #FFEB3B; ${customStyle} #F9A825;">${t('front')}</span><span style="color: #fff; ${customStyle} #fff;"> ${t('developer')}</span></strong>
  `;

  const thirdSentence = `
      <strong><span style="color: #AB47BC; ${customStyle} #8E24AA;">${t('kotlin')}</span><span style="color: #fff; ${customStyle} #fff;"> ${t('and')} </span><span style="color: #03A9F4; ${customStyle} #0277BD;">${t('react')}</span></strong>
  `;

  return (
    <>
      <div className="index-contact h-[80vh] w-full flex justify-center items-center flex-col text-center zIndex20">
        <h1
          className='title text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'
          style={{
            transform: `translate(${Math.round(mousePosition.x)}px, ${Math.round(mousePosition.y)}px)`
          }}>
          {t('works')}
        </h1>
      </div>

      <div className='h-full w-full bg-zinc-950 flex flex-col gap-20 items-center justify-center pt-6 md:pt-12 pb-12 md:pb-64 zIndex20'>
        <div className='text-2xl md:text-3xl lg:text-4xl'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter.typeString(firstSentence)
                .pauseFor(2000)
                .deleteAll()
                .typeString(secondSentence)
                .pauseFor(1000)
                .deleteAll()
                .typeString(thirdSentence)
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <span className='h-[1px] my-16 w-3/4 bg-gray-100/50'></span>
        <h2 className='title text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl pt-8'>{t('applications')}</h2>
        <div className='flex flex-col w-full md:w-2/3 items-center justify-between zIndex20 mt-4 gap-8'>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowRed hover:scale-105 transition' src="https://arashaltafi.ir/images//mrEnglish/0.png" alt="mrEnglish" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowPurple hover:scale-105 transition' src="https://arashaltafi.ir/images/tvOnline/0.png" alt="tvOnline" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowWhite hover:scale-105 transition' src="https://arashaltafi.ir/images/speedMeter/0.png" alt="speedMeter" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowBlue hover:scale-105 transition' src="https://arashaltafi.ir/images/workout/0.png" alt="workout" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowPurple hover:scale-105 transition' src="https://arashaltafi.ir/images/meditation/icon.png" alt="meditation" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowWhite hover:scale-105 transition' src="https://arashaltafi.ir/images/be_vaght_film/be_vaght_film_main2.png" alt="Video" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>

          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowPurple hover:scale-105 transition' src="https://arashaltafi.ir/images/neshan/0.png" alt="neshan" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center gap-12'>
            <img className='w-2/3 cursor-pointer dropShadowRed hover:scale-105 transition' src="https://arashaltafi.ir/images/chatGpt/0.png" alt="chatGpt" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center gap-12'>
            <img className='w-2/3 cursor-pointer dropShadowBlue hover:scale-105 transition' src="https://arashaltafi.ir/images/documentBage/0.png" alt="documentBage" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowWhite hover:scale-105 transition' src="https://arashaltafi.ir/images/driving/0.png" alt="driving" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowRed hover:scale-105 transition' src="https://arashaltafi.ir/images/bmi/0.png" alt="bmi" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowGreen hover:scale-105 transition' src="https://arashaltafi.ir/images/joke/joke_main.png" alt="joke" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowPurple hover:scale-105 transition' src="https://arashaltafi.ir/images/salavat_shomar/salavat_main.png" alt="salavat shomar" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowRed hover:scale-105 transition' src="https://arashaltafi.ir/images/shop2/shop_main.png" alt="shop" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowBlue hover:scale-105 transition' src="https://arashaltafi.ir/images/WhatsAppDownloader/whatsappdownloader_main.png" alt="WhatsAppDownloader" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowGreen hover:scale-105 transition' src="https://arashaltafi.ir/images/calculator/icon.png" alt="calculator" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>



          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowWhite hover:scale-105 transition' src="https://arashaltafi.ir/images/shop1/shop_main.png" alt="shop" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>


          <span className='h-[1px] my-16 w-2/3 bg-gray-100/20'></span>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-2/3 cursor-pointer dropShadowRed hover:scale-105 transition' src="https://arashaltafi.ir/images/videoToGif/0.png" alt="videoToGif" />
            <div className='flex flex-row items-center justify-around gap-16'>
              <button className='btnHoverWorks'>See In Market</button>
              <button className='btnHoverWorks'>Gallery</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Works