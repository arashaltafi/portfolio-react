import { useEffect, useState } from 'react'
import { CustomMouseMove2 } from '../utils/CustomHoverUtils'
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import locationSlice from '../redux/locationSlice';

const Works = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationSlice.actions.addLocation([{
      pathName: location.pathname,
      isLoaded: true
    }]));
  }, [])

  //mouse move animation
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    CustomMouseMove2(setMousePosition)
  }, []);

  return (
    <div className="index-contact h-screen w-full flex justify-center items-center flex-col text-center zIndex20">
      <h1
        className='title text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'
        style={{
          transform: `translate(${Math.round(mousePosition.x)}px, ${Math.round(mousePosition.y)}px)`
        }}>
        Works
      </h1>

    </div>
  )
}

export default Works