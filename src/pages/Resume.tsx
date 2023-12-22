import { useEffect, useState } from 'react'
import { CustomMouseMove2 } from '../utils/CustomHoverUtils'

const Resume = () => {

  //mouse move animation
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    CustomMouseMove2(setMousePosition)
  }, []);

  return (
    <div className="relative index-resume h-screen w-full flex justify-center items-center flex-col text-center zIndex20">
      <div className="flex justify-center items-center text-center">
        <h1
          className="title text-8xl text-center"
          style={{
            position: 'absolute',
            top: `calc(40% + ${mousePosition.y}px)`,
            left: `calc(30% + ${mousePosition.x}px)`,
          }}>Resume</h1>
      </div>

    </div>
  )
}

export default Resume