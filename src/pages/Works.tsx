import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent"

const Works = () => {
  return (
    <div>
      <div>Resume</div>

      <ParticlesComponent particlesType={ParticlesType.Triangles} />
    </div>
  )
}

export default Works