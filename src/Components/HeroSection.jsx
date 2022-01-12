import '../CSS/HeroSection.css';
import ytIcon from '../images/icons8-youtube-50.png';
import twitterIcon from '../images/icons8-twitter-squared-50.png';
import instaIcon from '../images/icons8-instagram-50.png';

const HeroSection = () => {
    return (
        <div>
            <h1 className='header animate__animated animate__slideInDown'>Ziv Eini</h1>
            <p className='description animate__animated animate__fadeInDown'>A video editor to fit your needs!
            <br/>Montages, Funny Clips, Photoshop, you name it.</p>
            <div className='relevant-links-container animate__animated animate__slideInUp'>
                <div>
                    <a href='https://www.youtube.com/channel/UCmZzDjfqa_ybcdBvo-n0zZQ'><img  alt=''  src={ytIcon}></img></a>
                    <p>My Youtube</p>
                </div>
                <div>
                    <a href='https://twitter.com/EiniZiv'><img alt='' src={twitterIcon}></img></a>
                    <p>My Twitter</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/ziv_eini/'><img  alt=''  src={instaIcon}></img></a>
                    <p>My Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;