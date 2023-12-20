import Typewriter from 'typewriter-effect';

const HomeComponent = () => {

    return (
        <div className='text-6xl'>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 75
                }}
                onInit={(typewriter) => {
                    typewriter.typeString("I'm Arash Altafi")
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString("Android & Web Developer")
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString("Kotlin & React")
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}
            />

        </div>
    )
}

export default HomeComponent