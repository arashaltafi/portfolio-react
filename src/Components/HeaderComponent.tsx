import { Link } from "react-router-dom"

const HeaderComponent = () => {

    return (
        <nav className='flex flex-row items-stretch justify-between py-16 px-20 lg:py-16 lg:px-24'>
            <div className="hidden sm:flex flex-row gap-x-8 items-center justify-center child:title">
                <Link className="hover:custom-animation hover:transition hover:duration-100 delay-100 py-8 px-4" to="/about">About</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 delay-100 py-8 px-4" to="/works">Works</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 delay-100 py-8 px-4" to="/resume">Resume</Link>
                <Link className="hover:custom-animation hover:transition hover:duration-100 delay-100 py-8 px-4" to="/">Home</Link>
            </div>
            <div className="flex flex-row gap-8 items-center justify-center child:title">
                <a href="https://arashaltafi.ir/resume_en.pdf">Arash Altafi</a>
            </div>
        </nav>
    )
}

export default HeaderComponent