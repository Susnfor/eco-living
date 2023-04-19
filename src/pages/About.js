import "./About.css";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <div className="About">
        <h1>Our Values</h1>
      
        <div className="About-hero">
        <div className="pick">
        <img src="/about1.png"/></div>
          <p>
            At Eco-Friendly Living, we believe that small changes can make a big
            impact. Our mission is to empower individuals and communities to
            live more sustainably, by providing resources, tips, and inspiration
            to help them make eco-friendly choices in their daily lives.
          </p>
        </div>
        <div className="About-hero">
          <p>
            We believe that by working together towards a common goal, we can
            create a more sustainable future for ourselves and for generations
            to come. Our team is passionate about the environment and dedicated
            to making a difference.
          </p>
          <div className="pick">
        <img src="/about4.png"/></div>
        </div>
        <div className="About-hero">
        <div className="pick">
        <img src="/about5.png"/></div>
          <p>
            We believe that by promoting sustainable living, we can help reduce
            our impact on the planet and create a more equitable and just world.
            Join us in the movement towards sustainable living today!
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
