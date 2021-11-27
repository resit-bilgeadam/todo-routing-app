import {Link, useNavigate} from 'react-router-dom';

function TodoList() {
    const navigate = useNavigate();

    const deleteTodo = () => {
        // TODO: tıklanan todoyu silmek için gereken işlemler...
    }

    return (
        <div className='row'>
            <div className='col-4 my-3'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <h3 className='card-title'>Todo 1</h3>

                        <p className='card-text'>Todo description...</p>

                        <Link to='3' className='btn btn-primary m-1'>Edit</Link>
                        <button onClick={deleteTodo} className='btn btn-danger m-1'>Delete</button>
                        <button className='btn btn-success m-1'>Completed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;
