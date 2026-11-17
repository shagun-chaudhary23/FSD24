import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

function Home() {
    const [activeForm, setActiveForm] = useState(null);

    return (
        <div>
            <h2>Home</h2>
            <nav>
                <ul>
                    <li>
                        <button type="button" onClick={() => setActiveForm('login')}>
                            Login
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={() => setActiveForm('register')}>
                            Register
                        </button>
                    </li>
                    {/* <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li> */}
                </ul>
            </nav>
            {activeForm === 'login' && <Login />}
            {activeForm === 'register' && <Registration />}
        </div>
    );
}

export default Home;
