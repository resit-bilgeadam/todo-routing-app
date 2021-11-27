import { useNavigate } from "react-router-dom";

function CreateTodo() {
    const navigate = useNavigate();

    const addTodo = (e) => {
        e.preventDefault();
        
        // TODO: Yeni todo objesi eklemek için gereken işlemler...

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
                                <div class="form-group">
                                    <label for="todo-input">Todo Title</label>
                                    <input type="text" class="form-control" id="todo-input" placeholder='Enter your todo...' />
                                </div>
                                <button type="submit" class="btn btn-primary">Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;
