import Navbar from './Navbar';
import '../CSS/About.css';

const About = ({ gotoHome, gotoAbout, gotoExpertise, gotoContact }) => {
    return (
        <>
            <Navbar 
            gotoHome={gotoHome} 
            gotoAbout={gotoAbout}
            gotoExpertise={gotoExpertise}
            gotoContact={gotoContact}/>
            <div className='about-container'>
                <h1 className='animate__animated animate__slideInDown'>About Me</h1>
                <p className='animate__animated animate__slideInUp'>
                    Hey people, My name is Ziv but <br/>
                    i guess you already knew that. <br/>
                    I'm 17 years old
                    and i live in Israel. <br/>
                    I used play A LOT of call of duty. <br/>
                    I love Nirvana and Metallica, you could say im a metal enthusiast. <br/>
                    I'm quite seasoned at editing videos and pictures, <br/>
                    having edited montages, funny videos and logos for a while now. <br/>
                    As an avid gamer, i could tell how epic my customer wants <br/>
                    his edited video, and i won't fail to supply.
                </p>
            </div>
        </>
    )
}

export default About;