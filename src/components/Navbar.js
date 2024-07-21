import logo from '../Images/logo.png';

function Navbar(){
    return(
        <nav>
            <img src={logo} className="logo"/>
        </nav>
    );
}

export default Navbar;