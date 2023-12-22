import HomeComponent from "../Components/HomeComponent"
import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"

const Home = () => {

    return (
        <>
            <div className="relative index-home h-screen w-full flex justify-center items-center flex-col text-center">
                <main className="w-full h-full flex items-center justify-center text-white zIndex20">
                    <HomeComponent />
                </main>
            </div>

            <ParticlesComponent particlesType={ParticlesType.Stars} />
        </>
    )
}

export default Home