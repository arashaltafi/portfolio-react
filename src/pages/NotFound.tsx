import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { CustomHoverAnimation, CustomMouseMove } from '../utils/CustomHoverUtils'

const NotFound = () => {

    //mouse move animation
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    useEffect(() => {
        CustomMouseMove(setMousePosition)
    }, []);

    //customHover
    useEffect(() => {
        CustomHoverAnimation('.customHover')
    }, [])

    return (
        <>
            <div className="relative index-404 h-screen w-full flex justify-center items-center flex-col text-center gap-16 zIndex20">
                <div
                    className="w-64 h-52 title-withouthover"
                    style={{
                        backgroundPosition: `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
                        backgroundImage: 'url("./assets/404.png")',
                        backgroundSize: '100% 100%',
                        filter: 'drop-shadow(10px 10px 3px #F44336)',
                    }} />
                <div className="flex flex-col gap-8 items-center justify-center">
                    <span className="title-withouthover text-6xl"><span>4  0  4</span></span>
                    <span className="title-withouthover text-3xl">Sorry, Not Found!</span>
                </div>
                <Link to="/" className="customHover btnHover">Go Back</Link>
            </div>
        </>
    )
}

export default NotFound