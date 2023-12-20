import Typewriter from 'typewriter-effect';

const HomeComponent = () => {

    const customStyle = 'text-shadow: 5px 5px 20px'

    const firstSentence = `
        <strong><span style="color: #fff; ${customStyle} #fff;">I'm</span><span style="color: #F44336; ${customStyle} #C62828;"> Arash Altafi </span></strong>
    `;

    const secondSentence = `
        <strong><span style="color: #4CAF50; ${customStyle} #2E7D32;">Android</span><span style="color: #fff; ${customStyle} #fff;"> And </span><span style="color: #FFEB3B; ${customStyle} #F9A825;">Front</span><span style="color: #fff; ${customStyle} #fff;"> Developer</span></strong>
    `;

    const thirdSentence = `
        <strong><span style="color: #AB47BC; ${customStyle} #8E24AA;">Kotlin</span><span style="color: #fff; ${customStyle} #fff;"> And </span><span style="color: #03A9F4; ${customStyle} #0277BD;">React</span></strong>
    `;

    return (
        <div className='text-2xl md:text-4xl lg:text-7xl drop-shadow-xl shadow-red-500'>
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