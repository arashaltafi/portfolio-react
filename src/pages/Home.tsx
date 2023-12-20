import HeaderComponent from "../Components/HeaderComponent"
import HomeComponent from "../Components/HomeComponent"

const Home = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col text-center">
            
            <header className="text-white">
                <HeaderComponent />
            </header>
            <main className="flex items-center justify-center text-white flex-1 text-center">
                <HomeComponent />
            </main>
            <footer className="text-white">footer</footer>
        </div>
    )
}

export default Home