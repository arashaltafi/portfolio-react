import { useEffect } from "react";
import HomeComponent from "../Components/HomeComponent"
import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import locationSlice from "../redux/locationSlice";

const Home = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(locationSlice.actions.addLocation([{
        pathName: location.pathname,
        isLoaded: true
      }]));
    }, [])

    return (
        <>
            <div className="relative index-home h-screen w-full flex justify-center items-center flex-col text-center">
                <main className="w-full h-full flex items-center justify-center text-white zIndex20">
                    <HomeComponent />
                </main>
            </div>

            <ParticlesComponent particlesType={ParticlesType.Links} />
        </>
    )
}

export default Home