import ParticlesComponent, { ParticlesType } from "../Components/ParticlesComponent";

const About = () => {
  return (
    <div>
      <div>About</div>

      <ParticlesComponent particlesType={ParticlesType.Snow} />
    </div>
  )
}

export default About