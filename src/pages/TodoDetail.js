import {useNavigate} from 'react-router-dom';

function TodoDetail() {
    const navigate = useNavigate();

    const saveTodo = (e) => {
        e.preventDefault();

        // TODO: save etmek için gerek işlemler...

        navigate('/todos');
    }

    return (
        <div className='row'>
            <div className='col-4 offset-4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <form onSubmit={saveTodo}>
                            <div class="form-group">
                                <label for="todo-input">Todo Title</label>
                                <input value='Todo 1' type="text" class="form-control" id="todo-input" placeholder='Enter your todo...' />
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Save Todo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail;
