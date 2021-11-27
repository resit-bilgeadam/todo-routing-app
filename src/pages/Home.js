import {Link} from 'react-router-dom';

function Home() {

    
    return (
        <div>
            <h1>Todo Routing App</h1>
            <Link to='/create' className='btn btn-primary btn-lg'>
                New Todo
            </Link>
        </div>
    )
}

export default Home;
