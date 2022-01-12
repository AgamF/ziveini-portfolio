import pp from '../images/icons8-adobe-premiere-pro-200.png';
import ae from '../images/icons8-adobe-after-effects-200.png';
import ps from '../images/icons8-adobe-photoshop-200.png';
import '../CSS/ImageContainer.css';

const ImageContainer = () => {
    return (
        <div className='img-container animate__animated animate__slideInUp'>
            <img src={pp} alt=''/>
            <img src={ae} alt=''/>
            <img src={ps} alt=''/>
        </div>
    )
}

export default ImageContainer;