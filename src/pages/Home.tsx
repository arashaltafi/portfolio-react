import FooterComponent from "../Components/FooterComponent"
import HomeComponent from "../Components/HomeComponent"
import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"

const Home = () => {

    return (
        <>
            <div className="relative h-screen w-full flex justify-center items-center flex-col text-center select-none">
                <main className="flex items-center justify-center text-white flex-1 text-center pb-[160px] zIndex20">
                    <HomeComponent />
                </main>
                <footer className="w-full zIndex20">
                    <FooterComponent />
                </footer>
            </div>

            <ParticlesComponent particlesType={ParticlesType.Stars} />
        </>
    )
}

export default Home