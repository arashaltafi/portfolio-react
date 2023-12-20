import { Link } from "react-router-dom"

const HeaderComponent = () => {

    const handleClickPdf = (e: any) => {
        e.preventDefault();
        window.open("https://arashaltafi.ir/resume_en.pdf");
    }

    return (
        <nav className='flex flex-row items-stretch justify-between py-6 px-12 lg:py-8 lg:px-16'>
            <div className="hidden sm:flex flex-row gap-x-8 items-center justify-center child:title">
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/about">About</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/works">Works</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/resume">Resume</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 hover:delay-100 py-8 px-4" to="/">Home</Link>
            </div>
            <div className="flex flex-row gap-x-8 items-center justify-center child:title">
                <div className="hover:custom-animation-rotate hover:transition hover:duration-100 hover:delay-100 py-8 px-4" onClick={(e) => handleClickPdf(e)}>Arash Altafi</div>
            </div>
        </nav>
    )
}

export default HeaderComponent