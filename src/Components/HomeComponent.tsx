import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

const HomeComponent = () => {
    const { t } = useTranslation();

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
        <div className='text-2xl md:text-4xl lg:text-7xl'>
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
    )
}

export default HomeComponent