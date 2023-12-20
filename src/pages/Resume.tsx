import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"

const Resume = () => {

  return (
    <div>
      <div>Resume</div>

      <ParticlesComponent particlesType={ParticlesType.Links} />
    </div>
  )
}

export default Resume