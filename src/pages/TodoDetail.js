import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function TodoDetail({todos, onUpdate}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [completed, setCompleted] = useState(false);

    const saveTodo = (e) => {
        e.preventDefault();

        const updatedTodo = {
            id: Number(id), 
            title, 
            text, 
            completed
        }
        onUpdate(updatedTodo)

        navigate('/todos');
    }

    useEffect(() => {
        const selectedTodo = todos.find(todo => todo.id === Number(id));

        setTitle(selectedTodo.title);
        setText(selectedTodo.text);
        setCompleted(selectedTodo.completed);
    }, [id])

    return (
        <div className='row'>
            <div className='col-4 offset-4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <form onSubmit={saveTodo}>
                            <div className="form-group">
                                <label htmlFor="todo-input">Todo Title</label>
                                <input 
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    type="text" 
                                    className="form-control" 
                                    name='todo-input'
                                    id="todo-input" 
                                    placeholder='Enter your todo...' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="todo-text-input">Todo Description</label>
                                <input 
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    type="text" 
                                    className="form-control"
                                    name='todo-text-input' 
                                    id="todo-text-input" 
                                    placeholder='Enter your todo description...' />
                            </div>

                            <div className="custom-control custom-switch">
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input" 
                                    id="todo-switch"
                                    checked={completed}
                                    onChange={e => setCompleted(e.target.checked)} />

                                <label className="custom-control-label" htmlFor="todo-switch" >
                                    {completed ? 'Completed' : 'Not Completed'}
                                </label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary mt-3">Save Todo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail;
