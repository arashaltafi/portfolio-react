import { useEffect, useState } from 'react'
import { CustomMouseMove2 } from '../utils/CustomHoverUtils'

const Contact = () => {

  //mouse move animation
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    CustomMouseMove2(setMousePosition)
  }, []);

  return (
    <div className="index-contact h-screen w-full flex justify-center items-center flex-col text-center zIndex20">
      <h1
        className='title text-8xl'
        style={{
          transform: `translate(${Math.round(mousePosition.x)}px, ${Math.round(mousePosition.y)}px)`
        }}>
          Contact To Me
      </h1>

    </div>
  )
}

export default Contact