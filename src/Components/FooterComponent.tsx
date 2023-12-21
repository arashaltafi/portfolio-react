
const FooterComponent = () => {

    return (
        <footer
            className='flex flex-row items-stretch justify-end py-6 px-8 lg:py-8 lg:pr-12 mb-4 gap-28 xl:gap-36 lg:gap-48'>
            <div className='hidden md:flex flex-col items-end justify-end  flex-1'>
                <div className="child:subtitle-withouthover child:font-normal child:text-gray-300 flex flex-col items-start justify-center gap-3">
                    <p>I'm <span className="text-green-500 font-bold">Android & Web</span> Developer</p>
                    <p><span className="text-purple-500 font-bold">Kotlin</span> & <span className="text-sky-500">React</span></p>
                </div>
            </div>

            <div className='child:subtitle child:font-normal child:text-gray-300 hidden md:flex flex-col items-start justify-end gap-3'>
                <p>E: <span className="font-bold">arashaltafi1377@gmail.com</span></p>
                <p>T: <span className="font-bold">+98 918 767 7641</span></p>
            </div>
        </footer>
    )
}

export default FooterComponent