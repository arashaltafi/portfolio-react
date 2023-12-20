import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import tippy from 'tippy.js';

const HeaderComponent = () => {

    const arash = useRef<any>()

    const handleClickPdf = (e: any) => {
        e.preventDefault();
        window.open("https://arashaltafi.ir/resume_en.pdf");
    }

    const changeArashTheme = () => {
        setTimeout(() => {
            arash.current.classList.toggle('text-yellow-300')
        }, 100);
    }

    useEffect(() => {
        tippy('#arashaltafi', {
            content: '<b>See Resume PDF</b>',
            allowHTML: true,
            placement: 'bottom',
            arrow: false,
            animation: 'fade',
            duration: 500,
            theme: 'material',
        });
    }, [])

    return (
        <nav className='flex flex-row items-stretch justify-between py-6 px-12 lg:py-8 lg:px-16'>
            <div className="hidden sm:flex flex-row gap-x-8 items-center justify-center child:title">
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/about">About</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/works">Works</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/resume">Resume</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/">Home</Link>
            </div>
            <div id="arashaltafi" className="flex flex-row gap-x-8 items-center justify-center child:title" onMouseEnter={changeArashTheme} onMouseLeave={changeArashTheme} onClick={(e) => handleClickPdf(e)}>
                <div className="hover:custom-animation-rotate hover:transition hover:duration-100 hover:delay-100 py-8 px-4">
                    <span ref={arash} className="text-gray-400 hover:text-yellow-300">Arash</span> Altafi
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent