import {NavLink} from 'react-router-dom';

function Toolbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Todo App</NavLink>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create">New Todo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/todos">Todos</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Toolbar;
