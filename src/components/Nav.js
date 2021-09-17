import {Link} from 'react-router-dom';
import './styles/Nav.css';

export default function Nav() {
    return (
        <nav>
            <h1>Lambda Eats</h1>
            <div>
                <Link to={'/'} className='navBtn'>Home</Link>
                <Link to={'/'} className='navBtn'>Help</Link>
            </div>
        </nav>
    );
};