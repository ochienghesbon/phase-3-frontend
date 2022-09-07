import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>By Hesbon Odhiambo</p>
    <Link to="/about" style={{color:"white"}}>About</Link>
    <Link to={"/user"} style={{color:"white",margin:"40px"}}>add user</Link>
        </footer>
    )
}

export default Footer
