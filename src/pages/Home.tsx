import FooterComponent from "../Components/FooterComponent"
import HeaderComponent from "../Components/HeaderComponent"
import HomeComponent from "../Components/HomeComponent"
import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"
import React, { useState, useEffect } from 'react';
import { CustomHoverAnimation, CustomMouseMove } from '../utils/CustomHoverUtils'

const Home = () => {

    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    useEffect(() => {
        CustomMouseMove(setMousePosition)
    }, []);

    return (
        <>
            <div className="h-screen w-full flex justify-center items-center flex-col text-center">
                <header className="w-full">
                    <HeaderComponent />
                </header>
                <main className="flex items-center justify-center text-white flex-1 text-center pb-[160px]">
                    <HomeComponent />
                </main>
                <footer className="w-full">
                    <FooterComponent />
                </footer>
            </div>

            <ParticlesComponent particlesType={ParticlesType.Stars} />
        </>
    )
}

export default Home