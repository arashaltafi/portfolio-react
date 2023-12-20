import FooterComponent from "../Components/FooterComponent"
import HeaderComponent from "../Components/HeaderComponent"
import HomeComponent from "../Components/HomeComponent"

const Home = () => {
    return (
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
    )
}

export default Home