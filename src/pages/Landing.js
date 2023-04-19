import './Landing.css';
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <div className="Landing">
        <div className='Landing-header'>
            
            <h1>Eco-Friendly Living</h1>
            <h3><Typewriter
                    
                    onInit={(typewriter)=> {

                    typewriter
                    
                    .typeString("We are welcoming you,")
                        
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("To join the movement towards sustainable living :)")
                    .start();
                    }}
                    /></h3>
        </div>
        <div className='header-btn'>
            <button>Join Us</button>
        </div>
    </div>
  );
}

export default Landing;
