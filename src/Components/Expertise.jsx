import '../CSS/Expertise.css';
import Navbar from './Navbar';
import ImageContainer from './ImageContainer';

const Expertise = ({ gotoHome, gotoAbout, gotoExpertise }) => {
    return (
        <div>
            <Navbar
            gotoExpertise={gotoExpertise}
            gotoHome={gotoHome} 
            gotoAbout={gotoAbout} />
            <div className="expertise-container">
                <h1 className="animate__animated animate__slideInDown">I am proficient in a number of video & picture editing software, such as:</h1>
                <ul className="animate__animated animate__fadeInUp">
                    <li>Premiere Pro</li>
                    <li>After Effects</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>
            <ImageContainer />
        </div>
    )
}

export default Expertise;