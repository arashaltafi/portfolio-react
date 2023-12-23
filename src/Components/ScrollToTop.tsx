import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import ParticlesComponent, { ParticlesType } from './ParticlesComponent';
import BounceLoader from 'react-spinners/BounceLoader'
import { useSelector } from 'react-redux';

const ScrollToTop = () => {

    const location = useLocation();
    const mainRef = useRef<any>()
    const [prev, setPrev] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false)
    const locationSelector = useSelector((state: any) => state.location);

    useEffect(() => {
        let flag = true;
        if (prev === '/test/test2' || location.pathname === '/test/test2') {
            flag = false
        }

        setPrev(location.pathname)

        if (flag) {
            window.scrollTo(0, 1000);
            document.body.scrollTop = 0; // For Safari
            document.body.scrollTo(0, 0); // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            mainRef.current.scrollTo(0, 0);
        }

        console.log("locationSelector.locations", locationSelector.locations);
        const locationCached = locationSelector.locations.find((lc: any) => {
            return lc.pathName === location.pathname
        })

        if (locationCached?.isLoaded) {
            setLoading(false)
        } else {
            setLoading(true)
        }

        setTimeout(() => {
            setLoading(false)
        }, 500);

        let title = '';
        switch (location.pathname) {
            case '/':
                title = 'Arash Altafi';
                break;
            case '/resume':
                title = 'Resume';
                break;
            case '/contact':
                title = 'Contact';
                break;
            case '/works':
                title = 'Works';
                break;
            default:
                title = 'Arash Altafi';
                break;
        }
        document.title = title

    }, [location]);

    return (
        <div
            ref={mainRef}>
            {loading ? <div className='w-full h-screen bg-zinc-950 flex items-center justify-center'>
                <ParticlesComponent particlesType={ParticlesType.Hyperspace} />
                <BounceLoader color="#FFF176" />
            </div>
                : <Outlet />}
        </div>
    )
};

export default ScrollToTop;