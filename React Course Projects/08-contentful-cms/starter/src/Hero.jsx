import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            ipsum quaerat! Laborum, voluptas. Voluptas eligendi rem dolor
            inventore molestiae dolore earum necessitatibus odit officiis,
            facere, distinctio ducimus dicta corrupti repellendus.
          </p>
        </div>
        <img className="img" src={heroImg} alt="woman and the browser" />
      </div>
    </section>
  );
};

export default Hero;
