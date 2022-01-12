import '../CSS/Contact.css';
import Navbar from './Navbar';

const Contact = ({ gotoHome, gotoAbout, gotoExpertise, gotoContact }) => {
    return (
        <div>
            <Navbar 
            gotoExpertise={gotoExpertise}
            gotoHome={gotoHome} 
            gotoAbout={gotoAbout}
            gotoContact={gotoContact}/>
            <div className="contact-container">
                <h1 className="animate__animated animate__slideInDown">You can contact me using my Email:</h1>
                <h3 className="animate__animated animate__slideInUp">ZIVEINIZIV99@gmail.com</h3>
            </div>
        </div>
    )
}

export default Contact;