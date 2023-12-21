const FooterComponent = () => {
    return (
        <footer
            className='flex flex-row items-stretch justify-end py-6 px-12 lg:py-8 lg:px-16 mb-4 gap-28 xl:gap-36 lg:gap-48'>
            <div className='hidden md:flex flex-col items-end justify-center  flex-1'>
                <div className="child:subtitle-withouthover child:text-gray-300 flex flex-col items-start justify-center gap-3">
                    <p>I'm <span className="text-green-500">Android & Web</span> Developer</p>
                    <p><span className="text-purple-500">Kotlin</span> & <span className="text-sky-500">React</span></p>
                </div>
            </div>

            <div className='child:subtitle child:text-gray-300 hidden md:flex flex-col items-start justify-center gap-3'>
                <p>E: arashaltafi1377@gmail.com</p>
                <p>T: +98 918 767 7641</p>
            </div>
        </footer>
    )
}

export default FooterComponent