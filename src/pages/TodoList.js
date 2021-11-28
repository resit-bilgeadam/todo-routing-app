import {Link, useNavigate} from 'react-router-dom';



function TodoList({todos, onUpdate, onDelete}) {
    const navigate = useNavigate();

    const toggleCompleted = (id) => {
        const selectedTodo = todos.find(todo => todo.id === id);
        const todo = {
            ...selectedTodo,
            completed: !selectedTodo.completed
        }

        onUpdate(todo)
    }

    return (
        <div className='row'>
            {
                todos ?
                todos.map(todo => (
                    <div className='col-4 my-3' key={todo.id}>
                        <div className='card shadow'>
                            <div className='card-body'>
                                <h3 className='card-title'>{todo.title}</h3>

                                <p className='card-text'>{todo.text}</p>

                                <Link to={`${todo.id}`} className='btn btn-primary m-1'>
                                    Edit
                                </Link>
                                <button onClick={() => onDelete(todo.id)} className='btn btn-danger m-1'>
                                    Delete
                                </button>
                                <button 
                                    className={`btn m-1 ${todo.completed ? 'btn-success' : 'btn-secondary'}`}
                                    onClick={() => toggleCompleted(todo.id)}>
                                    {todo.completed ? 'Completed' : 'Not Completed'}
                                </button>
                            </div>
                        </div>
                    </div>
                )) :
                <h1>...LOADING</h1>
            }
        </div>
    )
}

export default TodoList;
