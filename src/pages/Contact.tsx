import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent";

const Contact = () => {  
  
  return (
    <>
      <div className="relative index-about h-screen w-full flex justify-center items-center flex-col text-center select-none">
        
      </div>

      <ParticlesComponent particlesType={ParticlesType.Snow} />
    </>
  )
}

export default Contact