import '../CSS/Navbar.css';

const Navbar = ({ gotoHome, gotoAbout, gotoExpertise, gotoContact }) => {
    return (
        <div className='navbar-container'>
            <a onClick={gotoHome}>Home</a>
            <a onClick={gotoContact}>Contact Me</a>
            <a onClick={gotoAbout}>About</a>
            <a onClick={gotoExpertise}>Expertise</a>
        </div>
    );
}

export default Navbar;