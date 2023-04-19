import './Contact.css';
import Footer from '../Footer';

function Contact() {
  return (
    <div>
    <div className="Contact">
        <div className='Contact-form'>
        <h1>Tell us what's on your mind</h1>
        <form action="mailto:main@ecoliving.com" enctype="text/plain" method="post">
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Subject'></input>
            <input type='text' placeholder='Message'></input>
            <button type="submit" value='send'>Submit</button>
        </form>
        </div>
        </div>
<Footer></Footer>
    </div>
    
  );
}

export default Contact;
