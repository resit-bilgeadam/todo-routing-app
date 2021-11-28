import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function CreateTodo({onCreate}) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: Math.random(),
            title,
            text,
            completed: false
        }

        onCreate(newTodo);

        navigate('/todos');
    }
    
    return (
        <div>
            <h1>Create Todo Page</h1>

            <hr />

            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <form onSubmit={addTodo}>
                                <div className="form-group">
                                    <label htmlFor="todo-input">Todo Title</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="todo-input" 
                                        name='todo-input'
                                        placeholder='Enter your todo...'
                                        value={title}
                                        onChange={e => setTitle(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="todo-text-input">Todo Description</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="todo-text-input" 
                                        name='todo-text-input'
                                        placeholder='Enter your todo description...'
                                        value={text}
                                        onChange={e => setText(e.target.value)} />
                                </div>

                                <button type="submit" className="btn btn-primary">Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;
