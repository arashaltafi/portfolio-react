import { Link } from "react-router-dom"

const HeaderComponent = () => {

    return (
        <nav className='flex flex-row items-stretch justify-between py-16 px-20 lg:py-20 lg:px-24'>
            <div className="hidden sm:flex flex-row gap-x-12 items-center justify-center child:title">
                <Link to="/about">About</Link>
                <Link to="/works">Works</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/">Home</Link>
            </div>
            <div className="flex flex-row gap-8 items-center justify-center child:title">
                <a href="https://arashaltafi.ir/resume_en.pdf">Arash Altafi</a>
            </div>
        </nav>
    )
}

export default HeaderComponent