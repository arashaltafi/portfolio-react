import FooterComponent from "../Components/FooterComponent"
import HomeComponent from "../Components/HomeComponent"
import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"

const Home = () => {

    return (
        <>
            <div className="relative index-home h-screen w-full flex justify-center items-center flex-col text-center select-none">
                <footer className="w-full absolute bottom-0 left-0 right-0 zIndex20">
                    <FooterComponent />
                </footer>
                <main className="w-full h-full flex items-center justify-center text-white flex-1 text-center pb-[160px] zIndex20">
                    <HomeComponent />
                </main>
            </div>

            <ParticlesComponent particlesType={ParticlesType.Stars} />
        </>
    )
}

export default Home